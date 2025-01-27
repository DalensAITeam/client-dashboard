"use client";

import type { FC } from "react";
import { Line } from "react-chartjs-2";

type props = {
  metrics: Array<{
    /** Name of the item */
    name: string;
    /** Color to bear on the chart */
    color: string;
    data: Array<{
      /** Timestamp represting the date of data capture */
      timestamp: number;
      /** Magnitude of data capture */
      magnitude: number;
    }>;
  }>;
};

const MetricsChart: FC<props> = ({ metrics }) => {
  return (
    <Line
      data={{
        datasets: metrics.map((val) => {
          return {
            label: val.name,
            data: val.data.map((data) => ({
              x: data.timestamp,
              y: data.magnitude,
            })),
            tension: 0.5,
            borderColor: val.color,
            backgroundColor: val.color,
          };
        }),
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            // FIXME
            text: "I DID IT!",
          },
          tooltip: {
            callbacks: {
              title(tooltipItems) {
                const xValue = (tooltipItems[0].raw as Record<"x", number>).x;
                const date = new Date(xValue);
                const formatter = new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
                return formatter.format(date);
              },
            },
          },
        },
        scales: {
          x: {
            type: "linear",
            position: "bottom",
            ticks: {
              callback(tickValue) {
                const date = new Date(tickValue);
                const month = new Intl.DateTimeFormat("en-us", {
                  month: "short",
                }).format(date);
                return `${month} ${date.getFullYear().toString()}`;
              },
            },
          },
          y: {
            beginAtZero: false,
            ticks: {
              display: false,
              //   callback: () => "",
            },
          },
        },
      }}
    />
  );
};

export default MetricsChart;
