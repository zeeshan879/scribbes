import React from "react";
import profile from "../../Asstes/Images/profile.png";
import imgV from "../../Asstes/Images/imgV.png";
import LinkV from "../../Asstes/Images/LinkV.png";
import gifV from "../../Asstes/Images/gifV.png";
import postAction from "../../Asstes/Images/postAction.png";
import postP from "../../Asstes/Images/postP.png";
import postWeb from "../../Asstes/Images/postWeb.png";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import Image from "next/image";
import PostNotification from "../HomeCenterView/postNotification";
import HomeTabsSection from "../HomeCenterView/HomeTabsSection";
import UserDescritipnPost from "../HomeCenterView/userDescritipnPost";
import   PostOption from "../HomeCenterView/postOption"
import { useState } from "react";
import CreatepostModal from "../CreatePostModal"
import BlogPost from "../HomeCenterView/blogPost"
import UserProfile from "./userProfileView"
const HomeCenterView = () => {
  const [activeTag, setActiveTag] = useState(1);
  const [lgShow, setLgShow] = useState(false);
  function onClick() {

    setLgShow(!lgShow);
    console.log("parent true",lgShow)
  }
  return (
    <>
      <div className={HomCen.main_container}>
        {/*<UserProfile/>*/}
        <div className={HomCen.share_thoughts_wrap}>
          <div className={HomCen.share_thoughts_box}>
            <div className={HomCen.share_thoughts_ele_wrap}>
              <div>
                <Image src={profile} />
              </div>
              <div className={HomCen.share_input_box}>
                <textarea
                  className={HomCen.share_thoughts_ele_}
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>
            </div>
            <div className={HomCen.share_thoughts_seprator}></div>
            <div className={HomCen.share_toughts_tags}>
              <div className={HomCen.share_post_tags_container}>
                <div className="flex gap-[7px] xl:gap-[16px] items-center">
                  <div className="h-[37px] w-[37px] shadow-profile rounded-[50%] border-[1px] border-[#BCBCBC] flex justify-center items-center">
                    <Image src={imgV} />
                  </div>
                  <div className="h-[37px] w-[37px] shadow-profile rounded-[50%] border-[1px] border-[#BCBCBC] flex justify-center items-center">
                    <Image src={LinkV} />
                  </div>
                  <div className="h-[37px] w-[37px] shadow-profile rounded-[50%] border-[1px] border-[#BCBCBC] flex justify-center items-center">
                    <Image src={gifV} />
                  </div>
                </div>
                <div className={HomCen.share_scribe_box}>
                  <div
                    className={
                      activeTag === 1
                        ? HomCen.share_tag_active
                        : HomCen.share_tag_non_active
                    }
                    onClick={() => setActiveTag(1)}
                  >
                    Scribbe
                  </div>
                  <div
                    className={
                      activeTag === 2
                        ? HomCen.share_tag_active
                        : HomCen.share_tag_non_active
                    }
                    onClick={() => setActiveTag(2)}
                  >
                    Blog
                  </div>
                </div>
              </div>
              <div className="h-[39px] w-[100px] 2xl:w-[144px] rounded-[41px] flex justify-center cursor-pointer items-center bg-action text-white" onClick={onClick}>
                Post
              </div>
            </div>
          </div>
        </div>
        <HomeTabsSection />
        <div className={HomCen.post_wraper}>
          <div className={HomCen.text_post_wraper}>
            <div className={HomCen.post_action}>
              <div className={HomCen.post_action_icon}>
    <PostOption/>
              </div>
            </div>

            <BlogPost/>
          </div>
          <div>
            <UserDescritipnPost  check={true} />
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
