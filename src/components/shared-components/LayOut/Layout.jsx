import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <aside className="w-64 bg-gray-800 fixed h-full z-30">
        {/* Sidebar content */}
      </aside>
      <main className="flex-1 ml-64 flex flex-col h-screen">
        <div className="fixed top-0 right-0 left-64 bg-white z-20 shadow-sm">
          <Navbar />
        </div>
        <div className="flex-1 overflow-hidden pt-16">{children}</div>
      </main>
    </div>
  );
};

export default Layout;