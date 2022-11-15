import React from "react";
import VedioTypePost from "../HomeCenterView/vedioTypePost";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import VediosView from "./vediosView";

const VideoScreenCenterView = () => {
  return (
    <>
      <div>
        <VediosView />
      </div>
      <div className={HomCen.vedio_center_container}>
        <div className="pt-[20px] md:pt-[50px]">
          <div className={HomCen.vedio_sec_seprator}></div>
        </div>
        <div className={HomCen.vedio_screen_box}>
          <VedioTypePost check={true} />
        </div>
      </div>
    </>
  );
};

export default VideoScreenCenterView;
