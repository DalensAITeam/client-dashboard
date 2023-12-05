import FeedingStatus from "./comopnents/pages/FeedingStatus/FeedingStatus";
import FeedingAlarm from "./comopnents/pages/FeednigAlarm/FeedingAlarm";
import GeneralHealth from "./comopnents/pages/GeneralHealth/GeneralHealth";
import NumberOfAnimals from "./comopnents/pages/NumberOfAnimals/NumberOfAnimals";
import Metrics from "./comopnents/pages/metrics/Metrics";
import QuickMonitoring from "./comopnents/pages/quickMonitoring/QuickMonitoring";

const DashboardMain = () => {
  return (
    <div className="main">
      <div className="monitor">
        <QuickMonitoring />
        <Metrics />
      </div>

      <div className="stats">
        <NumberOfAnimals />
        <GeneralHealth />
        <FeedingAlarm />
        <FeedingStatus />
      </div>
    </div>
  );
};

export default DashboardMain;
