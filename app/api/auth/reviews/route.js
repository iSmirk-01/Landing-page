import { z } from "zod";
import jwt from "jsonwebtoken";
import clientPromise from "../../mongodb";

// Define your schema
const reviewSchema = z.object({
  name: z.string().min(1).max(50, "Name must be between 1 and 50 characters"),
  review: z
    .string()
    .min(1)
    .max(500, "Review must be between 1 and 500 characters"),
  rating: z.number().min(1).max(5, "Rating must be between 1 and 5"), // Added rating field
});

// Secret key for JWT validation
const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY)
  throw new Error("SECRET_KEY is not set in the environment variables");

// Middleware to authenticate JWT
async function authenticateToken(req) {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;
  if (!token) {
    return {
      isAuthenticated: false,
      error: { status: 401, message: "Token is required" },
    };
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return { isAuthenticated: true, user: decoded };
  } catch (error) {
    return {
      isAuthenticated: false,
      error: { status: 403, message: "Invalid or expired token" },
    };
  }
}

// Named export for the GET method
export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("M2HQ");
    const reviewsCollection = db.collection("reviews");

    // Pagination
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    const reviews = await reviewsCollection
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray();

    return new Response(JSON.stringify({ reviews }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch reviews" }), {
      status: 500,
    });
  }
}

// Named export for the POST method
export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("M2HQ");
  const reviewsCollection = db.collection("reviews");

  // Authenticate the token
  const { isAuthenticated, user, error } = await authenticateToken(request);
  if (!isAuthenticated) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.status,
    });
  }

  try {
    const body = await request.json();
    const validatedData = reviewSchema.parse(body);

    const newReview = {
      ...validatedData,
      createdAt: new Date().toISOString(),
      userId: user?.id, // Prefer `id` over `username`
    };
    await reviewsCollection.insertOne(newReview);

    return new Response(
      JSON.stringify({
        message: "Review added successfully",
        review: newReview,
      }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    if (error.name === "ZodError") {
      return new Response(JSON.stringify({ error: error.errors }), {
        status: 400,
      });
    }
    return new Response(JSON.stringify({ error: "Failed to add review" }), {
      status: 500,
    });
  }
}
