import React, { useState } from "react";
import lbar from "../../Asstes/style/homeLeftmenu.module.css";
import profile from "../../Asstes/Images/profile.png";
import arrowUp from "../../Asstes/Images/arrowUp.png";
import homeV from "../../Asstes/Images/homeV.png";
import vedioV from "../../Asstes/Images/vedioV.png";
import com from "../../Asstes/Images/com.png";
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

const HomeLeftMenu = () => {
  const [lgShow, setLgShow] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [active, setActive] = useState(1);

  function onClick() {
    setLgShow(!lgShow);
  }
  return (
    <>
      <div className={lbar.home_left_bar}>
        <div className={lbar.left_bar_logo}>Scribbes</div>
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
                    <Image src={arrowUp} /> 256
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
              active == 1 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => setActive(1)}
          >
            <div>
              <RiHomeLine
                className={active == 1 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Home</div>
          </div>
          </Link>
          <div
            className={
              active == 2 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => setActive(2)}
          >
            <div>
              <AiOutlinePlayCircle
                className={active == 2 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Videos</div>
          </div>
          <Link href="/community-page">
          <div
            className={
              active == 3 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => setActive(3)}
          >
            <div>
              <Image src={com} />
            </div>
            <div className="hidden md:block">Communities</div>
          </div>
          </Link>
          <div
            className={
              active == 4 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => setActive(4)}
          >
            <div>
              <AiOutlineFire
                className={active == 4 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Trending</div>
          </div>
          <Link href="/notification">
          <div
            className={
              active == 5 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => setActive(5)}
          >
            <div>
              <RiNotification4Line
                className={active == 5 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Notifications</div>
          </div>
          </Link>
          <Link href="/explore-screen">
          <div
            className={
              active == 6 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => setActive(6)}
          >
            <div>
              <MdOutlineExplore
                className={active == 6 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Explore</div>
          </div>
          </Link>
      <Link href="/edit-profile">
           <div
            className={
              active == 7 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => setActive(7)}
          >
            <div>
              <HiOutlineUser
                className={active == 7 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Profile</div>
          </div></Link> 
          <Link href="/message">
          <div
            className={
              active == 8 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => setActive(8)}
          >
            <div>
              <RiSendPlane2Line
                className={active == 8 ? lbar.menu_icon_active : lbar.menu_icon}
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
