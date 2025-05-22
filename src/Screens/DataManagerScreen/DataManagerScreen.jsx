import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../Redux/ActionSlice";
import CompressedNav from "./Components/CompressedNav";
import DataScreen from "./Components/DataScreen";
import Header from "./Components/Header";

const DataManagerScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData()); // Fetch data from the backend on component mount
  }, [dispatch]);

  return (
    <div className="flex">
      <CompressedNav />
      <div className="min-w-[calc(100vw - 100px)] px-[1.2rem] py-[.7rem] flex min-h-screen flex-col">
        <Header />
        <DataScreen />
      </div>
    </div>
  );
};

export default DataManagerScreen;