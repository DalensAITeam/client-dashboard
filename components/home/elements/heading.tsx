import { cn } from "@/lib/utils";
import type { FC } from "react";
import { HeroStreaks } from "../../svg";

type props = {
  id: number;
  title: string;
  className?: string;
};

const Heading: FC<props> = ({ id, title, className }) => (
  <div
    className={cn(
      "min-h-[133px] w-[100%] overflow-hidden flex items-center justify-center relative",
      className
    )}
  >
    <h2 className="font-inter font-medium text-[134.648px] leading-[163px] text-main absolute bottom left-0 -z-10">
      {id.toString().padStart(2, "0")}
    </h2>
    <div className="flex flex-row items-center justify-center p-[10px] gap-[10px] min-w-[212px] h-[56px] bg-white">
      <b className="font-poppins font-medium text-[24px] leading-[36px] text-[#1A1A1A]">
        {title}
      </b>
    </div>
    <HeroStreaks className="absolute bottom-0 right-0 -z-20" />
  </div>
);

export default Heading;