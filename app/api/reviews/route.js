import { z } from "zod";
import jwt from "jsonwebtoken";
import clientPromise from "../mongodb";

// Define your schema
const reviewSchema = z.object({
  name: z.string().min(1, "Name is required"),
  review: z.string().min(1, "Review is required"),
  rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
});

// Secret key for JWT validation
const SECRET_KEY = process.env.SECRET_KEY; // Replace with a secure value stored in an environment variable

// Middleware to authenticate JWT
async function authenticateToken(req) {
  const token = req.headers.get("Authorization")?.split(" ")[1]; // Extract token from Authorization header
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
    const db = client.db("M2HQ"); // Replace with your database name
    const reviewsCollection = db.collection("reviews");

    const reviews = await reviewsCollection.find({}).toArray();
    return new Response(JSON.stringify({ reviews }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch reviews" }), {
      status: 500,
    });
  }
}

// Named export for the POST method
export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("M2HQ"); // Replace with your database name
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

    // Validate request body against schema
    const validatedData = reviewSchema.parse(body);

    // Insert validated data into the database
    const newReview = {
      ...validatedData,
      createdAt: new Date(),
      userId: user?.username, // Attach user info
    };
    await reviewsCollection.insertOne(newReview);

    return new Response(
      JSON.stringify({
        message: "Review added successfully",
        review: newReview,
      }),
      { status: 201 }
    );
  } catch (error) {
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
