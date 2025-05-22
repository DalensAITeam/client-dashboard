import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { socket } from '../../socket/socket';
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
} from 'chart.js';

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

const Metrics = () => {
  const [metricsData, setMetricsData] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  useEffect(() => {
    const socket = io('http://localhost:7017');

    socket.on('stats_update', (data) => {
      if (data.latest_metrics) {
        setMetricsData(prev => {
          if (!prev) return [data.latest_metrics];
          const newData = [...prev];
          newData.unshift(data.latest_metrics);
          if (newData.length > 7) newData.pop();
          return newData;
        });
      }
    });

    // Initial data fetch
    fetch('http://localhost:7017/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.metrics) {
          setMetricsData(data.metrics);
        }
      })
      .catch(console.error);

    return () => socket.disconnect();
  }, []);

  if (!metricsData) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-green-500 border-t-transparent"></div>
      </div>
    );
  }

  const chartData = {
    labels: metricsData.map(d => d.date),
    datasets: [
      {
        label: 'Feeding Rate',
        data: metricsData.map(d => d.feeding),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Animal Health',
        data: metricsData.map(d => d.animal_health),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Activity Level',
        data: metricsData.map(d => d.activity),
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          boxHeight: 6,
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: true,
          color: 'rgba(0,0,0,0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Farm Metrics</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedPeriod('week')}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              selectedPeriod === 'week'
                ? 'bg-green-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setSelectedPeriod('month')}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              selectedPeriod === 'month'
                ? 'bg-green-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            Month
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Metrics;
