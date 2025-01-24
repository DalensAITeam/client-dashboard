"use client";

import { TriangleAlert } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { FC } from "react";
import { genChartProps } from "@/utils/client/heath-status";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

type props = {
  data: {
    label: string;
    value: number;
  }[];
  threats: number;
  status: string;
};

const HeathStatus: FC<props> = ({ status, threats, data }) => {
  const chartProps = genChartProps(data);
  return (
    <div className="mt-[40px] flex flex-col items-start gap-[16px] w-[350px] min-h-[172px]">
      <h4 className="font-poppins text-[12px] leading-[18px] text-[#1A1A1A]">
        General Health Status
      </h4>
      <div className="w-[350px] min-h-[106px] bg-[rgba(112,224,0,0.1)] rounded-[1.4818px]">
        <Line {...chartProps} />
      </div>
      <div className="flex flex-row items-start justify-between min-h-[16px] w-full">
        <div className="flex flex-row items-center justify-center p-0 gap-[7px] min-w-[73px] min-h-[16px]">
          <TriangleAlert size={16} className="fill-t3 text-white" />
          <span className="font-poppins font-medium text-[10px] leading-[19px] text-center text-t3">
            Threats: {threats}
          </span>
        </div>
        <div className="flex flex-row items-start p-0 gap-[16px] min-w-[72px] min-h-[16px]">
          <span className="font-poppins font-medium text-[10px] leading-[15px] text-[#333333]">
            Status: {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeathStatus;
