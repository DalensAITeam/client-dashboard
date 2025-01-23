"use client";

import clsx from "clsx";
import { Bell, Menu } from "lucide-react";
import { useSidebar } from "../ui/sidebar";

const Topbar = () => {
  const { toggleSidebar, open } = useSidebar();
  return (
    <header
      className={clsx(
        "fixed top-0 right-0 h-[59px] bg-white [box-shadow:0px_2px_2px_rgba(204,204,204,0.5)] flex items-center left-0",
        open ? "md:left-[--sidebar-width]" : "md:left-[--sidebar-width-icon]"
      )}
    >
      <div className="flex flex-row items-center justify-between mx-[20px] h-[24px] w-full">
        <Menu
          size={40}
          role="button"
          onClick={toggleSidebar}
          className="fill-[#333333] size-[24px] lg:size-[40px]"
        />
        <div className="flex flex-row items-center justify-center gap-[16px] p-0 h-[24px] min-w-[66px]">
          {/* TODO NOTIFICATIONS */}
          <Bell size={24} role="button" className="fill-[#333333]" />
          {/* TODO USER IMAGE */}
          <figure className="flex flex-row items-start p-0 gap-[10px] isolate size-[24px]">
            <div className="size-full rounded-full bg-p3/40 flex items-center justify-center">
              <span className="font-poppins font-medium text-[12px] leading-[18px] text-[#01A9F2]">
                HF
              </span>
            </div>
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
