import type { Metadata } from "next";
import Auth from "../../auth";

export const metadata: Metadata = {
  title: "Dalens AI - Forgot Password",
};

export default function ForgotPassword() {
  return <Auth route="forgot-password" />;
}
