import React from 'react';
import { Outlet } from 'react-router-dom';
import SettingSideBar from '../component/settingSideBar/settingSideBar';

function SettingsLayout() {
  return (
    <div className="flex h-full">
      <SettingSideBar />
      <div className="flex-1 p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default SettingsLayout;
