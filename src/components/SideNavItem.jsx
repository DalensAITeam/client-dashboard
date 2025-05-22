import { Link } from 'react-router-dom';

const SideNavItem = ({ link, icon, text, active }) => {
  return (
    <Link
      to={link}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
        active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </Link>
  );
};

export default SideNavItem;
