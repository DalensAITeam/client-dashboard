import { TriangleAlert } from "lucide-react";
import { LineChart } from "@mui/x-charts";

const THREATS = 0;
const STATUS = "Perfect";

const HeathStatus = () => {
  return (
    <div className="mt-[40px] flex flex-col items-start gap-[16px] w-[350px] min-h-[172px]">
      <h4 className="font-poppins text-[12px] leading-[18px] text-[#1A1A1A]">
        General Health Status
      </h4>
      <div className="w-[350px] min-h-[106px] bg-[rgba(112,224,0,0.1)] rounded-[1.4818px]">
        <LineChart
          series={[
            {
              data: Array.from({ length: 20 }).map(() =>
                Math.round(Math.random() * 30)
              ),
            },
          ]}
          width={350}
          height={106}
        />
      </div>
      <div className="flex flex-row items-start justify-between min-h-[16px]">
        <div className="flex flex-row items-center justify-center p-0 gap-[7px] min-w-[73px] min-h-[16px]">
          <TriangleAlert size={16} className="fill-t3" />
          <span className="font-poppins font-medium text-[10px] leading-[19px] text-center text-t3">
            Threats: {THREATS}
          </span>
        </div>
        <div className="flex flex-row items-start p-0 gap-[16px] min-w-[72px] min-h-[16px]">
          <span className="font-poppins font-medium leading-[15px] text-[#333333]">
            Status: {STATUS}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeathStatus;
