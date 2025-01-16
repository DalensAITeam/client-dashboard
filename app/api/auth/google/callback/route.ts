 
import type { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  if (!code)
    return Response.json(
      {
        error: "Authorization code not found",
      },
      {
        status: 400,
      }
    );

//   const tokenEndpoint = "https://oauth2.googleapis.com/token";
//   const data = {
//     code: code,
//     client_id: process.env.GOOGLE_CLIENT_ID!,
//     client_secret: process.env.GOOGLE_CLIENT_SECRET!,
//     redirect_uri: `${req.nextUrl.hostname}/api/auth/google/callback`,
//     grant_type: "authorization_code",
//   };

//   try {
//     const response = await fetch(tokenEndpoint, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       console.error("Error exchanging code for tokens:", error);
//       return NextResponse.json(
//         { error: "Failed to exchange authorization code" },
//         { status: 500 }
//       );
//     }

//     const { access_token, refresh_token, expires_in } = await response.json();

//     // Optionally: Store tokens securely (e.g., in a database or secure cookies)
//     console.log("Access Token:", access_token);
//     console.log("Refresh Token:", refresh_token);

//     return NextResponse.json({
//       message: "Authentication successful",
//       access_token,
//       refresh_token,
//       expires_in,
//     });
//   } catch (error) {
//     console.error("Error exchanging code for tokens:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
}
