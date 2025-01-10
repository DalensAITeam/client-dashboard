import type { Metadata } from "next";
import Auth from "../auth";

export const metadata: Metadata = {
  title: "Dalens AI - Register",
};

export default function Register() {
  return <Auth route="sign-up" />;
}
