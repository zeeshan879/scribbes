import React,{useState} from 'react'
import ht from "../../Asstes/style/hashtag_screen.module.css";

const Hashtagtabs = () => {
	const [activeTab,setActiveTab]=useState(1)
  return (
<div className={ht.hash_tabs_wraper}>
<div className={ht.tabs_box}>
	<div className={activeTab==1?ht.active_tab_item:ht.tab_item} onClick={()=>setActiveTab(1)}>Newest</div>
	<div className={activeTab==2?ht.active_tab_item:ht.tab_item} onClick={()=>setActiveTab(2)}>Popular</div>
	<div className={activeTab==3?ht.active_tab_item:ht.tab_item} onClick={()=>setActiveTab(3)}>Following</div>
</div>
</div>
  )
}

export default Hashtagtabs