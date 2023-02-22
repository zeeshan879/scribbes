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
import userProfile from "../../Asstes/Images/userProfile.png";
import check from "../../Asstes/Images/check.png";
import pointer from "../../Asstes/Images/pointer.png";
import calendar from "../../Asstes/Images/calendar.png";
import loc from "../../Asstes/Images/loc.png";
import mute from "../../Asstes/Images/mute.png";
import opt from "../../Asstes/Images/opt.png";
import tele from "../../Asstes/Images/tele.png";
import { BsArrowLeft } from "react-icons/bs";
import UserDescritipnPost from "../HomeCenterView/userDescritipnPost";
import PostOption from "../HomeCenterView/postOption";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { TiVolumeMute } from "react-icons/ti";
import { BsFillshareFill } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { MdBlockFlipped } from "react-icons/md";
import UserProfileTabs from "../HomeCenterView/userProfileTabs";
import UserBlockModal from "./blockModal";
import UserMuteModal from "../UserProfile/muteModal";
import EditProfileModal from "../EdfitProfile/editProfileModal";
import Link from "next/link";

const UserProfileSection2 = (props) => {
  const [follow, setFollow] = useState(false);
  const [userOpt, setUserOpt] = useState(false);
  const [userBlock, setIsBlock] = useState(false);
  const [userMute, setIsMute] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  function editProfile() {
    setLgShow(!lgShow);
    console.log("parent true", lgShow);
  }

  const handleUser = () => {
    setIsBlock(!userBlock);
  };
  const handleMuteModal = () => {
    setIsMute(!userMute);
  };
  return (
    <>
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

              {props.state != true ? (
                <div className={HomCen.userProfile_action_box}>
                  {follow != true ? (
                    <div className={HomCen.user_p_pointer}>
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
                          <BsFillshareFill />
                          share Profile
                        </div>
                        <div className={HomCen.userOpt_togle_items}>
                          <AiOutlineLink />
                          Copy Profile URL
                        </div>
                        <div
                          className={HomCen.userOpt_togle_items}
                          onClick={handleUser}
                        >
                          <MdBlockFlipped />
                          Block @mikesomeoneuser
                        </div>
                        <div
                          className={HomCen.userOpt_togle_items}
                          onClick={handleMuteModal}
                        >
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
              ) : (
                ""
              )}
              {props.state && (
                <div
                  className={HomCen.user_p_following_btn}
                  onClick={editProfile}
                >
                  Edit Profile
                </div>
              )}
            </div>
            <div className={HomCen.userProfile_location}>
              <div
                className={HomCen.profie_loc_info}
              >
                <Image src={loc} />
                USA
              </div>
              <div
                className={HomCen.profie_loc_clnder}
              >
                <Image src={calendar} /> Joined January 2022
              </div>
            </div>
            <div className={HomCen.userProfile_folowers}>
              <Link href="/profile-followers">
                <div className={HomCen.userProfile_f_items}>
                  1728{" "}
                  <span className="font-normal text-[#BCBCBC]">Followers</span>
                </div>
              </Link>
              <Link href="/profile-followers">
                <div className={HomCen.userProfile_f_items}>
                  3567{" "}
                  <span className="font-normal text-[#BCBCBC]">Following</span>
                </div>
              </Link>
              <div className={HomCen.userProfile_f_items}>
                156{" "}
                <span className="font-normal text-[#BCBCBC]">Communities</span>
              </div>
            </div>
            <div className={HomCen.userProfile_dec}>
              This is my bio. This where you find about me and my Communities in
              life.⚽ Love Soccer and travelling
            </div>
            <div>
              <UserProfileTabs />
            </div>
          </div>
        </div>
      </div>
      <UserBlockModal state={userBlock} onClick={handleUser} />
      <UserMuteModal state={userMute} onClick={handleMuteModal} />
      <EditProfileModal state={lgShow} onClick={editProfile} />
    </>
  );
};

export default UserProfileSection2;
