import React from "react";
import { useSelector } from "react-redux";
import { MdAccountBox, MdCreditCard } from "react-icons/md";
import { HiCamera } from "react-icons/hi";
import { FaVolumeUp, FaEdit, FaChartArea, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SettingDashBoard() {
  const navigate = useNavigate();
  const { email, first_name } = useSelector((state) => state.userdata || {});

  const renderSettingCard = (title, description, icon, path) => (
    <div
      onClick={() => navigate(path)}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col items-start gap-4 cursor-pointer group"
    >
      <div className="p-3 bg-lime-50 rounded-lg text-lime-600 group-hover:bg-lime-100 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-1 group-hover:text-lime-600 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                Welcome, {first_name || 'User'}
              </h1>
              <p className="text-gray-600">{email || 'No email set'}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/profile')}
                className="px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
                <HiCamera size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Cameras</p>
                <p className="text-xl font-semibold text-gray-800">8/10</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-50 text-green-500 rounded-lg">
                <FaChartArea size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">System Status</p>
                <p className="text-xl font-semibold text-gray-800">Normal</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-50 text-yellow-500 rounded-lg">
                <FaBell size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Alerts</p>
                <p className="text-xl font-semibold text-gray-800">2</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-50 text-purple-500 rounded-lg">
                <MdCreditCard size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Subscription</p>
                <p className="text-xl font-semibold text-gray-800">Premium</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {renderSettingCard(
            "Profile",
            "Manage your personal information and preferences",
            <MdAccountBox size={24} />,
            "/settings/profile"
          )}
          {renderSettingCard(
            "Camera",
            "Configure camera settings and monitoring options",
            <HiCamera size={24} />,
            "/settings/camera"
          )}
          {renderSettingCard(
            "Billing",
            "View and manage subscription plans and billing",
            <MdCreditCard size={24} />,
            "/settings/billing"
          )}
          {renderSettingCard(
            "Notifications",
            "Customize your notification preferences",
            <FaVolumeUp size={24} />,
            "/settings/notifications"
          )}
          {renderSettingCard(
            "History",
            "View your activity history and logs",
            <FaEdit size={24} />,
            "/settings/history"
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingDashBoard;
