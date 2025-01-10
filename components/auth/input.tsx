import { cn } from "@/lib/utils";
import {
  useState,
  type ComponentProps,
  type FC,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
} from "react";
import { Eye, EyeOff } from "lucide-react";

type props = ComponentProps<"input"> & {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
};

export const Input: FC<props> = ({ className, type, ...props }) => {
  const [hidden, setHidden] = useState(type === "password");
  const typeAttr = type !== "password" ? type : hidden ? "password" : "text";
  return (
    <label
      htmlFor={props.name}
      className={cn(
        "flex gap-[8px] lg:gap-[9px] p-0 w-[205px] lg:w-[750px] h-[24px] lg:h-[42px] border-b lg:border-b-[3px] border-solid border-[#4D4D4D] focus-within:border-main",
        type !== "password"
          ? "flex-col items-start"
          : "flex-row items-center content-start",
        className
      )}
    >
      <input
        {...props}
        type={typeAttr}
        className="text-[12px] lg:text-[22px] leading-[18px] lg:leading-[33px] h-full w-full bg-inherit focus:outline-none placeholder:text-[#CCCCCC]"
      />
      {type === "password" &&
        (hidden ? (
          <EyeOff
            role="button"
            width={40}
            height={34}
            strokeWidth={1.2}
            absoluteStrokeWidth={true}
            className="text-[#4D4D4D] size-[24px] md:w-[40px] md:h-[34px]"
            onClick={() => setHidden(false)}
            />
          ) : (
            <Eye
            role="button"
            width={40}
            height={34}
            strokeWidth={1.2}
            absoluteStrokeWidth={true}
            className="text-[#4D4D4D] size-[24px] md:w-[40px] md:h-[34px]"
            onClick={() => setHidden(true)}
          />
        ))}
    </label>
  );
};
