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
import UserProfile from "./userProfileView";
import CommentPost from "../CommentPost";
import { BsArrowLeft } from "react-icons/bs";
import coomentP from "../../Asstes/Images/coomentP.png";
import arrowUp2 from "../../Asstes/Images/arrowUp2.png";
import pcment from "../../Asstes/Images/pcment.png";
import comnt2 from "../../Asstes/Images/comnt2.png";
import share from "../../Asstes/Images/share.png";
import vPost from "../../Asstes/Images/vPost.png";
import reply from "../../Asstes/Images/reply.png";
import indicator from "../../Asstes/Images/indicator.png";
import indicator2 from "../../Asstes/Images/indicator2.png";
const HomeCommentPostView = () => {
  const [activeTag, setActiveTag] = useState(1);
  const [lgShow, setLgShow] = useState(false);
  function onClick() {
    setLgShow(!lgShow);
    console.log("parent true", lgShow);
  }
  return (
    <>
      <div className={HomCen.main_container}>
        <CommentPost />

        <div className={HomCen.post_comments_container}>
          <div className={HomCen.comment_scren_post}>
            <div>
              <Image src={vPost} />
            </div>
            <div>
              <div className="flex text-[#000580] gap-[4px] font-DM font-normal md:font-bold text-[14px] mdtext-[16px]">
                Mike Someone
                <span className="text-[#BCBCBC]">@Johndoe . 2h ago</span>
              </div>
              <div className={HomCen.c_post_text}>
                This is how a post would like on the website, and it’s different
                from the template we normally use for the blog posts on this
                website. Either way thats how everything looks. Wow! 🔥🔥🔥
              </div>
              <div className={HomCen.sub_comment_notification}>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={arrowUp2} />
                  </div>
                  <div className="min-h-[10px]">1</div>
                </div>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={comnt2} />
                  </div>
                  <div className="min-h-[10px]">2</div>
                </div>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={share} />
                  </div>
                  <div className="min-h-[10px]">2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CreatepostModal state={lgShow} onClick={onClick} />
      </div>
    </>
  );
};

export default HomeCommentPostView;
