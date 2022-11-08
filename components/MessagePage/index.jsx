import React, { useState } from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import MessageLeftSection from "./messageLeftSection";
import HomeRightmenu from "../HomeRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation";
import MessageRightSec from "./messageRightSec"

const Messages = () => {
  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.Message_center}>
            <MessageLeftSection />
          </div>
          <div className={Home.message_right}>
			<MessageRightSec/>
		  </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
        <MobileBottomNavigation />
      </div>
    </>
  );
};

export default Messages;
