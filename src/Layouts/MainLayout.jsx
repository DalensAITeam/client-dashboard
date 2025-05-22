import { useState, useEffect } from 'react';
import SideNav from './SideNav';
import MainSideNav from './MainSideNav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <SideNav>
        <MainSideNav />
      </SideNav>
      <main 
        className={`min-h-screen transition-all duration-300 ${isMobile ? 'pl-16' : 'pl-64'}`}
      >
        <div className="max-w-[2000px] mx-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
