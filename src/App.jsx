import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardScreen from "./Screens/Dashboard/DashboardScreen";
import DataManagerScreen from "./Screens/DataManagerScreen/DataManagerScreen";
import SideNav from "./Layouts/SideNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/data-manager" element={<DataManagerScreen />} />
          <Route exact path="/dashboard" element={<DashboardScreen />} />
          <Route exact path="/" element={<SideNav />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
