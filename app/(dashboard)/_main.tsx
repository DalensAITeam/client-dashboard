"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

const Main: FC<ComponentProps<"main">> = ({ className, ...props }) => {
  const { open } = useSidebar();
  return (
    <main
      {...props}
      className={cn(
        open ? "lg:ml-[--sidebar-width]" : "lg:ml-[--sidebar-width-icon]",
        className
      )}
    />
  );
};

export default Main;
