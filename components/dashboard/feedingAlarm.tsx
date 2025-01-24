import { ChevronDown } from "lucide-react";

const FeedingAlarm = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-[18px] w-[165px] min-h-[68px]">
      <h4 className="font-poppins font-medium text-[12px] leading-[18px] text-[#1A1A1A] text-center">
        Set Feeding Alarm
      </h4>
      <div className="w-full min-h-[32px] flex items-center gap-[17px]">
        <div className="w-[40px] h-[32px] box-border border-b-[3px] border-solid border-main">
          <span className="font-poppins text-[22px] leading-[33px] text-t3">
            12
          </span>
        </div>
        <span className="w-[6px] h-[13px] font-poppins font-medium leading-[10px] text-[#333333]">
          :
        </span>
        <div className="w-[40px] h-[32px] box-border border-b-[3px] border-solid border-[#4D4D4D]">
          <span className="font-poppins text-[22px] leading-[33px] text-t3">
            54
          </span>
        </div>
        <div className="w-[43px] h-[32px] box-border border-b-[3px] border-solid border-[#4D4D4D]">
          <div className="flex">
            <span className="size-[24px] font-poppins text-[16px] leading-[28px] text-[#4D4D4D]">
              PM
            </span>
            <ChevronDown className="text-[#4D4D4D] translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedingAlarm;
