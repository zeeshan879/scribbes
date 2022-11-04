import React from "react";
import postP from "../../Asstes/Images/postP.png";
import PostNotification from "../HomeCenterView/postNotification";
import postWeb from "../../Asstes/Images/postWeb.png";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogPost = () => {
  return (
    <>
      <div className={HomCen.only_text_pots}>
        <div className={HomCen.text_post_inner}>
          <Link href="/user-profile">
            <div className="cursor-pointer">
              <Image src={postP} />
            </div>
          </Link>
          <div>
            <div className={HomCen.text_post_heading}>
              How to get started with NFT’s?
            </div>
            <div className={HomCen.text_post_user_info}>
              <div className={HomCen.Text_user_info}>
                <div className={HomCen.text_post_userName}>Tom Brady</div>
                <div className={HomCen.text_post_userEmal}>@tombrady</div>
                <div className={HomCen.text_web3_btn}>
                  <Image src={postWeb} />
                  WEB 3.0
                </div>
              </div>
              <div className={HomCen.text_post_time}>Today at 1:30 PM</div>
            </div>
          </div>
        </div>
        <div>
          <PostNotification />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
