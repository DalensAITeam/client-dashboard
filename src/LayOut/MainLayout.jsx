import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SideNavToggle } from "../Redux/ActionSlice";
import SideNav from "./SideNav";
import Header from "./Header";

/**
 * MainLayout - Primary layout component for the application
 * Handles layout structure and sidebar integration
 */
const MainLayout = ({ activePage, children }) => {
  const dispatch = useDispatch();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const openSideNav = useSelector((state) => state.actions.openSideNav);

  // Sync local state with Redux state
  useEffect(() => {
    setIsSidebarExpanded(openSideNav);
  }, [openSideNav]);

  const handleToggleSidebar = () => {
    dispatch(SideNavToggle());
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Map active states based on current page
  const activeStates = {
    activeDashboard: activePage === 'dashboard',
    activeFarm: activePage === 'farm',
    activeDataManager: activePage === 'data-manager',
    activeSettings: activePage === 'settings'
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <SideNav 
        isExpanded={isSidebarExpanded}
        onToggle={handleToggleSidebar}
        {...activeStates}
      />
      
      {/* Main content */}
      <div className={`flex flex-1 flex-col transition-all duration-300 ${
        isSidebarExpanded ? 'ml-64' : 'ml-20'
      }`}>
        <Header />
        <main className="flex-1 overflow-auto bg-gray-100">
          <div className="h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;