import React, { useState } from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import HashScreenRightMenu from "./HashScreenRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation";
import HashTagCenterview from "./hashtagCenterview"

const HashTagscreenview = () => {
  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
       <HashTagCenterview/>
          </div>
          <div className={Home.right_side_bar}>
          <HashScreenRightMenu/>
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
        <MobileBottomNavigation />
      </div>
    </>
  );
};

export default HashTagscreenview