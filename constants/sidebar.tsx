import {
  FolderClosedIcon,
  LayoutDashboardIcon,
  MonitorIcon,
  type LucideIcon,
} from "lucide-react";

interface SidebarLink {
  href: string;
  icon: LucideIcon;
  name: string;
}

export const sidebarLinks = [
  {
    href: "/dashboard" as const,
    icon: LayoutDashboardIcon,
    name: "Dashboard",
  },
  {
    href: "/monitor" as const,
    icon: MonitorIcon,
    name: "Farm Monitor",
  },
  {
    href: "/data" as const,
    icon: FolderClosedIcon,
    name: "Data Manager",
  },
] satisfies SidebarLink[];
