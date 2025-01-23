"use client";

import dalensLogo from "@/assets/images/dalens-dashboard-logo.png";
import { sidebarLinks } from "@/constants/sidebar";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import clsx from "clsx";

const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <figure className="flex items-center justify-center m-0 p-0">
          <Image
            width={69}
            height={31}
            alt="Dalens Logo"
            draggable={false}
            className="lg:hidden"
            src={dalensLogo.src}
          />
          <Image
            width={165.2}
            height={75}
            alt="Dalens Logo"
            draggable={false}
            className="m:hidden"
            src={dalensLogo.src}
          />
        </figure>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton asChild>
                      <Link
                        className={clsx(
                          "flex flex-row items-center p-0 px-[24px] h-[62px] lg:h-[104px] relative hover:!bg-p3/10 w-full group-data-[collapsible=icon]:!h-[62px] lg:group-data-[collapsible=icon]:!h-[104px] group-data-[collapsible=icon]:!w-full group-data-[collapsible=icon]:justify-center",
                          isActive &&
                            "border-solid border-l-[6px] border-main before:content-[''] before:w-[6px] before:h-full before:bg-main before:inline-block before:absolute before:left-1 bg-p3/15"
                        )}
                        // @ts-expect-error THIS ROURES WILL BE BUILT LATER ON
                        href={link.href}
                      >
                        <button
                          title={link.name}
                          className={cn(
                            "flex flex-row items-center lg:justify-center p-0 gap-[24px] lg:gap-[16px] h-[30px] lg:h-[40px]",
                            isActive ? "text-main" : "text-white"
                          )}
                        >
                          <link.icon
                            size={40}
                            className={cn(
                              isActive ? "fill-main" : "fill-white",
                              "size-[24px] lg:size-[40px]"
                            )}
                          />
                          <span className="font-poppins font-medium lg:font-normal text-[19px] lg:text-[24px] leading-[28px] lg:leading-[36px] group-data-[collapsible=icon]:hidden">
                            {link.name}
                          </span>
                        </button>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <button
          title="Log Out"
          className="flex flex-row items-center group-data-[collapsible=icon]:justify-center p-0 gap-[24px] h-[40px] min-w-[137px] text-white"
        >
          <LogOut size={40} className="fill-white size-[24px]" />
          <span className="font-poppins font-medium text-[19px] leading-[28px] group-data-[collapsible=icon]:hidden">
            Log Out
          </span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
