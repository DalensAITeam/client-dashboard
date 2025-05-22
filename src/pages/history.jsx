import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaHistory, FaSearch, FaFilter, FaDownload, FaVideo, FaExclamationTriangle, FaCog, FaCheck } from 'react-icons/fa';

function HistoryItem({ date, time, type, description, status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'bg-green-50 text-green-600';
      case 'warning': return 'bg-yellow-50 text-yellow-600';
      case 'error': return 'bg-red-50 text-red-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'video': return <FaVideo />;
      case 'alert': return <FaExclamationTriangle />;
      case 'setting': return <FaCog />;
      default: return <FaCheck />;
    }
  };

  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 transition-colors rounded-lg">
      <div className={`p-2 rounded-lg ${getStatusColor(status)}`}>
        {getIcon(type)}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-800">{description}</h3>
          <div className="text-sm text-gray-500">
            <div>{time}</div>
            <div>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function History() {
  const { first_name } = useSelector((state) => state.userdata || {});
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const mockHistory = [
    {
      id: 1,
      date: '2025-05-22',
      time: '14:30',
      type: 'video',
      description: 'Started recording on Camera 1',
      status: 'success'
    },
    {
      id: 2,
      date: '2025-05-22',
      time: '13:15',
      type: 'alert',
      description: 'Motion detected in restricted area',
      status: 'warning'
    },
    {
      id: 3,
      date: '2025-05-22',
      time: '12:00',
      type: 'setting',
      description: 'Updated camera settings',
      status: 'success'
    },
    {
      id: 4,
      date: '2025-05-22',
      time: '11:45',
      type: 'alert',
      description: 'System maintenance completed',
      status: 'success'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">Activity History</h1>
              <p className="text-gray-600">View your recent activities and logs</p>
            </div>
            <div className="bg-lime-50 text-lime-600 p-3 rounded-full">
              <FaHistory size={24} />
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search history..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center space-x-2">
                <FaFilter />
                <span>Filter</span>
              </button>
              <button className="px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 flex items-center space-x-2">
                <FaDownload />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex space-x-4">
              {['All', 'Video', 'Alerts', 'Settings'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type.toLowerCase())}
                  className={`px-4 py-2 rounded-lg ${
                    filter === type.toLowerCase()
                      ? 'bg-lime-50 text-lime-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {mockHistory.map((item) => (
              <HistoryItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
