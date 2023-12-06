import { useState } from "react";
import { Link } from "react-router-dom";

const SideNavItem = ({ link, active, icon, text }) => {
  const [showSideNavFull, setShowSideNavFull] = useState(second);
  return (
    <div className="mt-5">
      <Link to={link} className="mt-10">
        <div
          className={`gap-3 relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer ${
            active
              ? "bg-gradient-to-tr from-blue-600 to-blue-500 text-blue-50"
              : "hover:bg-blue-50 text-gray-600"
          }`}
        >
          <div className={`text-2xl ${showSideNavFull && "text-3xl pl-2"}`}>
            {icon}
          </div>
          {!showSideNavFull && <span>{text}</span>}
        </div>
      </Link>
    </div>
  );
};

export default SideNavItem;
