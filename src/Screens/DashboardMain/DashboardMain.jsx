import { useSelector } from "react-redux";
import SideNav from "../../LayOut/SideNav";
import FeedingStatus from "./comopnents/pages/FeedingStatus/FeedingStatus";
import FeedingAlarm from "./comopnents/pages/FeednigAlarm/FeedingAlarm";
import GeneralHealth from "./comopnents/pages/GeneralHealth/GeneralHealth";
import NumberOfAnimals from "./comopnents/pages/NumberOfAnimals/NumberOfAnimals";
import Metrics from "./comopnents/pages/metrics/Metrics";
import QuickMonitoring from "./comopnents/pages/quickMonitoring/QuickMonitoring";
import "../../App.css";

const DashboardMain = () => {
  const openSideNav = useSelector((state) => state.actions.openSideNav);
  
  return (
    <div className="">
      <SideNav activeDashboard />
      <div
        // className="main flex-1 m-auto"

        className={`${
          !openSideNav ? "width-calculator " : " w-full"
        } duration-300 main flex-1 m-auto w`}
      >
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
    </div>
  );
};

export default DashboardMain;
