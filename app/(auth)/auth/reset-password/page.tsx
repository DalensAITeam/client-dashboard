import type { Metadata } from "next";
import Auth from "../../auth";

export const metadata: Metadata = {
  title: "Dalens AI - Reset Password",
};

export default function ResetPassword() {
  return <Auth route="reset-password" />;
}
