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
    href: "/far",
    icon: MonitorIcon,
    name: "Farm Monitor",
  },
  {
    href: "/data-manager",
    icon: FolderClosedIcon,
    name: "Data Manager",
  },
];
