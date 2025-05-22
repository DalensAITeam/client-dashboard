"use client"

import { useState, useEffect, useMemo } from "react"
import "chart.js/auto"
import { Chart } from "react-chartjs-2"

/**
 * ChartComp - Reusable chart component that works with various chart types
 * Supports line, bar, and other chart types with customizable options
 */
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
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    if (!data || !data[0]) {
      setChartData(null)
      return
    }

    const newChartData = {
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
        animation: {
          duration: 750,
          easing: 'easeInOutQuart'
        }
      })),
    }
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
    tension,
    pointBackgroundColor,
    pointBorderColor,
  ])

  const [dataSet, setDataSet] = useState(null)

  // Check if data exists and has at least one element
  if (!chartData) {
    return <div className="flex items-center justify-center h-full text-gray-500">Loading chart data...</div>
  }

  useEffect(() => {
    // Update dataSet when data changes
    setDataSet(chartData)
  }, [
    chartData,
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
  ])

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        padding: 10,
        cornerRadius: 4,
        displayColors: true,
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
  }

  return (
    <div style={{ width: "100%", height: "100%" }} className={className}>
      <Chart type={type} data={dataSet} options={options} />
    </div>
  )
}

export default ChartComp
