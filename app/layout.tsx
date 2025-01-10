import { GoogleOAuthProvider } from "@react-oauth/google";
import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
      <NextTopLoader color="#70E000" showSpinner={false} zIndex={1000}/>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID!}>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
