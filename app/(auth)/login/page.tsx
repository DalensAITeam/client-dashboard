import type { Metadata } from "next";
import Auth from "../auth";

export const metadata: Metadata = {
  title: "Dalens AI - Login",
};

export default function Login() {
  return <Auth route="sign-in" />;
}
