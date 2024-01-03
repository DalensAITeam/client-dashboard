import ChartComp from "../../Charts/ChartComp";
import "./metrics.css";

const Metrics = () => {
  return (
    <div className="metricsMain">
      <ChartComp
        data={data}
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
      result: "100",
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
