import React from "react";
import nc from "../../Asstes/style/new_community.module.css";
import screen from "../../Asstes/Images/screen.png";
import mobile from "../../Asstes/Images/mobile.png";
import upload_profile from "../../Asstes/Images/upload_profile.png";
import Image from "next/image";
import { useState } from "react";

const DeskTopPreview = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className={nc.desktop_preview}>
        <div className={nc.desk_prev_heading}>
          <div>Desktop Preview</div>
          <div className="flex items-center gap-[19px]">
            <Image src={screen} />
            <Image src={mobile} />
          </div>
        </div>
        <div className={nc.upload_profile}>
          <Image src={upload_profile} />
        </div>
        <div className={nc.community_category}>
          <div className="font-DM font-bold text-[20px] text-[#000580]">
            Community Name
          </div>
          <div className="pt-[13px] flex items-center gap-[12px] text-[#BCBCBC] text-base font-DM">
            <div>Category. </div>
            <div>Privacy. </div>
            <div>Members. 1</div>
          </div>
        </div>
        <div className={nc.desktop_tabs}>
          <div
            className={activeTab == 1 ? nc.active_tabs_items : nc.tabs_items}
            onClick={() => setActiveTab(1)}
          >
            Scribbes
          </div>
          <div
            className={activeTab == 2 ? nc.active_tabs_items : nc.tabs_items}
            onClick={() => setActiveTab(2)}
          >
            About
          </div>
          <div
            className={activeTab == 3 ? nc.active_tabs_items : nc.tabs_items}
            onClick={() => setActiveTab(3)}
          >
            Photos
          </div>
          <div
            className={activeTab == 4 ? nc.active_tabs_items : nc.tabs_items}
            onClick={() => setActiveTab(4)}
          >
            Videos
          </div>
          <div
            className={activeTab == 5 ? nc.active_tabs_items : nc.tabs_items}
            onClick={() => setActiveTab(5)}
          >
            More
          </div>
        </div>
        <div className={nc.desk_des}>
          <div className="font-DM text-base font-normal text-[#BCBCBC]">
            Description
          </div>
          <div className="pt-[8px] font-DM font-normal text-xs text-[#BCBCBC]">
            Lorumipsum aklklas cbkkakc kaslmlkmpoij asjnkjjjjjjjnasjnka
            niawoijoijoinaaaad kingone riski kaliber to the pointly
            hsainimmammmmajwjij awawdwa. No tu aiigramth logicially busrrt.
          </div>
        </div>
      </div>
    </>
  );
};

export default DeskTopPreview;
