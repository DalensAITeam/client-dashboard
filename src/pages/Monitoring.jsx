import React, { useState } from 'react';
import LiveMonitoring from '../components/LiveMonitoring';
import { FaVideo, FaChartLine, FaBell, FaCog } from 'react-icons/fa';

const QuickStat = ({ icon: Icon, label, value, trend, color }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 mb-1">{label}</p>
        <h3 className="text-2xl font-semibold text-gray-800">{value}</h3>
        {trend && (
          <p className={`text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '+' : ''}{trend}% from last hour
          </p>
        )}
      </div>
      <div className={`p-4 rounded-xl ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
    </div>
  </div>
);

const MonitoringPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isAlertsPanelOpen, setIsAlertsPanelOpen] = useState(false);

  const recentAlerts = [
    { id: 1, message: 'Unusual movement detected in Barn 2', time: '2 mins ago', type: 'warning' },
    { id: 2, message: 'Animal count below threshold in Pen 1', time: '15 mins ago', type: 'alert' },
    { id: 3, message: 'Temperature spike in Chicken Coop', time: '1 hour ago', type: 'warning' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <header className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Farm Monitoring</h1>
            <p className="text-gray-600">Real-time animal monitoring and detection</p>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsAlertsPanelOpen(!isAlertsPanelOpen)}
              className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaBell size={20} />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <FaCog size={20} />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickStat 
            icon={FaVideo}
            label="Active Cameras"
            value="8/10"
            trend={0}
            color="bg-blue-500"
          />
          <QuickStat 
            icon={FaChartLine}
            label="Animals Detected"
            value="124"
            trend={5}
            color="bg-green-500"
          />
          <QuickStat 
            icon={FaBell}
            label="Active Alerts"
            value="3"
            trend={-2}
            color="bg-yellow-500"
          />
          <QuickStat 
            icon={FaCog}
            label="System Status"
            value="Normal"
            color="bg-purple-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'grid'
                  ? 'bg-lime-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              Grid View
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'list'
                  ? 'bg-lime-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              List View
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <select className="rounded-lg border border-gray-200 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500">
              <option value="all">All Cameras</option>
              <option value="active">Active Only</option>
              <option value="alerts">With Alerts</option>
            </select>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50">
              Refresh
            </button>
          </div>
        </div>

        <div className="relative">
          <LiveMonitoring />
          
          {/* Alerts Panel */}
          <div className={`absolute top-0 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 transform transition-transform duration-200 ${
            isAlertsPanelOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-800">Recent Alerts</h3>
                <button 
                  onClick={() => setIsAlertsPanelOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {recentAlerts.map(alert => (
                <div key={alert.id} className="flex items-start space-x-3">
                  <div className={`mt-1 h-2 w-2 rounded-full ${
                    alert.type === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                  }`}></div>
                  <div>
                    <p className="text-sm text-gray-800">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="w-full px-4 py-2 text-center text-sm text-lime-600 hover:text-lime-700">
                View All Alerts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default MonitoringPage;
