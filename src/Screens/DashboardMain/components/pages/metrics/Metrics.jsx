"use client"

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { useAnimalDetection } from '../../../../../context/AnimalDetectionContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// Chart data for different time periods
const chartData = {
  week: [
    [
      { date: "2023-09-25", result: "2" },
      { date: "2023-09-26", result: "4" },
      { date: "2023-09-27", result: "6" },
      { date: "2023-09-28", result: "8" },
      { date: "2023-09-29", result: "10" },
      { date: "2023-09-30", result: "12" },
      { date: "2023-10-01", result: "14" }
    ]
    // Add other week data arrays here
  ],
  month: [
    // Add month data arrays here
  ],
  year: [
    // Add year data arrays here
  ]
}

const Metrics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const [chartData, setChartData] = useState(null);
  const { detectionData } = useAnimalDetection();

  // Calculate metrics based on detection data
  const calculateMetrics = () => {
    const timeOfDay = new Date().getHours();
    const isFeeding = timeOfDay >= 6 && timeOfDay <= 9 || timeOfDay >= 16 && timeOfDay <= 19;

    return Object.values(detectionData).reduce((acc, curr) => {
      return {
        active: Math.min(100, acc.active + (timeOfDay >= 6 && timeOfDay <= 18 ? 10 : 5)),
        feeding: Math.min(100, acc.feeding + (isFeeding ? 15 : 5)),
        health: Math.min(100, acc.health + (curr.threatState === 'Normal' ? 15 : -5))
      };
    }, { active: 40, feeding: 30, health: 75 });
  };

  // Generate chart data
  const generateChartData = () => {
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const metrics = calculateMetrics();
    
    // Generate data points with some variation
    const getData = (baseValue) => {
      return Array(7).fill(0).map((_, i) => {
        const variation = Math.sin(i * 0.5) * 10;
        return Math.max(0, Math.min(100, baseValue + variation));
      });
    };
    
    return {
      labels,
      datasets: [
        {
          label: "Movement Rate",
          data: getData(metrics.active),
          borderColor: "#70E000",
          backgroundColor: "#70E000",
          tension: 0.1
        },
        {
          label: "Feeding Rate",
          data: getData(metrics.feeding),
          borderColor: "#E05100",
          backgroundColor: "#E05100",
          tension: 0.1
        },
        {
          label: "Animal Health",
          data: getData(metrics.health),
          borderColor: "#01A9F2",
          backgroundColor: "#01A9F2",
          tension: 0.1
        }
      ]
    };
  };

  // Update chart data when detection data changes
  useEffect(() => {
    if (detectionData) {
      setChartData(generateChartData());
    }
  }, [detectionData, selectedPeriod]);

  if (!detectionData) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Animal Metrics</h2>
          <div className="flex rounded-md border">
            <button
              className={`px-3 py-1 text-sm ${
                selectedPeriod === "week" ? "bg-lime-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedPeriod("week")}
            >
              Week
            </button>
            <button
              className={`px-3 py-1 text-sm ${
                selectedPeriod === "month" ? "bg-lime-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedPeriod("month")}
            >
              Month
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-4">
          {chartData && (
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                    labels: {
                      usePointStyle: true,
                      boxWidth: 6,
                      boxHeight: 6
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                      display: true,
                      drawBorder: false
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    }
                  }
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Metrics

