const MainSideNav = () => {
  return (
    <>
      <SideNav>
        <SideNavItem
          link={"/1/dashboard"}
          icon={<MdDashboard />}
          text={"Dashboard"}
          active={true}
        />
        <SideNavItem
          link={"/1/myteams"}
          icon={<BsMicrosoftTeams />}
          text={"My Teams"}
          active={false}
        />
        <SideNavItem
          link={"/1/analytics"}
          icon={<SiGoogleanalytics />}
          text={"Analytics"}
          active={false}
        />
        <SideNavItem
          link={"/"}
          icon={<FaCalendarAlt />}
          text={"Calendar"}
          active={false}
        />
        {/* <MdGroupAdd/> */}
        <hr className="my-3" />

        <SideNavItem
          link={"/"}
          icon={<IoMdSettings />}
          text={"Settings"}
          active={false}
        />
        <SideNavItem
          link={"/"}
          icon={<IoMdHelpCircle />}
          text={"Help"}
          active={false}
        />
      </SideNav>
    </>
  );
};

export default MainSideNav;
