import React, { useState } from 'react';
import HomeLeftMenu from "../HomeLeftMenu";
import HomeCenterView from "../HomeCenterView";
import TrendingScreenRightMenu from "./trendingScreenRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation"
import TrendingScreenCenter from "./trendingScreenCenter"

const TrendingScreen = () => {

  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
        <TrendingScreenCenter/>
          </div>
          <div className={Home.right_side_bar}>
 <TrendingScreenRightMenu/>
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
     <MobileBottomNavigation/>
      </div>
      
    </>
  );
};

export default TrendingScreen;
