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
    <SidebarProvider defaultOpen={false}>
      <Topbar />
      <Sidebar />
      <Main className="px-[20px]">{children}</Main>
    </SidebarProvider>
  );
}
