import { faker } from "@faker-js/faker";
import { TriangleAlert } from "lucide-react";
import HealthStatusChart from "./healthStatusChart";

const HEALTH_STATUSES = Array.from({ length: 30 }).map(() =>
  faker.number.int()
);
const THREATS = 0;
const STATUS = "Perfect";

const HeathStatus = () => {
  return (
    <div className="mt-[40px] flex flex-col items-start gap-[16px] w-[350px] min-h-[172px]">
      <h4 className="font-poppins text-[12px] leading-[18px] text-[#1A1A1A]">
        General Health Status
      </h4>
      <div className="w-[350px] min-h-[106px] bg-[rgba(112,224,0,0.1)] rounded-[1.4818px]">
        <HealthStatusChart values={HEALTH_STATUSES} />
      </div>
      <div className="flex flex-row items-start justify-between min-h-[16px] w-full">
        <div className="flex flex-row items-center justify-center p-0 gap-[7px] min-w-[73px] min-h-[16px]">
          <TriangleAlert size={16} className="fill-t3 text-white" />
          <span className="font-poppins font-medium text-[10px] leading-[19px] text-center text-t3">
            Threats: {THREATS}
          </span>
        </div>
        <div className="flex flex-row items-start p-0 gap-[16px] min-w-[72px] min-h-[16px]">
          <span className="font-poppins font-medium text-[10px] leading-[15px] text-[#333333]">
            Status: {STATUS}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeathStatus;
