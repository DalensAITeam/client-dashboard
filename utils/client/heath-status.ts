import type { HealthStatus } from "@/components/dashboard";
import type { ComponentProps } from "react";

export function genChartProps(
  args: ComponentProps<typeof HealthStatus>["data"]
) {
  const data = {
    labels: args.map((val) => val.label),
    datasets: [
      {
        data: args.map((val) => val.value),
        borderColor: "#70E000",
        tension: 0,
        borderWidth: 1.19,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false, // Disable x-axis border line
          drawTicks: false, // Disable x-axis tick marks
        },
        ticks: {
          display: false, // Optional: Hide x-axis labels
        },
      },
      y: {
        grid: {
          drawBorder: false, // Disable y-axis border line
          drawTicks: false, // Disable y-axis tick marks
        },
        ticks: {
          display: false, // Optional: Hide y-axis labels
        },
      },
    },
  };

  return { data, options };
}
