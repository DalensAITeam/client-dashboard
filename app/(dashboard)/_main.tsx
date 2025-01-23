"use client";

import { useSidebar } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  const { open } = useSidebar();
  return (
    <main
      className={
        open ? "lg:ml-[--sidebar-width]" : "lg:ml-[--sidebar-width-icon]"
      }
    >
      {children}
    </main>
  );
};

export default Main;
