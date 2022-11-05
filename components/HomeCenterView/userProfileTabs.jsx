import React, {useState} from "react";
import ut from "../../Asstes/style/userprofileTabs.module.css";
import { useSelector, useDispatch } from 'react-redux'
import {chnagePageView} from "../../redux/reducers/scribbes"

const UserProfileTabs = () => {
	const [activeTab,setActiveTab]=useState(1)
	const activePageTab = useSelector((state) => state.allGernalFunction.activePageTab)
	console.log("activePageTab",activePageTab)
	const dispatch = useDispatch()
  return <>
  
  <div className={ut.tabs_wrap}>
	<div className={activePageTab==1?ut.active_tabs_items: ut.tabs_items} onClick={()=>dispatch(chnagePageView(1))}>Scribbes</div>
	<div className={activePageTab==2?ut.active_tabs_items: ut.tabs_items} onClick={()=>dispatch(chnagePageView(2))}>Blogs</div>
	<div className={activePageTab==3?ut.active_tabs_items: ut.tabs_items} onClick={()=>dispatch(chnagePageView(3))}>Likes</div>
	<div className={activePageTab==4?ut.active_tabs_items: ut.tabs_items} onClick={()=>dispatch(chnagePageView(4))}>Media</div>
  </div>
  
  
  </>;
};

export default UserProfileTabs;
