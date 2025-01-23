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

export const sidebarLinks: SidebarLink[] = [
  {
    href: "/dashboard",
    icon: LayoutDashboardIcon,
    name: "Dashboard",
  },
  {
    href: "/monitor",
    icon: MonitorIcon,
    name: "Farm Monitor",
  },
  {
    href: "/data",
    icon: FolderClosedIcon,
    name: "Data Manager",
  },
];
