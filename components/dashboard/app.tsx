"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import { faker } from "@faker-js/faker";

// Register ChartJS components
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const data = [
  {
    name: "Object1",
    cors: [
      { magnitude: 5, timestamp: 1609459200 },
      { magnitude: 10, timestamp: 1609545600 },
      { magnitude: 7, timestamp: 1609462800 },
    ],
  },
  {
    name: "Object2",
    cors: [
      { magnitude: 3, timestamp: 1612137600 },
      { magnitude: 8, timestamp: 1612134000 },
      { magnitude: 4, timestamp: 1612141200 },
    ],
  },
  {
    name: "Object3",
    cors: [
      { magnitude: 12, timestamp: 1614480000 },
      { magnitude: 9, timestamp: 1614393600 },
      { magnitude: 15, timestamp: 1614397200 },
    ],
  },
];

// Sort each "cors" array by timestamp in ascending order
data.forEach((item) => {
  item.cors.sort((a, b) => a.timestamp - b.timestamp);
});

const MetricsChart: React.FC = () => {
  const dataum = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: data.map((item) => ({
        label: item.name,
        data: item.cors.map((cor) => ({
            x: cor.timestamp,
            y: cor.magnitude
        })),
        borderWidth: 1,
        backgroundColor: faker.color.human(),
        borderColor: faker.color.human(),
    })),
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Metrics",
      },
    },
  };

  return (
    <div>
      <Line data={dataum} options={options} />
    </div>
  );
};

export default MetricsChart;
