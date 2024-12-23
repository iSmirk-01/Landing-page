import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware triggered");

  const response = NextResponse.next();

  // Allow cross-origin requests from your frontend
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://landing-page-five-neon.vercel.app"
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Check the request method
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: response.headers,
    });
  }

  // If middleware is working, this should show in the console log
  return response;
}

export const config = {
  matcher: ["/api/:path*"], // Make sure this is the correct pattern for your routes
};
