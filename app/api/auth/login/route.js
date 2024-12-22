import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import clientPromise from "../../mongodb";

const SECRET_KEY = process.env.SECRET_KEY;

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("M2HQ");
  const usersCollection = db.collection("users");

  try {
    const body = await request.json();
    const validatedData = loginSchema.parse(body);

    // Check if user exists
    const user = await usersCollection.findOne({
      username: validatedData.username,
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Invalid username or password" }),
        { status: 401 }
      );
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(
      validatedData.password,
      user.password
    );

    if (!passwordMatch) {
      return new Response(
        JSON.stringify({ error: "Invalid username or password" }),
        { status: 401 }
      );
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return new Response(
      JSON.stringify({
        message: "Login successful",
        token,
        username: user.username,
        id: user._id,
      }),
      { status: 200 },
      console.log("login successful")
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
    });
  }
}
