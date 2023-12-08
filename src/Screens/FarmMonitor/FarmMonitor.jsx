import { useSelector } from "react-redux";
import SideNav from "../../LayOut/SideNav";
import Header from "../../LayOut/Header";

const FarmMonitor = () => {
  const openSideNav = useSelector((state) => state.actions.openSideNav);

  return (
    <div>
      <SideNav activeFarm />
      <div
        className={`${
          !openSideNav ? "width-data-manager " : "w-full"
        } duration-300 main-data-manager  px-3 py-3`}
      >
        <Header />
      </div>
    </div>
  );
};

export default FarmMonitor;
