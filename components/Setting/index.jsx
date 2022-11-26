import React, { useState } from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import SettingCenterView from "./settingCenterView";
import SettingRightMenu from "./settingRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation";

const Setting = () => {
  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
<SettingCenterView/>
          </div>
          <div className={Home.right_side_bar}>
            <SettingRightMenu />
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
        <MobileBottomNavigation />
      </div>
    </>
  );
};

export default Setting;
