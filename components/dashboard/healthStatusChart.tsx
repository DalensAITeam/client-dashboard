"use client"

import { Line } from "react-chartjs-2";
import type { FC } from "react";

type props = {
  values: number[];
};

const HealthStatusChart: FC<props> = ({ values }) => {
  return (
    <Line
      data={{
        labels: Array.from({ length: values.length }).fill("Health"),
        datasets: [
          {
            data: values,
            borderColor: "#70E000",
            tension: 0,
            borderWidth: 1.19,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        scales: {
          x: {
            grid: {
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            grid: {
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
};

export default HealthStatusChart;
