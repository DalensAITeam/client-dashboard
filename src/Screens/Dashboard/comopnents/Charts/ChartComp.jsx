import { useState } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

//* in case we upgraded to TS interface chartInterface {
//   data: any;
//   type:
//     | "bar"
//     // | "bubble"
//     | "doughnut"
//     | "line"
//     | "pie"
//     | "polarArea"
//     | "radar";
//   // | "scatter";
//   xAxes: string;
//   yAxes: string;
//   yAxesLAbel?: string;
//   xAxesLAbel?: string;
//   max?: number;
//   min?: number;
//   borderColor?: string;
//   label?: string;
//   backgroundColor?: string | string[];
//   pointRadius?: number;
//   xAxesDisplay?: boolean;
//   yAxesDisplay?: boolean;
//   className?: string;
//   heading?: boolean;
//   tension?: number;
// }

const ChartComp = ({
  data,
  type,
  xAxes,
  yAxes,
  max,
  min = 0,
  borderColor = ["#3CCAD7"],
  backgroundColor = "#163A4F",
  label,
  pointRadius = 3,
  yAxesLAbel,
  yAxesDisplay = false,
  xAxesLAbel,
  xAxesDisplay = false,
  className,
  heading = false,
  tension = 0.5,
  pointBackgroundColor,
  pointBorderColor,
}) => {
  const [dataSet] = useState({
    labels: data[0].map((dataSet) => dataSet[xAxes]),
    datasets: data.map((dataSet, index) => ({
      label: label[index],
      data: dataSet.map((element) => element[yAxes]),
      backgroundColor,
      fill: true,
      borderColor: borderColor[index],
      tension,
      hoverOffset: 4,
      pointBackgroundColor: pointBackgroundColor[index],
      pointBorderColor: pointBorderColor[index],
      pointRadius,
      pointHoverRadius: pointRadius + 5,
    })),
  });
  console.log(data[0].map((dataSet) => dataSet[xAxes]));

  let options = {
    plugins: {
      legend: {
        display: heading,
      },
    },
    scales: {
      y: {
        display: yAxesDisplay,
        title: {
          text: yAxesLAbel,
          display: yAxesLAbel,
          color: "#3CCAD7",
          padding: 0,
        },
        max,
        min,
        ticks: {
          color: "#6B6B6B",
        },
      },
      x: {
        display: xAxesDisplay,
        title: {
          text: xAxesLAbel,
          display: xAxesLAbel,
          color: "#3CCAD7",
          padding: 0,
        },
        max,
        min,
        ticks: {
          // stepSize: "5",
          color: "#6B6B6B",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%" }} className={`${className}`}>
      <Chart type={type} data={dataSet} options={options} />
    </div>
  );
};

export default ChartComp;
