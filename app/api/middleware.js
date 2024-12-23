export function middleware(req) {
  const allowedOrigins = ["http://localhost:3000", "https://yourfrontend.com"]; // Add your frontend URLs here
  const origin = req.headers.get("Origin");

  if (allowedOrigins.includes(origin)) {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Access-Control-Allow-Credentials": "true",
      },
    });
  }

  // For preflight requests (OPTIONS)
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Access-Control-Allow-Origin": "*", // Or a specific domain
      },
    });
  }

  return new Response(null, { status: 200 }); // Continue the request if no issues
}

export const config = {
  matcher: "/api/*", // Apply middleware to all /api routes
};
