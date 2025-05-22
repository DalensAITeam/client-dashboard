import React, { useState } from 'react';
import CameraContainer from './cameraContainer';
import { useSelector } from 'react-redux';
import { FaCamera, FaCog, FaVideo, FaWifi, FaSlidersH, FaRegLightbulb, FaRegClock, FaRegBell, FaRegEye } from 'react-icons/fa';

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

function CameraSettingField({ label, children, description }) {
  return (
    <div className="space-y-2">
      <label className="block">
        <span className="text-gray-700 font-medium">{label}</span>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </label>
      {children}
    </div>
  );
}

function CameraSetting() {
  const { first_name } = useSelector((state) => state.userdata || {});
  const [settings, setSettings] = useState({
    resolution: '1080p',
    frameRate: '30',
    quality: 'high',
    nightMode: 'auto',
    motionSensitivity: '50',
    recordingMode: 'motion',
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">Camera Settings</h1>
              <p className="text-gray-600">Configure your camera preferences and monitoring options</p>
            </div>
            <div className="bg-lime-50 text-lime-600 p-3 rounded-full">
              <FaCamera size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CameraContainer />
          </div>

          <div className="space-y-6">
            <SettingSection icon={FaVideo} title="Video Settings">
              <div className="space-y-4">
                <CameraSettingField 
                  label="Resolution" 
                  description="Higher resolution provides better image quality but requires more bandwidth"
                >
                  <select 
                    className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    value={settings.resolution}
                    onChange={(e) => handleSettingChange('resolution', e.target.value)}
                  >
                    <option value="720p">720p HD</option>
                    <option value="1080p">1080p Full HD</option>
                    <option value="2k">2K QHD</option>
                    <option value="4k">4K Ultra HD</option>
                  </select>
                </CameraSettingField>

                <CameraSettingField 
                  label="Frame Rate (FPS)"
                  description="Higher frame rates result in smoother video but use more bandwidth"
                >
                  <select 
                    className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    value={settings.frameRate}
                    onChange={(e) => handleSettingChange('frameRate', e.target.value)}
                  >
                    <option value="24">24 FPS</option>
                    <option value="30">30 FPS</option>
                    <option value="60">60 FPS</option>
                  </select>
                </CameraSettingField>
              </div>
            </SettingSection>

            <SettingSection icon={FaRegLightbulb} title="Image Settings">
              <div className="space-y-4">
                <CameraSettingField 
                  label="Night Mode"
                  description="Adjust how the camera handles low-light conditions"
                >
                  <select 
                    className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    value={settings.nightMode}
                    onChange={(e) => handleSettingChange('nightMode', e.target.value)}
                  >
                    <option value="off">Off</option>
                    <option value="auto">Auto</option>
                    <option value="always">Always On</option>
                  </select>
                </CameraSettingField>

                <CameraSettingField 
                  label="Motion Sensitivity"
                  description="Adjust how sensitive the camera is to detecting motion"
                >
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lime-500"
                    value={settings.motionSensitivity}
                    onChange={(e) => handleSettingChange('motionSensitivity', e.target.value)}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </CameraSettingField>
              </div>
            </SettingSection>

            <SettingSection icon={FaRegClock} title="Recording Settings">
              <div className="space-y-4">
                <CameraSettingField 
                  label="Recording Mode"
                  description="Choose when the camera should record footage"
                >
                  <select 
                    className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    value={settings.recordingMode}
                    onChange={(e) => handleSettingChange('recordingMode', e.target.value)}
                  >
                    <option value="continuous">Continuous</option>
                    <option value="motion">Motion Detection</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </CameraSettingField>
              </div>
            </SettingSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CameraSetting;
