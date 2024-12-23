import { z } from "zod";
import bcrypt from "bcryptjs";
import clientPromise from "../../mongodb";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

const registerSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("M2HQ");
  console.log("Connected to MongoDB");
  const usersCollection = db.collection("users");

  try {
    // Add CORS headers
    if (request.method === "OPTIONS") {
      return new NextResponse(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Authorization, Content-Type",
        },
      });
    }

    const body = await request.json();
    const validatedData = registerSchema.parse(body);

    // Check if user exists
    const existingUser = await usersCollection.findOne({
      username: validatedData.username,
    });

    if (existingUser) {
      return new Response(JSON.stringify({ error: "Username already taken" }), {
        status: 409,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Hash password and store the user
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    const newUser = {
      username: validatedData.username,
      password: hashedPassword,
      createdAt: new Date(),
    };
    const result = await usersCollection.insertOne(newUser);

    // Generate token
    const token = jwt.sign(
      { id: result.insertedId, username: validatedData.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return new Response(
      JSON.stringify({
        message: "Registration successful",
        token,
        username: validatedData.username,
        id: result.insertedId,
      }),
      {
        status: 201,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    if (error.name === "ZodError") {
      return new Response(JSON.stringify({ error: error.errors }), {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
