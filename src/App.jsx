import QuickMonitoring from "./comopnents/pages/quickMonitoring/QuickMonitoring";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Screen from './Components/Screen'
import Metrics from "./comopnents/pages/metrics/Metrics";
import NumberOfAnimals from "./comopnents/pages/NumberOfAnimals/NumberOfAnimals";
import GeneralHealth from "./comopnents/pages/GeneralHealth/GeneralHealth";
import FeedingStatus from "./comopnents/pages/FeedingStatus/FeedingStatus";
import FeedingAlarm from "./comopnents/pages/FeednigAlarm/FeedingAlarm";

function App() {
  return (

    // DATA MANAGER SCREEN

    // <BrowserRouter>
    //   <Routes>
    //       <Route exact path="/" element={<Screen/>} />
    //     </Routes>
    // </BrowserRouter>

    // DASHBOARD REPO

    // <div className="main">
    //   <div className="monitor">
    //     <QuickMonitoring />
    //     <Metrics />
    //   </div>
    //   <div className="stats">
    //     <NumberOfAnimals />
    //     <GeneralHealth />
    //     <FeedingAlarm />
    //     <FeedingStatus />
    //   </div>
    // </div>
  );
}

export default App;



// function App() {
  

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//             <Route exact path="/" element={<Screen/>} />
//           </Routes>
//       </BrowserRouter>
     
//     </>
//   )
// }

