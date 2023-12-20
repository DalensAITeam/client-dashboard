import headline from "../assets/headline.svg";
import bell from "../assets/bell.svg";
import user from "../assets/user.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SideNavToggle } from "../Redux/ActionSlice";
const Header = () => {
  const dispatch = useDispatch();
  const openSideNav = useSelector((state) => state.actions.openSideNav);

  return (
    <div className="flex   items-center justify-between [box-shadow:2px_3px_4px_black] px-[.9rem] py-[.4rem]">
      <img
        onClick={() => dispatch(SideNavToggle())}
        className="h-[40px] w-[40px] cursor-pointer"
        src={headline}
        alt=""
      />
      <div className="flex gap-[1.6rem]">
        <Link onClick={() => openSideNav && dispatch(SideNavToggle())} to="/">
          <img className="h-[40px] w-[40px]" src={bell} alt="" />
        </Link>
        <Link
          onClick={() => openSideNav && dispatch(SideNavToggle())}
          to="/profile"
        >
          <img className="h-[40px] w-[40px]" src={user} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
