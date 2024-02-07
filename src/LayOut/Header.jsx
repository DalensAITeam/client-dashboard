import headline from "../assets/headline.svg";
import { FaBell } from "react-icons/fa";
// import bell from "../assets/bell.svg";
// import user from "../assets/user.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SideNavToggle } from "../Redux/ActionSlice";


const Header = () => {
  const dispatch = useDispatch();
  const openSideNav = useSelector((state) => state.actions.openSideNav);

  return (
    <div className="flex items-center justify-between border-b-2 px-[.9rem] py-[.4rem]">
      <img
        onClick={() => dispatch(SideNavToggle())}
        className="h-[40px] w-[40px] cursor-pointer"
        src={headline}
        alt=""
      />
      <div className="flex gap-8 items-center ">
        <Link onClick={() => openSideNav && dispatch(SideNavToggle())} to="/" className="text-black">
          <FaBell size={20} />
        </Link>
        <Link
          onClick={() => openSideNav && dispatch(SideNavToggle())}
          to="/profile"
        >
          <button className="rounded-full w-10 h-10 bg-lime-300">{'HF'}</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
