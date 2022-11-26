import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import TrendingInterst from "../HomeRightMenu/trendingInterst";
import TrendingTopics from "../HomeRightMenu/trendingTopics";
import TrendingVedios from "../HomeRightMenu/trendingVedios";
import ComunicationWithVideos from "../HomeRightMenu/comunicationMostVideos";
import ProfilePosting from "../HomeRightMenu/profilePosting";
import Filtersetting from "../HomeRightMenu/filter_setting";
import MostFollowedCommunity from "../HomeRightMenu/mostFollowedCommunity";
import TopTrendingCommunity from "../HomeRightMenu/TopTrendingCommnities";

const HashScreenRightMenu = (props) => {
  return (
    <>
      <div className={rbar.right_bar_wrap}>
        <div className={rbar.serch_box_wrap}>
          <input className={rbar.seach_bar_ele} placeholder="Search " />
        </div>
        <Filtersetting />
      </div>
    </>
  );
};

export default HashScreenRightMenu;
