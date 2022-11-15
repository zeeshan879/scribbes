import React from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import TrendingVideos from "./trendingVideos";
import { RiArrowDownSLine } from "react-icons/ri";
import BlogPost from "../HomeCenterView/blogPost";

const TrendingScreenCenter = () => {
  return (
    <>
      <div className={HomCen.trending_videos_box}>
        <TrendingVideos />
        <div className={HomCen.trending_videos_showmore}>
          <div className="flex gap-[15px] items-center cursor-pointer">
            Show more <RiArrowDownSLine className="text-xl" />
          </div>
        </div>
        <div className={HomCen.trending_video_sep}></div>
        <div className={HomCen.trendind_vedio_post}>
          <div className={HomCen.trending_V_heading}>
            Todays Top trending posts
          </div>
          <div className={HomCen.trending_blog_post}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingScreenCenter;
