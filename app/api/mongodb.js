import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Add this to your .env file
const options = {};

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env");
}

let client;
let clientPromise;

// Use a global variable to preserve the client in all environments
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// Debug logs
clientPromise
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

export default clientPromise;
