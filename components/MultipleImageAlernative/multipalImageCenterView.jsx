import React from "react";
import profile from "../../Asstes/Images/profile.png";
import imgV from "../../Asstes/Images/imgV2.png";
import LinkV from "../../Asstes/Images/LinkV2.png";
import gifV from "../../Asstes/Images/gifV2.png";
import postAction from "../../Asstes/Images/postAction.png";
import postP from "../../Asstes/Images/postP.png";
import postWeb from "../../Asstes/Images/postWeb.png";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import Image from "next/image";
import PostNotification from "../HomeCenterView/postNotification";
import HomeTabsSection from "../HomeCenterView/HomeTabsSection";
import UserDescritipnPost from "../HomeCenterView/userDescritipnPost";
import PostOption from "../HomeCenterView/postOption";
import { useState } from "react";
import CreatepostModal from "../CreatePostModal";
import BlogPost from "../HomeCenterView/blogPost";

const MultipalImageCenterView = () => {
  const [activeTag, setActiveTag] = useState(1);
  const [lgShow, setLgShow] = useState(false);
  function onClick() {
    setLgShow(!lgShow);
    console.log("parent true", lgShow);
  }
  return (
    <>
      <div className={HomCen.main_container}>
        <HomeTabsSection />
        <div className={HomCen.post_wraper}>
          <div className={HomCen.text_post_wraper}>
            <div className={HomCen.post_action}>
              <div className={HomCen.post_action_icon}>
                <PostOption />
              </div>
            </div>

            <BlogPost />
          </div>
          <div>
            <UserDescritipnPost check={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipalImageCenterView;
