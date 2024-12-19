// /api/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Add this to your .env file
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env");
}

if (process.env.NODE_ENV === "development") {
  // Use a global variable to preserve the client across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client every time
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
