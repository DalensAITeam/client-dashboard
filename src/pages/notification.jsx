import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBell, FaEnvelope, FaMobile, FaDesktop } from 'react-icons/fa';
import { Switch } from '@headlessui/react';

function NotificationSetting({ title, description, icon: Icon, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-lime-50 text-lime-600 rounded-lg">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <Switch
        checked={enabled}
        onChange={onToggle}
        className={`${
          enabled ? 'bg-lime-500' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
      >
        <span className="sr-only">Enable {title}</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </Switch>
    </div>
  );
}

function Notification() {
  const { first_name } = useSelector((state) => state.userdata || {});
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: false,
    smsNotifications: true,
    desktopNotifications: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const mockNotifications = [
    {
      id: 1,
      title: "System Update",
      message: "New features have been added to your dashboard",
      time: "2 hours ago",
      type: "info"
    },
    {
      id: 2,
      title: "Alert Detected",
      message: "Unusual activity detected in Camera 2",
      time: "5 hours ago",
      type: "warning"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">Notifications</h1>
              <p className="text-gray-600">Manage your notification preferences</p>
            </div>
            <div className="bg-lime-50 text-lime-600 p-3 rounded-full">
              <FaBell size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-medium text-gray-800">Recent Notifications</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {mockNotifications.map((notification) => (
                <div key={notification.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-gray-800">{notification.title}</h3>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{notification.message}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-medium text-gray-800">Notification Settings</h2>
            </div>
            <div className="divide-y divide-gray-100">
              <NotificationSetting
                title="Push Notifications"
                description="Receive push notifications in your browser"
                icon={FaBell}
                enabled={settings.pushNotifications}
                onToggle={() => toggleSetting('pushNotifications')}
              />
              <NotificationSetting
                title="Email Notifications"
                description="Get notified via email"
                icon={FaEnvelope}
                enabled={settings.emailNotifications}
                onToggle={() => toggleSetting('emailNotifications')}
              />
              <NotificationSetting
                title="SMS Notifications"
                description="Receive SMS alerts for important events"
                icon={FaMobile}
                enabled={settings.smsNotifications}
                onToggle={() => toggleSetting('smsNotifications')}
              />
              <NotificationSetting
                title="Desktop Notifications"
                description="Show notifications on your desktop"
                icon={FaDesktop}
                enabled={settings.desktopNotifications}
                onToggle={() => toggleSetting('desktopNotifications')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
