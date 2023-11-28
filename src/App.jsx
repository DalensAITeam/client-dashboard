import './App.css'


 // DATA MANAGER SCREEN - DAVID HYPE

import QuickMonitoring from "./comopnents/pages/quickMonitoring/QuickMonitoring";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// DASHBOARD BRANCH- MOHAMMED

import Screen from './Components/Screen'
import Metrics from "./comopnents/pages/metrics/Metrics";
import NumberOfAnimals from "./comopnents/pages/NumberOfAnimals/NumberOfAnimals";
import GeneralHealth from "./comopnents/pages/GeneralHealth/GeneralHealth";
import FeedingStatus from "./comopnents/pages/FeedingStatus/FeedingStatus";
import FeedingAlarm from "./comopnents/pages/FeednigAlarm/FeedingAlarm";

   //DASHBOARD-CONTINUE - ANIEKEME

// import Homepage from "./page/landing-pages/home"
import Onboarding from './components/shared-components/Onboarding-screen/onboarding';
import WelcomeScreen from './components/shared-components/welcome screen/welcome';
import Camera from './components/shared-components/welcome screen/camera';
import Camera2 from './components/shared-components/welcome screen/camera2';

//NATHOOETIME- NATHANIEL JOSEPH (start)

  // Importing necessary dependencies from react-router-dom
  import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
  } from "react-router-dom";

  // Importing components for different pages
  import SettingDashBoard from "./pages/settingDashBoard";
  import HomeScreen from "./pages/homePage";
  import CameraContainer from "./pages/cameraSetting/cameraContainer";
  import CameraSettings from "./pages/cameraSetting/cameraSetting";
  import UserProfileSetting from "./pages/profileSetting/userProfileSetting";

  const router = createBrowserRouter(
    createRoutesFromElements(
      // Root route for the HomeScreen component
      <Route path="/" element={<HomeScreen />}>
        {/* Nested routes for the SettingDashBoard component */}
        <Route index element={<SettingDashBoard />} />

        {/* Nested routes for the inner setting component */}
        <Route path="setting" element={<CameraContainer />}>
          {/* Default route for the CameraContainer component */}
          <Route index element={<UserProfileSetting />} />

          {/* Route for the CameraSettings component */}
          <Route path="Camera" element={<CameraSettings />} />

          {/* Route for the Price component */}
          <Route path="Price" element={<p>hello price</p>} />
        </Route>
      </Route>
    )
  );

  //NATHOOETIME- NATHANIEL JOSEPH (end)

function App() {
  return (

    // DATA MANAGER SCREEN - DAVID HYPE

    // <BrowserRouter>
    //   <Routes>
    //       <Route exact path="/" element={<Screen/>} />
    //     </Routes>
    // </BrowserRouter>

   // DASHBOARD BRANCH- MOHAMMED

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

    //DASHBOARD-CONTINUE - ANIEKEME

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<WelcomeScreen />} />
    //       {/* <Route index element={<Home />} /> */}
    //       <Route path="onboarding" element={<Onboarding />} />
    //       <Route path="welcome" element={<WelcomeScreen />} />
    //       <Route path="camera" element={<Camera />} />
    //       <Route path="camera2" element={<Camera2 />} />
    //       {/* <Route path="*" element={<NoPage />} /> */}
    //   </Routes>
    // </BrowserRouter>


    //NATHOOETIME- NATHANIEL JOSEPH

  <RouterProvider router={router} />
  );
}

export default App;
