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
import Camera from "./components/shared-components/welcome screen/Setup";
// import Home from "./page/landing-pages/home";
import DataManager from "./Screens/DataManager/DataManager";
import DashboardMain from "./Screens/DashboardMain/DashboardMain";
// Importing components for different pages
import SettingDashBoard from "./pages/settingDashBoard";
import HomeScreen from "./pages/homePage";
import SettingsLayout from "./LayOut/SettingsLayout";

import CameraContainer from "./pages/cameraSetting/cameraContainer";
import CameraSettings from "./pages/cameraSetting/cameraSetting";
import UserProfileSetting from "./pages/profileSetting/userProfileSetting";
import FarmMonitor from "./Screens/FarmMonitor/FarmMonitor";

import LoginPage from "./components/auth/login";
import SignupPage from "./components/auth/signup";
import ForgotPassword from "./components/auth/forgotPassword";
import { Toaster } from "react-hot-toast";

//The new notifications screen

import { useState, useEffect } from "react";
import { AnimalDetectionProvider } from "./context/AnimalDetectionContext";
import { socket } from './socket/socket';
// import './App.css'
import ToggleButtonOnOff from "./pages/notification";
import History from "./pages/history";
import Pricing from "./pages/Price";
import ChangePassword from "./components/auth/changePassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    // Root route for the HomeScreen component
    // <Route path="/" element={<WelcomeScreen />} />
    <Route>
      {/* Indivial Routes Are Added Here */}
      <Route path="/" element={<WelcomeScreen />} />

      <Route path="setup" element={<Camera />} />
      <Route path="/data-manager" element={<DataManager />} />
      <Route path="/dashboard" element={<DashboardMain />} />
      <Route path="/farm" element={<FarmMonitor />} />
      {/* Routes For The User Settings Are Nested Here */}
      <Route path="/settings" element={<HomeScreen />}>
        <Route element={<SettingsLayout />}>
          {/* Main settings dashboard */}
          <Route index element={<SettingDashBoard />} />
          
          {/* Individual settings pages */}
          <Route path="profile" element={<UserProfileSetting />} />
          <Route path="camera" element={<CameraSettings />} />
          <Route path="notifications" element={<ToggleButtonOnOff />} />
          <Route path="history" element={<History />} />
          <Route path="price" element={<Pricing />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/changePassword/:token" element={<ChangePassword/>} />
    </Route>
  )
);

function App() {
  // Initialize socket connection
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <AnimalDetectionProvider>
        <RouterProvider router={router} />
        <Toaster/>
      </AnimalDetectionProvider>
    </>
  );
}

export default App;
