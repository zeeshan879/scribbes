import React, { useState } from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import SearchScreenRightMenu from "./searchScreenRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation";
import SearchScrenCenterview from "./SearchscrenCenterview";


const SearchScreenPage = () => {
  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
      <SearchScrenCenterview/>
          </div>
          <div className={Home.right_side_bar}>
            <SearchScreenRightMenu />
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
        <MobileBottomNavigation />
      </div>
    </>
  );
};

export default SearchScreenPage;
