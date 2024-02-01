import { useSelector } from "react-redux";
import SideNav from "../../LayOut/SideNav";
import Header from "../../LayOut/Header";
import ViewType from "./Component/ViewType";
import ListView from "./Component/LiveView"
import { useState } from "react";

const FarmMonitor = () => {
  const openSideNav = useSelector((state) => state.actions.openSideNav);
  const [viewState, setViewState]= useState(false)
 
  return (
    <div>
      <SideNav activeFarm />
      <div
        className={`${
          !openSideNav ? "width-data-manager " : "w-full"
        } duration-300 main-data-manager  px-3 py-3`}
      >
        <Header />
        {
          viewState ? <ViewType setViewState={setViewState}/>: <ListView setViewState={setViewState}/>
        }    
      </div>
    </div>
  );
};

export default FarmMonitor;
