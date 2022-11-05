import React from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import { BsArrowLeft } from "react-icons/bs";
import UserDescritipnPost from "../HomeCenterView/userDescritipnPost";
import { useState } from "react";
import CreatepostModal from "../CreatePostModal";
import UserProfileSection2 from "../UserProfile/userProfileSection";
import BlogPost from "../HomeCenterView/blogPost";
import EditProfileModal from "./editProfileModal";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
const EditProfilecenter = () => {
  const [activeTag, setActiveTag] = useState(1);
  const [lgShow, setLgShow] = useState(false);
  const router = useRouter();
  const activePageTab = useSelector(
    (state) => state.allGernalFunction.activePageTab
  );
  function onClick() {
    setLgShow(!lgShow);
  }
  return (
    <>
      <div className={HomCen.main_container}>
        <div className={HomCen.comment_post_header}>
          <div className="flex font-grotesk gap-[18px] items-center">
            {" "}
            <BsArrowLeft
              className="cursor-pointer"
              onClick={() => router.back()}
            />
            Mike Someone
          </div>
          <div className="text-sm font-DM sm:text-[18px] pl-[40px] lg:pl-[48px] text-[#BCBCBC] font-normal">
            145 Posts
          </div>
        </div>
        <UserProfileSection2 state={true} />
        {activePageTab === 1 ? (
          <div className={HomCen.edit_profile_post_wraper}>
            <div className={HomCen.text_post_wraper}>
              <BlogPost />
            </div>
            <div>
              <UserDescritipnPost check={false} />
            </div>
          </div>
        ) : activePageTab == 2 ? (
          <div className={HomCen.edit_profile_post_wraper}>
          <div className={HomCen.text_post_wraper}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
          </div>
        ) : activePageTab == 3 ? (
          <div className={HomCen.edit_profile_post_wraper}>
          <div className={HomCen.text_post_wraper}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default EditProfilecenter;
