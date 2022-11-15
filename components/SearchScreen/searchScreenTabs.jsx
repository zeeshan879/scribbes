import React from 'react'
import {useState} from 'react';
import ss from "../../Asstes/style/searchScreen.module.css";
const SearchScreenTabs = () => {
	const [active,setActive]=useState(2)
  return (
<>
<div className={ss.tabs_wraper}>
	<div className={active===1?ss.active_tabs_item:ss.tabs_item} onClick={()=>setActive(1)}>Newest</div>
	<div className={active===2?ss.active_tabs_item:ss.tabs_item} onClick={()=>setActive(2)}>Popular</div>
</div>

</>
  )
}

export default SearchScreenTabs