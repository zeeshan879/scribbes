import React, {useState} from "react";
import ut from "../../Asstes/style/userprofileTabs.module.css";

const UserProfileTabs = () => {
	const [activeTab,setActiveTab]=useState(1)
  return <>
  
  <div className={ut.tabs_wrap}>
	<div className={activeTab==1?ut.active_tabs_items: ut.tabs_items} onClick={()=>setActiveTab(1)}>Scribbes</div>
	<div className={activeTab==2?ut.active_tabs_items: ut.tabs_items} onClick={()=>setActiveTab(2)}>Blogs</div>
	<div className={activeTab==3?ut.active_tabs_items: ut.tabs_items} onClick={()=>setActiveTab(3)}>Likes</div>
	<div className={activeTab==4?ut.active_tabs_items: ut.tabs_items} onClick={()=>setActiveTab(4)}>Media</div>
  </div>
  
  
  </>;
};

export default UserProfileTabs;
