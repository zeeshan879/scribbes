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
import PostNotification from "../HomeCenterView/postNotification"
import HomeTabsSection from "../HomeCenterView/HomeTabsSection";
import UserDescritipnPost from "../HomeCenterView/userDescritipnPost"
const HomeCenterView = () => {
  return (
    <>
      <div className="border-r-[2px] border-[#BCBCBC]">
        <div className="pt-[16px] pb-[20px] pl-[17px]  pr-[17px] border-b-[2px] border-[#BCBCBC]">
          <div className="w-[999px] h-[199px] bg-white shadow-profile rounded-[30px]">
            <div className="pt-[35px] pl-[41px] pr-[41px]   flex items-center gap-[23px]">
              <div>
                <Image src={profile} />
              </div>
              <div className="font-DM font-normal text-[20px] text-[#BCBCBC]">
                Share your thoughts...
              </div>
            </div>
            <div className="mt-[25px] ml-[44px] mr-[41px] border-b-[2px] border-[#BCBCBC]"></div>
            <div className="pt-[19px] w-[100%] pl-[128px] pr-[41px] flex justify-between items-center">
              <div className="flex gap-[16px] items-center">
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
              <div className="h-[39px] w-[144px] rounded-[41px] flex justify-center cursor-pointer items-center bg-action text-white">
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
                <Image src={postAction} />
              </div>
            </div>
            <div className={HomCen.only_text_pots}>
              <div className={HomCen.text_post_inner}>
                <div>
                  <Image src={postP} />
                </div>
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
                    <div className={HomCen.text_post_time}>
                      Today at 1:30 PM
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <PostNotification/>
              </div>
            </div>
          </div>
         <div >
         <UserDescritipnPost/>
         </div>

        </div>
      </div>
    </>
  );
};

export default HomeCenterView;
