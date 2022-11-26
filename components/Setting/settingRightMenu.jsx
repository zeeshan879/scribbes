import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import AboutNBA from "../HomeRightMenu/AboutNBA";

const SettingRightMenu = (props) => {
  const settingTabs = useSelector(
    (state) => state.allGernalFunction.settingTabs
  );
  return (
    <>
      <div className={rbar.right_bar_wrap}>
        <div className={rbar.serch_box_wrap}>
          <input className={rbar.seach_bar_ele} placeholder="Search " />
        </div>
        {settingTabs == 2 ? <AboutNBA /> : ""}
      </div>
    </>
  );
};

export default SettingRightMenu;
