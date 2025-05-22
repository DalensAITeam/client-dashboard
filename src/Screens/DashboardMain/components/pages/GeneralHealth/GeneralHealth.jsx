"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import "./GeneralHealth.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const GeneralHealth = () => {
  const [healthStatus, setHealthStatus] = useState(85)
  const [chartData, setChartData] = useState({
    labels: Array(50).fill(''),
    datasets: [{
      label: 'Health Rate',
      data: Array(50).fill(80),
      borderColor: '#01A9F2',
      backgroundColor: 'rgba(1, 169, 242, 0.05)',
      borderWidth: 1.5,
      tension: 0.3,
      pointRadius: 0,
      fill: true
    }]
  })

  const generateCardiographData = useCallback(() => {
    const baseValue = 80;
    const variance = 20;
    
    // Generate a heartbeat pattern
    const newData = chartData.datasets[0].data.slice(1);
    const lastValue = newData[newData.length - 1];
    
    // Simulate heartbeat spike
    const rand = Math.random();
    let nextValue;
    if (rand > 0.95) {
      // Occasional big spike (heartbeat)
      nextValue = baseValue + variance * 2;
    } else if (rand > 0.85) {
      // Small variation
      nextValue = baseValue + (Math.random() * variance - variance / 2);
    } else {
      // Return to baseline
      nextValue = baseValue + (Math.random() * 5 - 2.5);
    }
    
    newData.push(nextValue);
    
    setChartData({
      labels: chartData.labels,
      datasets: [{
        ...chartData.datasets[0],
        data: newData
      }]
    });
    
    // Update health score based on recent data
    const recentData = newData.slice(-10);
    const avgScore = recentData.reduce((a, b) => a + b, 0) / recentData.length;
    setHealthStatus(Math.round(avgScore));
  }, [chartData]);

  useEffect(() => {
    // Update every 100ms for smooth cardiograph
    const interval = setInterval(generateCardiographData, 100);
    return () => clearInterval(interval);
  }, [generateCardiographData]);

  const getHealthColor = (health) => {
    if (health >= 90) return 'text-green-500';
    if (health >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex flex-col gap-3 h-full w-full p-2">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className={`text-6xl font-bold ${getHealthColor(healthStatus)}`}>
            {healthStatus}%
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Health Status
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-lg p-2 h-[120px] border">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false }
            },
            scales: {
              x: {
                display: false,
                grid: {
                  display: true,
                  color: 'rgba(0, 0, 0, 0.03)',
                  lineWidth: 1
                }
              },
              y: {
                display: true,
                min: 50,
                max: 110,
                grid: {
                  display: true,
                  color: 'rgba(0, 0, 0, 0.03)',
                  lineWidth: 1
                },
                ticks: {
                  display: true,
                  color: '#9CA3AF',
                  font: { size: 7 },
                  padding: 2,
                  stepSize: 20,
                  count: 3
                }
              }
            },
            layout: {
              padding: 0
            },
            animation: { duration: 0 }
          }}
        />
      </div>
    </div>
  );
};

export default GeneralHealth;
