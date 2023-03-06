import React, { useState } from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import SuspendedPageInfo from "./suspendedPageInfo";
import HomeRightmenu from "../HomeRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";

const SuspendedPage = () => {
  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
            <SuspendedPageInfo state={true} />
          </div>
          <div className={Home.right_side_bar}>
            <HomeRightmenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default SuspendedPage;
