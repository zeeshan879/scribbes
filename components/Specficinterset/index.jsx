import React, { useState } from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import SpecficInterestCenterView from "./specficInterestCenterView";
import SpecficInterestRightView from "./SpecficInterestRightView";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation";

const SpecificInterst = () => {
  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
            <SpecficInterestCenterView />
          </div>
          <div className={Home.right_side_bar}>
            <SpecficInterestRightView />
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
        <MobileBottomNavigation />
      </div>
    </>
  );
};

export default SpecificInterst;
