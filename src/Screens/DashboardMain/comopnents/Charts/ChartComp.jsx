import { useState, useEffect } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

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
  label = [],
  pointRadius = 3,
  yAxesLAbel,
  yAxesDisplay = false,
  xAxesLAbel,
  xAxesDisplay = false,
  className = "",
  heading = false,
  tension = 0.5,
  pointBackgroundColor = [],
  pointBorderColor = [],
}) => {
  // Check if data exists and has at least one element
  if (!data || !data[0]) {
    return <div>Error: Data is undefined or empty</div>;
  }

  const [dataSet, setDataSet] = useState({
    labels: data[0].map((dataSet) => dataSet[xAxes]),
    datasets: data.map((dataSet, index) => ({
      label: label[index] || "",
      data: dataSet.map((element) => element[yAxes]),
      backgroundColor,
      fill: true,
      borderColor: borderColor[index] || "#3CCAD7", // Use a default color if not provided
      tension,
      hoverOffset: 4,
      pointBackgroundColor: pointBackgroundColor[index] || "",
      pointBorderColor: pointBorderColor[index] || "",
      pointRadius,
      pointHoverRadius: pointRadius + 5,
    })),
  });

  useEffect(() => {
    // Update dataSet when data changes
    setDataSet({
      labels: data[0].map((dataSet) => dataSet[xAxes]),
      datasets: data.map((dataSet, index) => ({
        label: label[index] || "",
        data: dataSet.map((element) => element[yAxes]),
        backgroundColor,
        fill: true,
        borderColor: borderColor[index] || "#3CCAD7",
        tension,
        hoverOffset: 4,
        pointBackgroundColor: pointBackgroundColor[index] || "",
        pointBorderColor: pointBorderColor[index] || "",
        pointRadius,
        pointHoverRadius: pointRadius + 5,
      })),
    });
  }, [
    data,
    xAxes,
    yAxes,
    max,
    min,
    borderColor,
    backgroundColor,
    label,
    pointRadius,
    yAxesLAbel,
    yAxesDisplay,
    xAxesLAbel,
    xAxesDisplay,
    className,
    heading,
    tension,
    pointBackgroundColor,
    pointBorderColor,
  ]);

  let options = {
    plugins: {
      legend: {
        display: heading,
        labels: {
          usePointStyle: true,
          font: {
            size: 14, // Adjust the font size of the legend labels
            weight: "medium", // Adjust the font weight of the legend labels
            family: "poppins", // Adjust the font family of the legend labels
          },
          boxWidth: 15,
          borderRadius: "50",
        },
      },
    },
    scales: {
      y: {
        display: yAxesDisplay,
        title: {
          text: yAxesLAbel || "",
          display: yAxesLAbel ? true : false,
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
          text: xAxesLAbel || "",
          display: xAxesLAbel ? true : false,
          color: "#3CCAD7",
          padding: 0,
        },
        max,
        min,
        ticks: {
          color: "#6B6B6B",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%" }} className={className}>
      <Line type={type} data={dataSet} options={options} />
    </div>
  );
};

export default ChartComp;
