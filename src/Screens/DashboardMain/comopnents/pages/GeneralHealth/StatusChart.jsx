import ChartComp from "../../Charts/ChartComp";
import { useEffect, useState } from "react";
import { data } from "./data";

const StatusChart = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!data || !data[0]) {
      // Set an error state or log an error message
      setError("Error: Data is undefined or empty");
    } else {
      setChartData(data);
    }
  }, [data]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="ChartGeneralHealth">
      <ChartComp
        data={chartData}
        type="line"
        xAxes="date"
        yAxes="result"
        backgroundColor="transparent"
        pointRadius={0}
        tension={0}
        label={[]}
        borderColor={["#70E000"]}
        pointBackgroundColor={[]}
        pointBorderColor={[]}
        min={0}
        max={120}
      />
    </div>
  );
};

export default StatusChart;
