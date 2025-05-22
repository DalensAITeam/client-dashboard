import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaUser, FaLock, FaBell, FaGlobe, FaRegClock, FaPen, FaCamera } from 'react-icons/fa';

function SettingSection({ icon: Icon, title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-lime-50 text-lime-600 rounded-lg">
          <Icon size={20} />
        </div>
        <h2 className="text-xl font-medium text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function UserProfileSetting() {
  const { first_name, email } = useSelector((state) => state.userdata || {});
  const [formData, setFormData] = useState({
    firstName: first_name || '',
    lastName: '',
    email: email || '',
    phone: '',
    timezone: 'UTC+1',
    language: 'en',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">Profile Settings</h1>
              <p className="text-gray-600">Manage your personal information and account preferences</p>
            </div>
            <div className="bg-lime-50 text-lime-600 p-3 rounded-full">
              <FaUser size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <SettingSection icon={FaUser} title="Personal Information">
              <div className="flex items-center space-x-6 mb-8">
                <div className="relative group">
                  <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {first_name ? (
                      <span className="text-3xl text-gray-600">{first_name[0]}</span>
                    ) : (
                      <FaUser className="text-gray-400" size={36} />
                    )}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg border border-gray-200 text-lime-600 hover:text-lime-700 transition-colors">
                    <FaCamera size={14} />
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Profile Photo</h3>
                  <p className="text-sm text-gray-500">Upload a new photo or remove the current one</p>
                  <div className="mt-3 flex space-x-3">
                    <button className="px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors text-sm">
                      Upload Photo
                    </button>
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>
              </div>
            </SettingSection>

            <SettingSection icon={FaGlobe} title="Language & Region">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                  <select
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    value={formData.language}
                    onChange={(e) => handleChange('language', e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                  <select
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    value={formData.timezone}
                    onChange={(e) => handleChange('timezone', e.target.value)}
                  >
                    <option value="UTC+1">UTC+01:00</option>
                    <option value="UTC+2">UTC+02:00</option>
                    <option value="UTC+3">UTC+03:00</option>
                  </select>
                </div>
              </div>
            </SettingSection>
          </div>

          <div className="space-y-6">
            <SettingSection icon={FaLock} title="Security">
              <div className="space-y-4">
                <button className="w-full px-4 py-2 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-gray-700">Change Password</span>
                  <FaPen className="text-gray-400" size={14} />
                </button>
                <button className="w-full px-4 py-2 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-gray-700">Two-Factor Authentication</span>
                  <FaPen className="text-gray-400" size={14} />
                </button>
              </div>
            </SettingSection>

            <SettingSection icon={FaBell} title="Preferences">
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300 text-lime-600 focus:ring-lime-500" />
                  <span className="text-gray-700">Email Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300 text-lime-600 focus:ring-lime-500" />
                  <span className="text-gray-700">SMS Alerts</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300 text-lime-600 focus:ring-lime-500" />
                  <span className="text-gray-700">Marketing Communications</span>
                </label>
              </div>
            </SettingSection>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfileSetting;
