import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          color: '#6B7280',
          font: {
            size: 12,
            family: "'Inter', sans-serif",
            weight: '500'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#F3F4F6',
        bodyColor: '#F3F4F6',
        padding: 12,
        cornerRadius: 8,
        titleFont: {
          size: 14,
          family: "'Inter', sans-serif",
          weight: '600'
        },
        bodyFont: {
          size: 12,
          family: "'Inter', sans-serif"
        },
        displayColors: false,
        callbacks: {
          title: (items) => {
            if (!items.length) return '';
            return `${items[0].label}`;
          },
          label: (item) => {
            return `Animals: ${item.formattedValue}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          },
          padding: 8
        }
      },
      y: {
        beginAtZero: true,
        border: {
          display: false
        },
        grid: {
          color: 'rgba(243, 244, 246, 0.5)',
          drawBorder: false
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          },
          padding: 8,
          stepSize: 5,
          callback: (value) => value.toLocaleString()
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      line: {
        borderWidth: 2
      }
    }
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;