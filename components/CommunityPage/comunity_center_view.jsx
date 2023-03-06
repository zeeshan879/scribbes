import React from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import CommunityTiles from "./communityTiles";
import { RiArrowDownSLine } from "react-icons/ri";
import BlogPost from "../HomeCenterView/blogPost";
import postWeb1 from "../../Asstes/Images/postWeb1.png";
import Image from "next/image";
import ComunityPostSec from "./comunityPostSec"

const CommunityPageCenterView = () => {
  return (
    <>
      <div className={HomCen.trending_videos_box}>
        <CommunityTiles />

        <div className={HomCen.community_page_sep}></div>
        <div className={HomCen.trendind_vedio_post}>
          <div className={HomCen.community_web_btn_}>
            <Image src={postWeb1} />
            WEB 3.0
          </div>
          <div className={HomCen.trending_blog_post}>
            <BlogPost />
            <ComunityPostSec/>
       
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPageCenterView;
