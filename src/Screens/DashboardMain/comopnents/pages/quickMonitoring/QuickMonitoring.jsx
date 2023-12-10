import "./monitoring.css";

const QuickMonitoring = () => {
  return (
    <div className="">
      <div className="flex w-full justify-between py-3 items-center">
        <h1 className="text-lg font-medium">Quick Monitoring</h1>
        <button className="text-sm text-green-400 cursor-pointer">
          See more
        </button>
      </div>
      <img src="/screen.png" alt="camer-1" />
    </div>
  );
};

export default QuickMonitoring;
