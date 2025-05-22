"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logOut } from "../Redux/UserDataSlice"

// Import icons
import logo from "../assets/Images/Logo.svg"
import logout from "../assets/logout.svg"
import dashboard_highlight from "../assets/dashboard_highlight.svg"
import farmMonitor_highlight from "../assets/farmMonitor_highlight.svg"
import dataManager_nohighlight from "../assets/dataManager_nohighlight.svg"
import settings_highlight from "../assets/settings_highlight.svg"
import arrow from "../assets/arrow.svg"

const SideNav = ({ 
  isExpanded, 
  onToggle, 
  activeDashboard, 
  activeDataManager, 
  activeSettings, 
  activeFarm 
}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768)
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/login')
  }

  return (
    <nav className={`fixed left-0 z-50 h-full bg-gray-900 shadow-xl transition-all duration-300 ${
      isExpanded ? 'w-64' : 'w-20'
    }`}>
      {/* Logo section with clean spacing */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-gray-800/20">
        {isExpanded && (
          <img src={logo} alt="DalensAI Logo" className="h-8 ml-1" />
        )}
        <button
          onClick={onToggle}
          className="p-1.5 rounded-lg hover:bg-gray-800/50 text-gray-400 hover:text-lime-500 transition-colors"
          aria-label="Toggle sidebar"
        >
          <img 
            src={arrow} 
            alt="" 
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? 'rotate-0' : 'rotate-180'
            }`}
          />
        </button>
      </div>

      {/* Navigation Links with improved spacing */}
      <div className="flex flex-col gap-2 p-4">
        <NavLink
          to="/dashboard"
          icon={dashboard_highlight}
          label="Dashboard"
          expanded={isExpanded}
          active={activeDashboard}
        />
        <NavLink
          to="/farm"
          icon={farmMonitor_highlight}
          label="Farm Monitor"
          expanded={isExpanded}
          active={activeFarm}
        />
        <NavLink
          to="/data-manager"
          icon={dataManager_nohighlight}
          label="Data Manager"
          expanded={isExpanded}
          active={activeDataManager}
        />
        <NavLink
          to="/settings/profile"
          icon={settings_highlight}
          label="Settings"
          expanded={isExpanded}
          active={activeSettings}
        />
      </div>

      {/* Logout button with consistent styling */}
      <button
        onClick={handleLogOut}
        className={`absolute bottom-8 left-0 right-0 mx-4 flex items-center px-4 py-3 rounded-lg transition-colors text-gray-400 hover:text-lime-500 hover:bg-gray-800/30 ${
          isExpanded ? 'justify-start' : 'justify-center'
        }`}
      >
        <img src={logout} alt="Logout" className="h-5 w-5" />
        {isExpanded && <span className="ml-3 text-sm font-medium">Logout</span>}
      </button>
    </nav>
  )
}

// Helper NavLink component
const NavLink = ({ to, icon, label, expanded, active }) => (
  <Link
    to={to}
    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 
      ${expanded ? 'justify-start' : 'justify-center'}
      ${active 
        ? 'bg-lime-500/20 text-lime-400 border-l-4 border-lime-500' 
        : 'text-gray-100 hover:bg-gray-800/30 hover:text-lime-400'}`}
  >
    <img 
      src={icon} 
      alt="" 
      className={`h-5 w-5 ${!active ? 'brightness-0 invert' : ''}`} 
    />
    {expanded && (
      <span className="ml-3 text-sm font-medium tracking-wide">
        {label}
      </span>
    )}
  </Link>
)

export default SideNav
