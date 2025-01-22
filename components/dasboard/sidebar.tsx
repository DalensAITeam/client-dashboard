"use client";

import Image from "next/image";
import dalensLogo from "@/assets/images/dalens-ai-logo.png";
import { sidebarLinks } from "@/constants/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/sidebar";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const { show } = useSidebar();
  return (
    <dialog
      ref={(e) => (show ? e?.showModal() : e?.close())}
      className={cn(
        "min-w-[230px] min-h-[458px] max-h-full h-full bg-[#393939] fixed top-0 left-0 z-10 py-[16px] m-0 backdrop:bg-black/50",
        !show && "hidden"
      )}
    >
      <figure className="flex items-center justify-center m-0 p-0">
        <Image
          width={69}
          height={31}
          alt="Dalens Logo"
          draggable={false}
          src={dalensLogo.src}
        />
      </figure>

      <nav className="mt-[32px]">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              className={cn(
                "flex flex-row items-center p-0 px-[24px] h-[62px] relative",
                isActive &&
                  "border border-solid border-l-[6px] border-main before:content-[''] before:w-[6px] before:h-full before:bg-main before:inline-block before:absolute before:left-1 bg-p3/15"
              )}
              // @ts-expect-error THIS ROURES WILL BE BUILT LATER ON
              href={link.href}
              key={link.href}
            >
              <button
                className={cn(
                  "flex flex-row items-center p-0 gap-[24px] h-[30px]",
                  "font-poppins font-medium text-[19px] leading-[28px]",
                  isActive ? "text-main" : "text-white"
                )}
              >
                <link.icon
                  size={24}
                  className={cn(isActive ? "fill-main" : "fill-white")}
                />
                <span>{link.name}</span>
              </button>
            </Link>
          );
        })}
      </nav>

      <div className="px-[24px] absolute bottom-[38px] w-full left-0">
        <button className="flex flex-row items-center p-0 gap-[24px] h-[40px] min-w-[137px] text-white">
          <LogOut size={40} className="fill-white" />
          <span className="font-poppins font-medium text-[19px] leading-[28px]">
            Log Out
          </span>
        </button>
      </div>
    </dialog>
  );
};

export default Sidebar;
