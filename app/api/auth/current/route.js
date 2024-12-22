import jwt from "jsonwebtoken";
import clientPromise from "../../mongodb";

const SECRET_KEY = process.env.SECRET_KEY;

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db("M2HQ");
  const usersCollection = db.collection("users");

  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);

    const user = await usersCollection.findOne({ _id: decoded.id });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ username: user.username, id: user._id }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
    });
  }
}