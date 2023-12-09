import { useState } from "react";
import LineChart from "./LineChart";
import { AnimalData } from "../../../Data";

const ChartSection = () => {
  const [userData, setUserData] = useState({
    labels: AnimalData.map((data) => data.month),
    datasets: [
      {
        label: "Animals",
        data: AnimalData.map((data) => data.count),
        backgroundColor: ["#a3ff47"],
        borderColor: ["#a3ff47"],
      },
    ],
  });
  return (
    <div className="ChartSection-comp">
      <LineChart chartData={userData} />
    </div>
  );
};

export default ChartSection;
