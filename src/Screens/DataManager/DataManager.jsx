import { useSelector } from "react-redux";
import SideNav from "../../LayOut/SideNav";
import DataScreen from "./Components/DataScreen";
import Header from "../../LayOut/Header";

const DataManager = () => {
  const openSideNav = useSelector((state) => state.actions.openSideNav);
  
  return (
    <div className=" ">
      <SideNav activeDataManager />
      <div
        // className="w-full px-[1.2rem] py-[.7rem] flex min-h-screen flex-col"
        className={`${
          !openSideNav ? "w-[calc(100% - 100px)] md:ml-[100px] " : "w-full"
        } duration-300 main-data-manager  px-5 py-3`}
      >
        <Header />
        <DataScreen />
      </div>
    </div>
  );
};

export default DataManager;
