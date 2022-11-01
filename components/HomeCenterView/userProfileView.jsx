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
import PostNotification from "./postNotification";
import userProfile from "../../Asstes/Images/userProfile.png";
import check from "../../Asstes/Images/check.png";
import pointer from "../../Asstes/Images/pointer.png";
import calendar from "../../Asstes/Images/calendar.png";
import loc from "../../Asstes/Images/loc.png";
import mute from "../../Asstes/Images/mute.png";
import opt from "../../Asstes/Images/opt.png";
import tele from "../../Asstes/Images/tele.png";
import { BsArrowLeft } from "react-icons/bs";
import UserDescritipnPost from "./userDescritipnPost";
import PostOption from "./postOption";
import { useState } from "react";
import CreatepostModal from "../CreatePostModal";
import UserProfile from "./userProfileView";
import { FaTelegramPlane } from "react-icons/fa";
import { TiVolumeMute } from "react-icons/ti";
import { BsFillShareFill } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { MdBlockFlipped } from "react-icons/md";
import UserProfileTabs from "../HomeCenterView/userProfileTabs";
import UserBlockModal from "../UserProfile/blockModal"
import UserMuteModal from "../UserProfile/muteModal"
const UserProfileView = () => {
  const [activeTag, setActiveTag] = useState(1);
  const [lgShow, setLgShow] = useState(false);
  const [follow, setFollow] = useState(false);
  const [userOpt, setUserOpt] = useState(false);
  const [userBlock,setIsBlock]=useState(false)
  const [userMute,setIsMute]=useState(false)

  const handleUser=()=>{
      setIsBlock(!userBlock)
  }
  const handleMuteModal=()=>{
    setIsMute(!userMute)
  }

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
            <BsArrowLeft className="cursor-pointer" />
            Mike Someone
          </div>
          <div className="text-sm font-DM sm:text-[18px] pl-[40px] lg:pl-[48px] text-[#BCBCBC] font-normal">
            145 Posts
          </div>
        </div>
        <div className={HomCen.user_Profile_wrap}>
          <div className={HomCen.user_profile_box}>
            <div>
              <Image src={userProfile} />
            </div>
            <div className="w-[100%]">
              <div className={HomCen.user_profile_cotent}>
                <div>
                  <div className={HomCen.user_profile_name}>
                    Mike Someone
                    <Image src={check} />
                  </div>
                  <div className={HomCen.user_pro_email}>
                    @mikesomeoneuser{" "}
                    <div className={HomCen.user_p_folow}>Follows you</div>
                  </div>
                </div>
                <div className={HomCen.userProfile_action_box}>
                  {follow != true ? (
                    <div>
                      <Image src={pointer} />
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    className={HomCen.user_profile_option}
                    onClick={() => setUserOpt(!userOpt)}
                  >
                    <Image src={opt} />
                    {userOpt && (
                      <div className={HomCen.userP_opt_toggle}>
                        <div className={HomCen.userOpt_togle_items}>
                          <BsFillShareFill />
                          Share Profile
                        </div>
                        <div className={HomCen.userOpt_togle_items}>
                          <AiOutlineLink />
                          Copy Profile URL
                        </div>
                        <div className={HomCen.userOpt_togle_items} onClick={handleUser}>
                          <MdBlockFlipped />
                          Block @mikesomeoneuser
                  
                        </div>
                        <div className={HomCen.userOpt_togle_items} onClick={handleMuteModal}>
                          <TiVolumeMute />
                          Mute @mikesomeoneuser
                        </div>
                      </div>
                    )}
                  </div>
                  {follow && (
                    <div className={HomCen.user_profile_option}>
                      <FaTelegramPlane className="text-[#1CAC19] text-xl mt-[2px]" />
                    </div>
                  )}
                  <div
                    className={
                      follow == true
                        ? HomCen.user_p_following_btn
                        : HomCen.user_p_follow_btn
                    }
                    onClick={() => setFollow(!follow)}
                  >
                    {follow == true ? "Following" : "Follow"}
                  </div>
                </div>
              </div>
              <div className={HomCen.userProfile_location}>
                <div
                  className="flex gap-[13px] font-DM font-normal text-[20px] text-[#BCBCBC] items-center
            "
                >
                  <Image src={loc} />
                  USA
                </div>
                <div
                  className="flex gap-[4px] font-DM font-normal text-[20px] text-[#BCBCBC] items-center
            "
                >
                  <Image src={calendar} /> Joined January 2022
                </div>
              </div>
              <div className={HomCen.userProfile_folowers}>
                <div className={HomCen.userProfile_f_items}>
                  1728{" "}
                  <span className="font-normal text-[#BCBCBC]">Followers</span>
                </div>
                <div className={HomCen.userProfile_f_items}>
                  3567{" "}
                  <span className="font-normal text-[#BCBCBC]">Following</span>
                </div>
                <div className={HomCen.userProfile_f_items}>
                  156{" "}
                  <span className="font-normal text-[#BCBCBC]">
                    Communities
                  </span>
                </div>
              </div>
              <div className={HomCen.userProfile_dec}>
                This is my bio. This where you find about me and my Communities
                in life.⚽ Love Soccer and travelling
              </div>
              <div>
                <UserProfileTabs />
              </div>
            </div>
          </div>
        </div>

        <div className={HomCen.post_wraper}>
          <div className={HomCen.text_post_wraper}>
            <div className={HomCen.post_action}>
              <div className={HomCen.post_action_icon}>
                <PostOption />
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
                <PostNotification />
              </div>
            </div>
          </div>
          <div>
            <UserDescritipnPost />
          </div>
        </div>
      </div>
      <div>
        <CreatepostModal state={lgShow} onClick={onClick} />
      </div>
      <UserBlockModal state={userBlock}  onClick={handleUser} />
      <UserMuteModal state={userMute}  onClick={handleMuteModal}/>
    </>
  );
};

export default UserProfileView;
