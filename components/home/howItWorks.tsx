import { howItWorks } from "@/constants/home";
import { Fragment, type ComponentProps, type FC } from "react";
import Heading from "./elements/heading";
import { cn } from "@/lib/utils";

export type THowItWorks = {
  title: string;
  icon: FC<ComponentProps<"svg">>;
};

const HowItWorks = () => {
  return (
    <div className="w-full">
      <Heading id={3} title="HOW IT WORKS" />
      <div className="grid grid-cols-2 items-center gap-x-[20px] gap-y-[32px] p-0 w-full overflow-hidden">
        {howItWorks.map(({ icon: Icon, title }, index) => {
          const even = !(index & 1);
          const text = (
            <h4 className="font-poppins p-0 text-[18px] inline leading-[27px] text-[#262626]">
              {title}
            </h4>
          );
          const icon = (
            <Icon className={cn(even ? "-translate-x-6" : "translate-x-1")} />
          );
          return (
            <Fragment key={index}>
              {even ? icon : text}
              {even ? text : icon}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
