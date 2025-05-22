import { useSelector } from "react-redux"
import SideNav from "./SideNav"
import Header from "./Header"

/**
 * MainLayout - Primary layout component for the application
 * Debug version with explicit overflow handling
 */
const MainLayout = ({ activePage, children }) => {
  const openSideNav = useSelector((state) => state.actions.openSideNav)

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      {/* Sidebar navigation */}
      <SideNav
        activeDashboard={activePage === "dashboard"}
        activeDataManager={activePage === "data-manager"}
        activeSettings={activePage === "settings"}
        activeFarm={activePage === "farm"}
      />

      {/* Main content area */}
      <div
        className={`flex flex-col flex-1 h-screen transition-all duration-300 ease-in-out ${
          !openSideNav ? "md:ml-20" : "ml-0"
        }`}
      >
        {/* Header */}
        <Header />

        {/* Content area - explicitly set to take remaining height and scroll content */}
        <main className="flex-1 overflow-auto p-4 w-full h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout