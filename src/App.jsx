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

const router = createBrowserRouter(
  createRoutesFromElements(
    // Root route for the HomeScreen component
    // <Route path="/" element={<WelcomeScreen />} />
    <Route>
      {/* Indivial Routes Are Added Here */}
      <Route path="/" element={<WelcomeScreen />} />

      <Route path="camera" element={<Camera />} />
      <Route path="camera2" element={<Camera2 />} />
      <Route path="/data-manager" element={<DataManager />} />
      <Route path="/dashboard" element={<DashboardMain />} />

      {/* <Route path="/:id/data-manager" element={<DataManager />} />
      <Route path="/:id/dashboard" element={<DashboardMain />} /> */}
      {/* Routes For The User Settings Are Nested Here */}

      <Route path="/:id" element={<HomeScreen />}>
        {/* Nested routes for the SettingDashBoard component */}
        <Route index element={<SettingDashBoard />} />

        {/* Nested routes for the inner setting component */}
        <Route path="/:id/setting" element={<CameraContainer />}>
        {/* <Route path="/:id/setting" element={<CameraContainer />}> */}
          {/* Default route for the CameraContainer component */}
          <Route index element={<UserProfileSetting />} />

          {/* Route for the CameraSettings component */}
          <Route path="Camera" element={<CameraSettings />} />

          {/* Route for the Price component */}
          <Route path="Price" element={<p>hello price</p>} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
