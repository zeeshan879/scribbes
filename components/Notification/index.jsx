import React from 'react'
import HomeLeftMenu from "../HomeLeftMenu";
import NotificationCenterView from "./notificationCenterView";
import NotificationRightPage from "./notificationRightPage";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation"

const NotificationPage = () => {
  return (
	<>
	     <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.centerView}>
            <NotificationCenterView/>
          </div>
          <div className={Home.right_side_bar}>
  <NotificationRightPage/>
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
     <MobileBottomNavigation/>
      </div>
	
	
	</>
  )
}

export default NotificationPage