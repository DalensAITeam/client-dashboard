"use client";

import { useSidebar } from "@/context/sidebar";
import { Bell, Menu } from "lucide-react";

const Topbar = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { showSidebar } = useSidebar();
  return (
    <header className="fixed top-0 left-0 w-full h-[59px] bg-white [box-shadow:0px_2px_2px_rgba(204,204,204,0.5)] flex items-center">
      <div className="flex flex-row items-center justify-between mx-[20px] h-[24px] w-full">
        <Menu
          size={24}
          role="button"
          className="fill-[#333333]"
          onClick={showSidebar}
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
