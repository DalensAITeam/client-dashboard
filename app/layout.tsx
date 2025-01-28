import { GoogleOAuthProvider } from "@react-oauth/google";
import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dalens AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID!}>
      <html lang="en">
        <body className={cn(inter.variable, poppins.variable)}>
          <NextTopLoader color="#70E000" showSpinner={false} zIndex={1000} />
          {children}
          <Toaster />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
