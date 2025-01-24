import { Sidebar, Topbar } from "@/components/dashboard";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";
import Main from "./_main";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={false} className="[--topbar-height:59px]">
      <Topbar />
      <Sidebar />
      <Main className="px-[20px] my-[calc(var(--topbar-height)+20px)] w-full">
        {children}
      </Main>
    </SidebarProvider>
  );
}
