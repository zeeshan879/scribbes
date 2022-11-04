import React from 'react'
import HomeLeftMenu from "../HomeLeftMenu";
import EditProfilecenter from "./editProfileCenter";
import HomeRightmenu from "../HomeRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation"

const UserEditProfile = () => {
  return (
	<>
	     <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
            <EditProfilecenter/>
          </div>
          <div className={Home.right_side_bar}>
            <HomeRightmenu />
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
     <MobileBottomNavigation/>
      </div>
	
	
	</>
  )
}

export default UserEditProfile