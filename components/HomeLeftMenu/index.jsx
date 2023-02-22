import React, { useState } from "react";
import lbar from "../../Asstes/style/homeLeftmenu.module.css";
import profile from "../../Asstes/Images/profile.png";
import arrowUp2 from "../../Asstes/Images/arrowUp2.png";
import homeV from "../../Asstes/Images/homeV2.png";
import vedioV from "../../Asstes/Images/vedioV.png";
import com22 from "../../Asstes/Images/com22.png";
import fireV from "../../Asstes/Images/fireV.png";
import noti from "../../Asstes/Images/noti.png";
import explor from "../../Asstes/Images/explor.png";
import userV from "../../Asstes/Images/userV.png";
import msgV from "../../Asstes/Images/msgV.png";
import setV from "../../Asstes/Images/setV.png";
import addUser from "../../Asstes/Images/addUser.png";
import logout from "../../Asstes/Images/logout.png";
import Image from "next/image";
import CreatepostModal from "../CreatePostModal";
import { RiHomeLine } from "react-icons/ri";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { RiSendPlane2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { RiNotification4Line } from "react-icons/ri";
import Link from 'next/link'
import { useRouter } from "next/router";

const HomeLeftMenu = () => {
  const [lgShow, setLgShow] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [active, setActive] = useState(1);
  const router = useRouter();
  const pathName = router.pathname;

  function onClick() {
    setLgShow(!lgShow);
  }
  return (
    <>
      <div className={lbar.home_left_bar}>
      <Link href="/" className="cursor-pointer">
        <div className={lbar.left_bar_logo}>Scribbes</div>
        </Link>
        <div className={lbar.left_bar_content_box}>
          <div
            className={lbar.left_bar_profile}
            onClick={() => setIsLogout(!isLogout)}
          >
            <div className={lbar.left_bar_p}>
              <div>
                <Image src={profile} />
              </div>
              <div>
                <div className={lbar.profile_name}>John Doe</div>
                <div className={lbar.profile_email}>@JohnDoeuser</div>
                <div className={lbar.profile_folowers}>
                  190 Followers{" "}
                  <div className={lbar.profile_toggle}>
                    <Image src={arrowUp2} /> 256
                  </div>
                </div>
              </div>
            </div>
            {isLogout && (
              <div className={lbar.logout_toggle}>
                <div className={lbar.logut_user_p}>
                  <div>
                    <Image src={profile} />
                  </div>
                  <div className="hidden md:block">
                    <div className={lbar.profile_name}>John Doe</div>
                    <div className={lbar.profile_email}>@JohnDoeuser</div>
                  </div>
                </div>
                <div className={lbar.logout_add_acount}>
                  <div>
                    <Image src={addUser} />
                  </div>
                  <div className="hidden md:block">Add an existing account</div>
                </div>
                <div className={lbar.logout_sep}></div>
                <div className={lbar.logout}>
                  <div>
                    <Image src={logout} />
                  </div>
                  <div className="hidden md:block">Log out</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={lbar.menu_content_wrap}>
        <Link href="/">
          <div
            className={
              pathName == "/" ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => setActive(1)}
          >
            <div>
              <RiHomeLine
                className={pathName == "/" ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Home</div>
          </div>
          </Link>
          <Link href="/video-screen">
          <div
            className={
              pathName == "/video-screen" ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
     
          >
            <div>
              <AiOutlinePlayCircle
                className={    pathName == "/video-screen"? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Videos</div>
          </div>
          </Link>
          <Link href="/community-page">
          <div
            className={
              pathName == "/community-page"? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }

          >
            <div>
    
              <Image src={com22}  />
            </div>
            <div className="hidden md:block">Communities</div>
          </div>
          </Link>
          <Link href="/trending-screen">
          <div
            className={
              pathName == "/trending-screen"? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
  
          >
            <div>
              <AiOutlineFire
                className={
                  pathName == "/trending-screen"?  lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Trending</div>
          </div>
          </Link>
          <Link href="/notification">
          <div
            className={
              pathName == "/notification"?  lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }

          >
            <div>
              <RiNotification4Line
                className={
                  pathName == "/notification"? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Notifications</div>
          </div>
          </Link>
          <Link href="/explore-screen">
          <div
            className={
              pathName == "/explore-screen"? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
   
          >
            <div>
              <MdOutlineExplore
                className={
                  
                  pathName == "/explore-screen"? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Explore</div>
          </div>
          </Link>
      <Link href="/edit-profile">
           <div
            className={
              pathName == "/edit-profile"? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }

          >
            <div>
              <HiOutlineUser
                className={
                  pathName == "/edit-profile"? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Profile</div>
          </div></Link> 
          <Link href="/message">
          <div
            className={
              pathName == "/message"? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }

          >
            <div>
              <RiSendPlane2Line
                className={
                  pathName == "/message"?  lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:flex gap-[8px] items-center">Messages  {active == 8? <div className="flex h-[18px] w-[18px] bg-[#000580] justify-center items-center text-white rounded-[50%] text-xs">2</div>:""}</div>
          </div>
          </Link>
          <div
            className={
              active == 9 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => setActive(9)}
          >
            <div>
              <FiSettings
                className={active == 9 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Settings</div>
          </div>
        </div>
        <div className={lbar.post_btn_wrap} onClick={onClick}>
          <div className={lbar.post_btn}>Make a post</div>
        </div>
      </div>
      <div>
        <CreatepostModal state={lgShow} onClick={onClick} />
      </div>
    </>
  );
};

export default HomeLeftMenu;
