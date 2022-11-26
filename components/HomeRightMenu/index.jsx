import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import TrendingInterst from "./trendingInterst";
import TrendingTopics from "./trendingTopics";
import TrendingVedios from "./trendingVedios";
import ComunicationWithVideos from "./comunicationMostVideos";
import ProfilePosting from "./profilePosting";
import Filtersetting from "./filter_setting";

const HomeRightmenu = (props) => {
  return (
    <>
      <div className={rbar.right_bar_wrap}>
        <div className={rbar.serch_box_wrap}>
          <input className={rbar.seach_bar_ele} placeholder="Search " />
        </div>
        <TrendingInterst />
        <TrendingVedios />
      </div>
    </>
  );
};

export default HomeRightmenu;
