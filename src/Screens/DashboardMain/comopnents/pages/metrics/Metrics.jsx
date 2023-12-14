import ChartComp from "../../Charts/ChartComp";
import "./metrics.css";
import { useEffect, useState } from "react";

const Metrics = () => {
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
    <div className="flex flex-1 w-full md:md:4/5 flex-col md:justify-self-start">
      <h4 className="text-black font-medium text-2xl my-4">Metrics</h4>
      <ChartComp
        data={chartData}
        type="line"
        xAxes="date"
        yAxes="result"
        xAxesDisplay={true}
        yAxesDisplay={true}
        backgroundColor="transparent"
        pointRadius={5}
        tension={1}
        className="w-full"
        heading={true}
        label={["Feeding", "Animal Attack", "Health"]}
        borderColor={["#E05100", "#01A9F2", "#70E000"]}
        labelWidth={100}
        pointBackgroundColor={["#E05100", "#01A9F2", "#70E000"]}
        pointBorderColor={["#E05100", "#01A9F2", "#70E000"]}
        min={0}
        max={120}
      />
    </div>
  );
};

export default Metrics;

const data = [
  [
    {
      date: "2023-02",
      result: "8",
    },
    {
      date: "2023-03",
      result: "3",
    },
    {
      date: "2023-04",
      result: "11",
    },
    {
      date: "2023-05",
      result: "6",
    },
    {
      date: "2023-06",
      result: "3",
    },
    {
      date: "2023-07",
      result: "1",
    },
    {
      date: "2023-08",
      result: "7",
    },
    {
      date: "2023-09",
      result: "9",
    },
  ],
  [
    {
      date: "2023-02",
      result: "50",
    },
    {
      date: "2023-03",
      result: "30",
    },
    {
      date: "2023-04",
      result: "40",
    },
    {
      date: "2023-05",
      result: "60",
    },
    {
      date: "2023-06",
      result: "50",
    },
    {
      date: "2023-07",
      result: "30",
    },
    {
      date: "2023-08",
      result: "40",
    },
    {
      date: "2023-09",
      result: "60",
    },
  ],
  [
    {
      date: "2023-02",
      result: "90",
    },
    {
      date: "2023-03",
      result: "80",
    },
    {
      date: "2023-04",
      result: "60",
    },
    {
      date: "2023-05",
      result: "75",
    },
    {
      date: "2023-06",
      result: "90",
    },
    {
      date: "2023-07",
      result: "80",
    },
    {
      date: "2023-08",
      result: "100",
    },
    {
      date: "2023-09",
      result: "75",
    },
  ],
];
