import DataScreen from "./Components/DataScreen";
import MainLayout from "../../LayOut/MainLayout";

const DataManager = () => {
  return (
    <MainLayout activePage="data-manager">
      <div className="p-4 sm:p-6">
        <DataScreen />
      </div>
    </MainLayout>
  );
};

export default DataManager;
