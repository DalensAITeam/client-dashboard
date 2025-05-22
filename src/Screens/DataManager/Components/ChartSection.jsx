import { useState } from "react";
import LineChart from "./LineChart";
import { AnimalData } from "../../../Data";

const ChartSection = () => {
  const [userData] = useState({
    labels: AnimalData.map((data) => data.month),
    datasets: [{
      label: "Animals",
      data: AnimalData.map((data) => data.count),
      backgroundColor: '#70E000',
      borderColor: '#70E000',
      tension: 0.4,
      fill: {
        target: 'origin',
        above: 'rgba(112, 224, 0, 0.1)',
      },
      pointRadius: 4,
      pointBackgroundColor: '#70E000',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: '#70E000',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
    }]
  });

  return (
    <div className="w-full h-full">
      <LineChart chartData={userData} />
    </div>
  );
};

export default ChartSection;