import React, { useState } from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import ComunityPageRightMenu from "./communityPageRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation";
import CommunityPageCenterView from "./comunity_center_view";

const Communitypage1 = () => {
  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
            <CommunityPageCenterView />
          </div>
          <div className={Home.right_side_bar}>
            <ComunityPageRightMenu />
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
        <MobileBottomNavigation />
      </div>
    </>
  );
};

export default Communitypage1;
