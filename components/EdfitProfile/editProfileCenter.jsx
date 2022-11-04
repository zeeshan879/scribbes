import React from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import { BsArrowLeft } from "react-icons/bs";
import UserDescritipnPost from "../HomeCenterView/userDescritipnPost";
import { useState } from "react";
import CreatepostModal from "../CreatePostModal";
import UserProfileSection2 from "../UserProfile/userProfileSection";
import BlogPost from "../HomeCenterView/blogPost";
import EditProfileModal from "./editProfileModal";

const EditProfilecenter = () => {
  const [activeTag, setActiveTag] = useState(1);
  const [lgShow, setLgShow] = useState(false);

  function onClick() {
    setLgShow(!lgShow);
  }
  return (
    <>
      <div className={HomCen.main_container}>
        <div className={HomCen.comment_post_header}>
          <div className="flex font-grotesk gap-[18px] items-center">
            {" "}
            <BsArrowLeft className="cursor-pointer" />
            Mike Someone
          </div>
          <div className="text-sm font-DM sm:text-[18px] pl-[40px] lg:pl-[48px] text-[#BCBCBC] font-normal">
            145 Posts
          </div>
        </div>
        <UserProfileSection2 state={true} />
        <div className={HomCen.edit_profile_post_wraper}>
          <div className={HomCen.text_post_wraper}>
            <BlogPost />
          </div>
          <div>
            <UserDescritipnPost check={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfilecenter;
