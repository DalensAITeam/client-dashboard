import ChartComp from "../../Charts/ChartComp";

const StatusChart = () => {
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

const data = [
  [
    {
      date: "2023-02",
      result: "80",
    },
    {
      date: "2023-03",
      result: "3",
    },
    {
      date: "2023-04",
      result: "90",
    },
    {
      date: "2023-05",
      result: "6",
    },
    {
      date: "2023-06",
      result: "100",
    },
    {
      date: "2023-07",
      result: "1",
    },
    {
      date: "2023-08",
      result: "80",
    },
    {
      date: "2023-09",
      result: "9",
    },
    {
      date: "2023-02",
      result: "50",
    },
    {
      date: "2023-03",
      result: "3",
    },
    {
      date: "2023-04",
      result: "110",
    },
    {
      date: "2023-04",
      result: "2",
    },
    {
      date: "2023-02",
      result: "80",
    },
    {
      date: "2023-03",
      result: "3",
    },
    {
      date: "2023-04",
      result: "90",
    },
    {
      date: "2023-05",
      result: "6",
    },
    {
      date: "2023-06",
      result: "100",
    },
    {
      date: "2023-07",
      result: "1",
    },
    {
      date: "2023-08",
      result: "80",
    },
    {
      date: "2023-09",
      result: "9",
    },
    {
      date: "2023-02",
      result: "50",
    },
    {
      date: "2023-03",
      result: "3",
    },
    {
      date: "2023-04",
      result: "110",
    },
    {
      date: "2023-04",
      result: "2",
    },
    {
      date: "2023-02",
      result: "80",
    },
    {
      date: "2023-03",
      result: "3",
    },
    {
      date: "2023-04",
      result: "90",
    },
    {
      date: "2023-05",
      result: "6",
    },
    {
      date: "2023-06",
      result: "100",
    },
    {
      date: "2023-07",
      result: "1",
    },
    {
      date: "2023-08",
      result: "80",
    },
    {
      date: "2023-09",
      result: "9",
    },
    {
      date: "2023-02",
      result: "50",
    },
    {
      date: "2023-03",
      result: "3",
    },
    {
      date: "2023-04",
      result: "110",
    },
    {
      date: "2023-04",
      result: "2",
    },
  ],
];
