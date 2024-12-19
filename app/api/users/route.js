import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import clientPromise from "../mongodb";

// Define the schema for user data
const userSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Secret key for JWT signing
const SECRET_KEY = process.env.SECRET_KEY;

// Named export for POST (register or login)
export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("M2HQ"); // Replace with your database name
  const usersCollection = db.collection("users");

  try {
    const body = await request.json();

    // Validate the request body strictly
    const validatedData = userSchema.parse(body);

    // Check if the user exists
    const user = await usersCollection.findOne({
      username: validatedData.username,
    });
    if (user) {
      // If user exists, verify the password
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

      // Generate a JWT token
      const token = jwt.sign(
        { id: user._id, username: user.username },
        SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      // Return the token, username, and user ID
      return new Response(
        JSON.stringify({
          message: "Login successful",
          token,
          username: user.username,
          id: user._id,
        }),
        { status: 200 }
      );
    } else {
      // If user doesn't exist, create a new user
      const hashedPassword = await bcrypt.hash(validatedData.password, 10);

      const newUser = {
        username: validatedData.username,
        password: hashedPassword,
        createdAt: new Date(),
      };

      const result = await usersCollection.insertOne(newUser);

      // Generate a JWT token for the new user
      const token = jwt.sign(
        { id: result.insertedId, username: newUser.username },
        SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      // Return the token, username, and user ID
      return new Response(
        JSON.stringify({
          message: "Registration successful",
          token,
          username: newUser.username,
          id: result.insertedId,
        }),
        { status: 201 }
      );
    }
  } catch (error) {
    if (error.name === "ZodError") {
      return new Response(JSON.stringify({ error: error.errors }), {
        status: 400,
      });
    }
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
    });
  }
}
