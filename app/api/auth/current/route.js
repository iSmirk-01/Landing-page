import jwt from "jsonwebtoken";
import clientPromise from "../../mongodb";
import { ObjectId } from "mongodb"; // Import ObjectId directly

const SECRET_KEY = process.env.SECRET_KEY;

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db("M2HQ");
  const usersCollection = db.collection("users");

  try {
    // Extract and validate the Authorization header
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);

    // Convert the decoded ID to ObjectId correctly
    const user = await usersCollection.findOne({
      _id: new ObjectId(decoded.id.toString()),
    });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    // If everything is valid, return user details and token
    return new Response(
      JSON.stringify({
        id: user._id, // Include the ID in the response
        username: user.username,
        token, // Return the token for re-use
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
    });
  }
}
