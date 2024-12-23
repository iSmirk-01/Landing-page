import clientPromise from "../../mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("M2HQ");
  const usersCollection = db.collection("users");

  try {
    const body = await request.json();
    const { username, password } = body;

    const user = await usersCollection.findOne({ username });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: "Invalid password" }), {
        status: 401,
      });
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY);
    return new Response(JSON.stringify({ token }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
