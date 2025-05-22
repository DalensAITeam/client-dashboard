"use client"

import { useSelector } from "react-redux"
import ChartComp from "../../Charts/ChartComp"

const StatusChart = () => {
  const streamStats = useSelector((state) => state.actions.streamStats)
  
  // Select chart color based on threat state
  const getChartColor = () => {
    switch (streamStats?.threat_state) {
      case "danger":
        return "#E05100" // Red
      case "warning":
        return "#FFC107" // Yellow
      default:
        return "#70E000" // Green
    }
  }

  // Generate last 10 data points based on current stats
  const generateRealtimeData = (stats) => {
    if (!stats) return [[]]
    
    const now = new Date()
    const data = []
    
    for (let i = 9; i >= 0; i--) {
      const time = new Date(now - i * 1000) // 1 second intervals
      data.push({
        date: time.toLocaleTimeString(),
        result: stats.healthy_count || 0
      })
    }
    
    return [[...data]]
  }

  const data = generateRealtimeData(streamStats);

  return (
    <div className="ChartGeneralHealth">
      <ChartComp
        data={data}
        type="line"
        xAxes="date"
        yAxes="result"
        backgroundColor="transparent"
        pointRadius={0}
        tension={0}
        label={[]}
        borderColor={[getChartColor()]}
        pointBackgroundColor={[]}
        pointBorderColor={[]}
        min={0}
        max={streamStats?.animal_count ? streamStats.animal_count + 10 : 120}
      />
    </div>
  )
}

export default StatusChart
