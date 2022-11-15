import React, { useState } from 'react';
import HomeLeftMenu from "../HomeLeftMenu";
import HomeCenterView from "../HomeCenterView";
import HomeRightmenu from "../HomeRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation"
import SearchBar from "./searchBar"
import CreateNewCommunity from "./createNewCommunity"

const NewCommunitiyPage = () => {

  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
		  <div className={Home.new_community_right}>
			<SearchBar/>
			<CreateNewCommunity/>
		  </div>
 
 
        </div>
        {/*<========Mobile Bottom navgation========>*/}
     <MobileBottomNavigation/>
      </div>
      
    </>
  );
};

export default NewCommunitiyPage;
