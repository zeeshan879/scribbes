import React, { useState } from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import arrowDown from "../../Asstes/Images/arrowDown.png"
import Image from "next/image";

const HomeTabsSection = () => {
  const [active, setActive] = useState(2);
  return (
    <>
      <div className={HomCen.tabs_wrap}>
        <div className={HomCen.news_wrap}>
          <div className={active === 1 ? HomCen.news_ele_active : HomCen.news_ele} onClick={()=>setActive(1)}>
            Newest
          </div>
          <div className={active === 2 ? HomCen.news_ele_active : HomCen.news_ele} onClick={()=>setActive(2)}>
		  Popular
          </div>
          <div className={active === 3 ? HomCen.news_ele_active : HomCen.news_ele} onClick={()=>setActive(3)}>
		  Following
          </div>
        </div>
		<div className={HomCen.all_post_wrap}>All posts
		<Image src={arrowDown} />
		</div>
      </div>
    </>
  );
};

export default HomeTabsSection;
