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
      <div className=" px-6 py-3">
        {/* <SideNav activeDashboard /> */}
        <div
        // className={`${
        //   !openSideNav ? "width-calculator " : " w-full"
        // } duration-300 main flex-1 m-auto w`}
        >
          <QuickMonitoring />
          <div className="flex justify-around mx-auto w-full">
            <NumberOfAnimals />
            <FeedingAlarm />
          </div>

          <div className="">
            <GeneralHealth />
            <FeedingStatus />
          </div>

          <Metrics />
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
