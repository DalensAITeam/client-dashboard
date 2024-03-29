
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import WelcomeScreen from "./components/shared-components/welcome screen/welcome";
// import Homepage from "./page/landing-pages/home";
// import Onboarding from "./components/shared-components/Onboarding-screen/onboarding";
// import WelcomeScreen from './components/shared-components/welcome screen/welcome';
import Camera from "./components/shared-components/welcome screen/camera";
import Camera2 from "./components/shared-components/welcome screen/camera2";
// import Home from "./page/landing-pages/home";
import DataManager from "./Screens/DataManager/DataManager";
import DashboardMain from "./Screens/DashboardMain/DashboardMain";
// Importing components for different pages
import SettingDashBoard from "./pages/settingDashBoard";
import HomeScreen from "./pages/homePage";
import CameraContainer from "./pages/cameraSetting/cameraContainer";
import CameraSettings from "./pages/cameraSetting/cameraSetting";
import UserProfileSetting from "./pages/profileSetting/userProfileSetting";
import FarmMonitor from "./Screens/FarmMonitor/FarmMonitor";
import LoginPage from "./components/auth/login"
import SignupPage from "./components/auth/signup"

//The new notifications screen

import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import ToggleButtonOnOff from "./pages/notification";

const router = createBrowserRouter(
  createRoutesFromElements(
    // Root route for the HomeScreen component
    // <Route path="/" element={<WelcomeScreen />} />
    <Route>
      {/* Indivial Routes Are Added Here */}
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="setup-camera" element={<Camera />} />
      <Route path="setup-animal" element={<Camera2 />} />
      <Route path="/data-manager" element={<DataManager />} />
      <Route path="/dashboard" element={<DashboardMain />} />
      <Route path="/farm" element={<FarmMonitor />} />
      {/* Routes For The User Settings Are Nested Here */}
      <Route path="/profile" element={<HomeScreen />}>
        {/* Nested routes for the SettingDashBoard component */}
        <Route index element={<SettingDashBoard />} />

        {/* Nested routes for the inner setting component */}
        <Route path="/profile/setting" element={<CameraContainer />}>
          {/* Default route for the CameraContainer component */}
          <Route index element={<UserProfileSetting />} />

          {/* Route for the CameraSettings component */}
          <Route path="camera" element={<CameraSettings />} />

          {/* Route for the Price component */}
          <Route path="Price" element={<p>hello price</p>} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  //  Merged branches
  return (
    <RouterProvider router={router} />

    // New branch
    // return(

    //  <div>
    //   <ToggleButtonOnOff/>
    //  </div>
    // )
  );
}


export default App;
