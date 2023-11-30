import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardScreen from "./Screens/Dashboard/DashboardScreen";
import DataManagerScreen from "./Screens/DataManagerScreen/DataManagerScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/data-manager" element={<DataManagerScreen />} />
          <Route exact path="/" element={<DashboardScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
