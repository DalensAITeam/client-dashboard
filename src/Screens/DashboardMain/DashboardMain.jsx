import { useSelector } from "react-redux";
import SideNav from "../../LayOut/SideNav";
import FeedingStatus from "./comopnents/pages/FeedingStatus/FeedingStatus";
import FeedingAlarm from "./comopnents/pages/FeednigAlarm/FeedingAlarm";
import GeneralHealth from "./comopnents/pages/GeneralHealth/GeneralHealth";
import NumberOfAnimals from "./comopnents/pages/NumberOfAnimals/NumberOfAnimals";
import Metrics from "./comopnents/pages/metrics/Metrics";
import QuickMonitoring from "./comopnents/pages/quickMonitoring/QuickMonitoring";
import "../../App.css";
import { HiMenu } from "react-icons/hi";
import { FaBell } from "react-icons/fa6";
import Navbar from "../../components/shared-components/navbar/navbar";

const DashboardMain = () => {
  const openSideNav = useSelector((state) => state.actions.openSideNav);

  return (
    <>
      <Navbar Bell={<FaBell />} toggle={<HiMenu />} text={"HF"} />
      <div className={`px-6  w-full py-3 flex`}>
        <SideNav activeDashboard />
        <div
          className={`md:flex-1  ${
            !openSideNav ? "w-fit md:ml-20 " : "w-full"
          } duration-300 main flex m-auto`}
        >
          <div className="flex-col justify-center items-center md:w-11/12">
            <QuickMonitoring />
          </div>

          <div className="flex flex-wrap self-end md:flex-1 justify-around md:justify-between mx-auto w-full md:flex-col md:w-full">
            <NumberOfAnimals />
            <FeedingAlarm />
            <GeneralHealth />
          </div>
          <FeedingStatus />
          <Metrics />
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
