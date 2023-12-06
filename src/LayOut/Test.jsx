import logo from "../assets/logo.svg";
import grid from "../assets/grid.svg";
import logout from "../assets/logout.svg";
import group from "../assets/group.svg";
import settings from "../assets/settings.svg";
import topic from "../assets/topic.svg";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

const Test = () => {
  return (
    <div className="flex">
        <SideNav/>
        <div className="">
            <h3>Hello World</h3>
        </div>
    </div>
    // <div className="CompressedNav bg-[#393939] flex justify-between pl-[1.1rem] flex-col min-h-screen w-[90px] pb-20">
    //   <div className="sidenav-compressed flex justify-between flex-col gap-[1.2rem]">
    //     <img className='h-[80px] w-[60px]' id="logo" src={logo} alt="" />
    //     <div className="side-nav-compressed-feature flex gap-[1.2rem] flex-col">
    //       <Link className='flex items-center px-[0] py-[12px] pl-[.8rem] gap-[10px]' to="/">
    //         <img className="side-nav-img h-[40px] w-[30px] cursor-pointer" src={grid} alt="" />
    //       </Link>
    //       <Link  className='flex items-center px-[0] py-[12px] pl-[.8rem] gap-[10px] hover:bg-[#a3ff47] hover:border-l-[4px_solid_#4b9302]' to="/">
    //         <img className="side-nav-img h-[40px] w-[30px] cursor-pointer" src={topic} alt="" />
    //       </Link>
          
    //       <Link className='flex items-center px-[0] py-[12px] pl-[.8rem] gap-[10px] hover:bg-[#a3ff47] hover:border-l-[4px_solid_#4b9302]' to="/">
    //         <img className="side-nav-img h-[40px] w-[30px] cursor-pointer" src={group} alt="" />
    //       </Link>
    //       <Link  className='flex items-center px-[0] py-[12px] pl-[.8rem] gap-[10px] hover:bg-[#a3ff47] hover:border-l-[4px_solid_#4b9302]' to="">
    //         <img className="side-nav-img h-[40px] w-[30px] cursor-pointer" src={settings} alt="" />
    //       </Link>
    //     </div>
    //     <Link id="Compressed-logout" className='flex items-center px-[0] py-[12px] pl-[.8rem] gap-[10px] hover:bg-[#a3ff47] hover:border-l-[4px_solid_#4b9302]' to="">
    //     <img className="side-nav-img h-[40px] w-[30px] cursor-pointer" src={logout} alt="" />
    //   </Link>
    //   </div>
      
    // </div>
  );
};

export default Test;
