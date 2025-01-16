import { cn } from "@/lib/utils";
import Image from "next/image";
import type { FC } from "react";

type props = {
  src: string;
  title: string;
  content: string;
};

const Highlight: FC<props> = ({ src, title, content }) => {
  return (
    <div className="flex flex-col items-start p-0 gap-[32px]">
      <div
        className={cn(
          "flex items-center jusitfy-center relative p-1.5",
          "before:block before:w-[39.91px] before:h-[30.92px] before:content-[''] before:absolute before:top-0 before:right-0 before:border-solid before:border-t-[2.5px] before:border-r-[2.5px] before:border-main",
          "after:block after:w-[39.91px] after:h-[30.92px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:border-solid after:border-b-[2.5px] after:border-l-[2.5px] after:border-main"
        )}
      >
        <Image
          width={333.63}
          height={179.3}
          className="rounded-[2.37px]"
          src={src}
          alt={"x"}
        />
      </div>
      <div className="flex flex-col items-start p-0 gap-[28px]">
        <h4 className="font-poppins font-medium text-[24px] leading-[36px] text-[#333333]">
          {title}
        </h4>
        <p className="font-poppins text-[18px] leading-[27px] text-[#262626]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Highlight;
