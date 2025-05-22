import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";

function HomeScreen() {
  return (
    <MainLayout activePage="settings">
      <div className="p-4 sm:p-6">
        <Outlet />
      </div>
    </MainLayout>
  );
}

export default HomeScreen;
