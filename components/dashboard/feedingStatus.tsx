"use client";

import { TriangleAlert } from "lucide-react";
import dynamic from "next/dynamic";
import type { ComponentType, FC } from "react";

// @ts-expect-error the package has no available TS declarations
const LiquidFillGauge = dynamic(() => import("react-liquid-gauge"), {
  ssr: false,
}) as ComponentType<any>;

type props = {
  status: number;
};

const FeedingStatus: FC<props> = ({ status }) => {
  const filledColor = "#A3FF47";
  return (
    <div className="max-w-[345px]">
      <div className="mt-[40px] flex flex-col items-start p-0 gap-[16px] min-h-[223px] w-[165px] mx-auto">
        <h4 className="font-poppins font-medium text-[12px] leading-[18px] text-[#1A1A1A]">
          General Feeding Status
        </h4>
        <div className="w-[150px] overflow-visible h-[150px] flex items-center justify-center rounded-full bg-t2">
          <LiquidFillGauge
            style={{ margin: "0 auto", transform: "translateX(-0.2rem)" }}
            value={status}
            width={165}
            height={156.99}
            textSize={1}
            textRenderer={() => (
              <tspan>
                <tspan className="value text-[22.0477px] leading-[33px] fill-[#333333] font-poppins">
                  {+status.toFixed(2)}%
                </tspan>
              </tspan>
            )}
            waveAnimation
            waveFrequency={3}
            waveAmplitude={5}
            waveStyle={{
              fill: filledColor, // Wave (filled portion)
            }}
            textOffsetX={0} // Center the text horizontally
            textOffsetY={30} // Position text from the bottom
          />
        </div>
        <div className="flex flex-row justify-center items-end p-0 gap-[4px] min-h-[16px]">
          <TriangleAlert size={16} className="fill-t3 text-white" />
          <span className="font-poppins font-medium text-[10px] leading-[15px] text-t3 -translate-x-0.5">
            : Animal Not Feeding
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedingStatus;
