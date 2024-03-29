import React from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import PostNotification from "../HomeCenterView/postNotification";
import HomeTabsSection from "../HomeCenterView/HomeTabsSection";
import UserDescritipnPost from "../HomeCenterView/userDescritipnPost";
import PostOption from "../HomeCenterView/postOption";
import { useState } from "react";
import CreatepostModal from "../CreatePostModal";
import BlogPost from "../HomeCenterView/blogPost";
import ShareThoughtsSec from "./shareThoughtsSec"
const HomeCenterView = () => {
  const [activeTag, setActiveTag] = useState(1);
  const [lgShow, setLgShow] = useState(false);
  function onClick() {
    setLgShow(!lgShow);
    console.log("parent true", lgShow);
  }
  return (
    <>
      <div className={HomCen.main_container}>
        {/*<UserProfile/>*/}

        <ShareThoughtsSec/>
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
      <div>
        <CreatepostModal state={lgShow} onClick={onClick} />
      </div>
    </>
  );
};

export default HomeCenterView;
