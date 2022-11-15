import React, { useState } from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import VedioScreenRightMenu from "./vedioScreenRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation";
import VideoScreenCenterView from "./videoScreenCenterView";

const VideoScreen = () => {
  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
            <VideoScreenCenterView />
          </div>
          <div className={Home.right_side_bar}>
        <VedioScreenRightMenu/>
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
        <MobileBottomNavigation />
      </div>
    </>
  );
};

export default VideoScreen;
