import React from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import { BsArrowLeft } from "react-icons/bs";
import UserDescritipnPost from "./userDescritipnPost";
import { useState } from "react";
import CreatepostModal from "../CreatePostModal";
import UserProfileSection2 from "../UserProfile/userProfileSection";
import BlogPost from "../HomeCenterView/blogPost";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
const UserProfileView = () => {
  const [activeTag, setActiveTag] = useState(1);
  const [lgShow, setLgShow] = useState(false);
  const activePageTab = useSelector(
    (state) => state.allGernalFunction.activePageTab
  );
  const router = useRouter();
  function onClick() {
    setLgShow(!lgShow);
    console.log("parent true", lgShow);
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
        <UserProfileSection2 />
        {activePageTab == 1 ? (
          <div className={HomCen.post_wraper}>
            <div className={HomCen.text_post_wraper}>
              <BlogPost />
            </div>
            <div>
              <UserDescritipnPost check={false} />
            </div>
          </div>
        ) : activePageTab == 2 ? (
          <div className={HomCen.post_wraper}>
            <div className={HomCen.text_post_wraper}>
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
            </div>
          </div>
        ) :activePageTab===3? 
          <div className={HomCen.post_wraper}>
          <div className={HomCen.text_post_wraper}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
        </div>:""
        }
      </div>
      <div>
        <CreatepostModal state={lgShow} onClick={onClick} />
      </div>
    </>
  );
};

export default UserProfileView;
