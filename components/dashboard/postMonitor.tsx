import { ChevronDown } from "lucide-react";

const TOTAL_NUMBER_OF_ANIMALS = 250;

const PostMonitor = () => {
  return (
    <div className="grid grid-cols-2 gap-x-[20px] mt-[25.27px]">
      <div className="flex flex-col items-start p-0 gap-[12px] w-[165px] min-h-[105px]">
        <h4 className="font-poppins font-medium text-[12px] leading-[18px] text-[#1a1a1a]">
          Total Number Of Animals
        </h4>
        <div className="grid grid-cols-3 p-0 gap-y-[10px] w-full min-h-[48px]">
          {TOTAL_NUMBER_OF_ANIMALS.toString()
            .padStart(3, "0")
            .split("")
            .map((val, idx) => (
              <div
                key={idx}
                className="size-[48px] bg-white rounded-[5px] [box-shadow:inset_1px_1px_12px_rgba(204,204,204,0.8)]"
              >
                <span className="font-poppins font-medium text-[24px] leading-[24px] text-center text-[#4D4D4D]">
                  {val}
                </span>
              </div>
            ))}
        </div>
        {/* TODO */}
        <div className="font-poppins font-medium text-[10px] leading-[15px] text-[#6B6B6B]">
          Last recorded 9am
        </div>
      </div>
      <div className="flex flex-col items-start p-0 gap-[18px] w-[165px] min-h-[68px]">
        <h4 className="font-poppins font-medium text-[12px] leading-[18px] text-[#1A1A1A] text-center">
          Set Feeding Alarm
        </h4>
        <div className="w-full min-h-[32px]">
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
            <div className="flex items-center">
              <span className="size-[24px] font-poppins text-[16px] leading-[28px] text-[#4D4D4D]">
                PM
              </span>
              <ChevronDown
                width={16}
                height={9.04}
                className="text-[#4D4D4D]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMonitor;
