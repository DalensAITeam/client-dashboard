import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai';
import { IoLogOut } from 'react-icons/io5';
import { RiDashboardLine, RiSettings4Line } from 'react-icons/ri';
import { MdOutlineFarm } from 'react-icons/md';
import { BsDatabase } from 'react-icons/bs';
import logo from "../assets/Images/Logo.svg";

const SideNav = ({ isExpanded, onToggle }) => {
  const activePage = useSelector((state) => state.actions?.activePage) || 'dashboard';

  const navItems = [
    { id: 'dashboard', icon: RiDashboardLine, label: 'Dashboard', path: '/' },
    { id: 'farm', icon: MdOutlineFarm, label: 'Farm Monitor', path: '/farm' },
    { id: 'data-manager', icon: BsDatabase, label: 'Data Manager', path: '/data-manager' },
    { id: 'settings', icon: RiSettings4Line, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside 
      className={`fixed left-0 top-0 h-full ${isExpanded ? 'w-64' : 'w-16'} 
        bg-white/95 backdrop-blur-sm border-r border-gray-100 shadow-sm z-40 transition-all duration-300 ease-in-out`}
    >
      <nav className="h-full flex flex-col">
        {/* Header */}
        <div className="h-16 px-3 flex justify-between items-center border-b border-gray-100">
          <Link to="/" className={`transition-all duration-300 ${!isExpanded ? 'w-0 opacity-0' : 'w-32 opacity-100'} overflow-hidden`}>
            <img 
              src={logo} 
              className="h-8 w-auto" 
              alt="DalensAI" 
            />
          </Link>
          <button 
            onClick={onToggle}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {isExpanded ? (
              <AiOutlineLeftCircle className="w-5 h-5 text-gray-600" />
            ) : (
              <AiOutlineRightCircle className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4 overflow-hidden hover:overflow-y-auto">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                      ${activePage === item.id 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className={`transition-all duration-300 ${!isExpanded ? 'w-0 opacity-0' : 'w-auto opacity-100'} whitespace-nowrap`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100">
          <div className="p-3 flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40"
              className="w-8 h-8 rounded-full flex-shrink-0"
              alt="User avatar"
            />
            <div className={`flex-1 min-w-0 transition-all duration-300 ${!isExpanded ? 'w-0 opacity-0' : 'w-auto opacity-100'} overflow-hidden`}>
              <h4 className="font-medium text-sm text-gray-900 truncate">David Hype</h4>
              <span className="text-xs text-gray-500 truncate block">iamsocialhype@gmail.com</span>
            </div>
            <button 
              className="p-1.5 text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-gray-100"
              title="Logout"
            >
              <IoLogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobile && isExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-30" 
          onClick={() => setIsExpanded(false)}
        />
      )}
    </aside>
  );
};

export default SideNav;
