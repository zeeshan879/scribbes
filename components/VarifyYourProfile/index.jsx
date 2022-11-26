import React, { useState } from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import VarifyProfileView from "./varifyProfileView";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation";

const VarifyYourProfile = () => {
  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
		  <div className={Home.varifyPrfile_container}>
			<VarifyProfileView/>
		  </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
        <MobileBottomNavigation />
      </div>
    </>
  );
};

export default VarifyYourProfile;
