import React, { useState } from 'react';
import HomeLeftMenu from "../HomeLeftMenu";
import UserProfileView from "../HomeCenterView/userProfileView";
import HomeRightmenu from "../HomeRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation"

const UserProfilePage = () => {

  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
            <UserProfileView/>
          </div>
          <div className={Home.right_side_bar}>
            <HomeRightmenu />
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
     <MobileBottomNavigation/>
      </div>
      
    </>
  );
};

export default UserProfilePage;