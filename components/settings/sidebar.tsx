// FIXME

"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type FC } from "react";
import { FaArrowLeft, FaEdit, FaVolumeUp } from "react-icons/fa";
import type { IconType } from "react-icons/lib";
import { MdCameraAlt, MdContacts, MdCreditCard } from "react-icons/md";

type NavLinkProps = {
  href: string;
  title: string;
  icon: IconType;
};

const NavLink: FC<NavLinkProps> = ({ href, icon: Icon, title }) => {
  const pathname = usePathname();
  return (
    <Link
      href="/settings/profile"
      className={clsx(
        "flex items-center justify-start p-4 rounded-md border border-gray-300 cursor-pointer gap-5 w-full",
        pathname === href ? "bg-main" : "bg-white"
      )}
    >
      <div className="flex items-center w-full justify-start  gap-5">
        <Icon className="w-18 h-18" />
        <h4 className="font-poppins text-base font-normal text-gray-800">
          {title}
        </h4>
      </div>
    </Link>
  );
};

const links: NavLinkProps[] = [
  {
    href: "/settings/profile",
    icon: MdContacts,
    title: "Profile",
  },
  {
    href: "/settings/camera",
    icon: MdCameraAlt,
    title: "Camera Settings",
  },
  {
    href: "/settings/pricing",
    icon: MdCreditCard,
    title: "Pricing",
  },
  {
    href: "/settings/notifications",
    icon: FaVolumeUp,
    title: "Notification Settings",
  },
  {
    href: "/settings/history",
    icon: FaEdit,
    title: "History",
  },
];

function SettingSideBar() {
  const router = useRouter();
  return (
    // Main container with flex column layout
    <div className="flex flex-col items-start justify-start gap-10 p-4">
      {/* Back arrow */}
      <FaArrowLeft
        className="w-27 h-14 cursor-pointer"
        onClick={() => router.push("/settings")}
      />
      {/* Navigation links */}
      <div className="flex flex-col items-center justify-start w-305px h-344px gap-5 mx-auto">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
}

export default SettingSideBar;
