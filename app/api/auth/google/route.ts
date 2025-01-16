import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const params = new URLSearchParams({
     
    client_id: process.env.GOOGLE_CLIENT_ID!,
    redirect_uri: `${req.nextUrl.hostname}/auth/google/callback`,
    response_type: "code",
    scope:
      "email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
    access_type: "offline", // Ensures a refresh token is provided
    prompt: "consent", // Forces Google to show the consent screen and provide a refresh token
  });
  redirect(`${googleAuthUrl}?${params.toString()}`);
}
