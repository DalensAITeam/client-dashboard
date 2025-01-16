import Image from "next/image";
import { MobileMenu } from "../svg";
import dalensLogo from "@/assets/images/dalens-ai-logo.png";

const MobileNav = () => {
  return (
    <nav className="grid grid-cols-3 lg:hidden mx-[20px] mt-[20px]">
      <button>
        <MobileMenu />
      </button>
      <figure className="w-full flex items-center justify-center">
        <Image
          width={54}
          height={24}
          alt="Dalens Logo"
          draggable={false}
          src={dalensLogo.src}
        />
      </figure>
    </nav>
  );
};

export default MobileNav;
