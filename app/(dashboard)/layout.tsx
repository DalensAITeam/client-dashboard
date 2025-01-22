import { Sidebar, Topbar } from "@/components/dasboard";
import { SidebarProvider } from "@/context/sidebar";
import type { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <Topbar />
        <Sidebar />
        {children}
      </SidebarProvider>
    </>
  );
}
