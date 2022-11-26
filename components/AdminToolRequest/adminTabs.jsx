import React from "react";
import {useState} from "react";
import at from "../../Asstes/style/admin_tool.module.css";
import {chnageAdminToolTabs} from "../../redux/reducers/scribbes"
import { useSelector,useDispatch } from "react-redux";

const AdminTabs = () => {
	const [active,setActive]=useState(1)
	const adminToolTabs = useSelector(
		(state) => state.allGernalFunction.adminToolTabs
	  );
	const dispatch=useDispatch()
  return (
    <>
      <div className={at.tabs_box}>
        <div className={adminToolTabs==1?at.active_tabs_items: at.tabs_items} onClick={()=>dispatch(chnageAdminToolTabs(1))}>Request</div>
        <div className={adminToolTabs==2?at.active_tabs_items: at.tabs_items} onClick={()=>dispatch(chnageAdminToolTabs(2))}>Members</div>
        <div className={adminToolTabs==3?at.active_tabs_items: at.tabs_items} onClick={()=>dispatch(chnageAdminToolTabs(3))}>Rules</div>
        <div className={adminToolTabs==4?at.active_tabs_items: at.tabs_items} onClick={()=>dispatch(chnageAdminToolTabs(4))}>Settings</div>
      </div>
    </>
  );
};

export default AdminTabs;
