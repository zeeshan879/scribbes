import React from "react";
import pf from "../../Asstes/style/profile_folloers_center.module.css";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import backscreen from "../../Asstes/Images/backscreen.png";
import Image from "next/image";
import { useState } from "react";
import FollowersTile from "./followersTile"

const PrfileFollowersCenter = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className={HomCen.main_container}>
        <div className={pf.header_wraper}>
          <div className="cursor-pointer pt-[7px]">
            <Image src={backscreen} />
          </div>
          <div>
            <div className="text-[20px] md:text-[30px] font-sans font-bold leading-[38px]">
              John Doe
            </div>
            <div className="text-[16px] md:text-[20px] font-DM font-normal text-[#BCBCBC]">
              145 Posts
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[34px]">
          <div className={pf.followers_tabs_wraper}>
            <div
              className={
                active == 1 ? pf.follower_items_active : pf.follower_items
              }
              onClick={() => setActive(1)}
            >
              Followers
            </div>
            <div
              className={
                active == 2 ? pf.follower_items_active : pf.follower_items
              }
              onClick={() => setActive(2)}
            >
              Following
            </div>
          </div>
        </div>
	{active==1?	<FollowersTile/> :<FollowersTile/>}
      </div>
    </>
  );
};

export default PrfileFollowersCenter;
