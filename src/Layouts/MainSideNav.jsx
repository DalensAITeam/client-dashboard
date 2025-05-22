import { MdDashboard } from 'react-icons/md';
import { BsMicrosoftTeams } from 'react-icons/bs';
import { SiGoogleanalytics } from 'react-icons/si';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoMdSettings, IoMdHelpCircle } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import SideNavItem from '../components/SideNavItem';

const MainSideNav = () => {
  const location = useLocation();

  return (
    <ul className="flex flex-col gap-1">
      <li>
        <Link 
          to="/dashboard" 
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${location.pathname === '/dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <MdDashboard className="text-xl" />
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link 
          to="/myteams" 
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${location.pathname === '/myteams' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <BsMicrosoftTeams className="text-xl" />
          <span className="text-sm font-medium">My Teams</span>
        </Link>
      </li>
      <li>
        <Link 
          to="/analytics" 
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${location.pathname === '/analytics' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <SiGoogleanalytics className="text-xl" />
          <span className="text-sm font-medium">Analytics</span>
        </Link>
      </li>
      <li>
        <Link 
          to="/calendar" 
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${location.pathname === '/calendar' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <FaCalendarAlt className="text-xl" />
          <span className="text-sm font-medium">Calendar</span>
        </Link>
      </li>

      <hr className="my-3 border-gray-200" />

      <li>
        <Link 
          to="/settings" 
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${location.pathname.startsWith('/settings') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <IoMdSettings className="text-xl" />
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </li>
      <li>
        <Link 
          to="/help" 
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${location.pathname === '/help' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <IoMdHelpCircle className="text-xl" />
          <span className="text-sm font-medium">Help</span>
        </Link>
      </li>
    </ul>
  );
};

export default MainSideNav;
