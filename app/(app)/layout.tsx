import { MobileNav } from "@/components/global";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: LayoutProps) {
  return (
    <>
      <MobileNav />
      <main className="mt-[24px]">{children}</main>
    </>
  );
}
