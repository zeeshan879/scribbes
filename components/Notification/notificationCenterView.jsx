import React from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import notiUser from "../../Asstes/Images/notiUser.png";
import notiUsr from "../../Asstes/Images/notiUsr.png";
import notiarrowUp from "../../Asstes/Images/notiarrowUp.png";
import grl from "../../Asstes/Images/grl.png";
import coomentP from "../../Asstes/Images/coomentP.png";
import notiImage from "../../Asstes/Images/notiImage.png";
import postWeb1 from "../../Asstes/Images/postWeb1.png";
import Image from "next/image";
import PostOption from "../HomeCenterView/postOption";
import PostNotification from "../HomeCenterView/postNotification";
const NotificationCenterView = () => {
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
            Notifications
          </div>
        </div>
        <div className={HomCen.notification_wraper}>
          <div className="flex justify-end">
            <PostOption />
          </div>
          <div className={HomCen.notification_profile_box}>
            <div className="flex  gap-[22px]">
              <div className={HomCen.noti_profile_dim}>
                <Image src={notiUser} />
              </div>
              <div className={HomCen.noti_profile_dim}>
                <Image src={notiUsr} />
              </div>
            </div>
            <div className={HomCen.noti_info}>
              Jimmy McGill{" "}
              <span className="text-[#BCBCBC]">(@saulgoodman)</span> followed
              you.
            </div>
          </div>
        </div>
        <div className={HomCen.notification_wraper}>
          <div className={HomCen.notification_profile_box}>
            <div className="flex items-center gap-[19px]">
              <div className={HomCen.noti_profile_dim}>
                <Image src={notiUsr} />
              </div>
              <div className={HomCen.noti_info2}>
                Jimmy McGill{" "}
                <span className="text-[#BCBCBC]">(@saulgoodman)</span> followed
                you.
              </div>
            </div>
          </div>
          <div className={HomCen.noti_desc_box}>
            <div className={HomCen.noti_box1}>
              <div className={HomCen.noti_box_text}>
                You have made a great point but not many will understand. But
                still lets wait for the final results. More power to you 👊{" "}
              </div>
              <div>
                <PostNotification showValue={false} />
              </div>
            </div>
          </div>
        </div>
        <div className={HomCen.notification_wraper}>
          <div className={HomCen.notification_profile_box}>
            <div className="flex  gap-[22px]">
            <div className={HomCen.noti_profile_dim}>
                <Image src={notiarrowUp} />
              </div>
              <div className="flex gap-[10px]">
                <div className={HomCen.noti_profile_dim}>
                  <Image src={notiUsr} />
                </div>
                <div className={HomCen.noti_profile_dim}>
                  <Image src={grl} />
                </div>
                <div className={HomCen.noti_profile_dim}>
                  <Image src={coomentP} />
                </div>
              </div>
            </div>
            <div className={HomCen.noti_info}>
              <span className="font-bold"> Jimmy McGill</span> and 3 others have
              liked your <span className="font-bold">post </span>
            </div>
            <div className={HomCen.noti_desc_smallBox}>
              <div >
                <Image src={notiImage} />
              </div>
              <div>
                This is how a post would like on the website, and it’s different
                from the template we normally use for the blog posts on this
                website. Either way thats how everything looks. Wow! 🔥🔥🔥
              </div>
            </div>
          </div>
        </div>
        <div className={HomCen.notification_wraper}>
          <div className={HomCen.notification_profile_box}>
            <div className="flex items-center gap-[10px] md:gap-[19px]">
              <div>
                <Image src={notiUsr} />
              </div>
              <div className="flex items-center gap-[10px]">
                <div className={HomCen.noti_info2}>
                  Jimmy McGill{" "}
                  <span className="text-[#BCBCBC]">(@saulgoodman)</span> posted
                  to
                </div>
              </div>
              <div className={HomCen.noti_web3_btn}>
                <Image src={postWeb1} />
                WEB 3.0
              </div>
            </div>
          </div>

          <div className={HomCen.noti_desc_box}>
            <div className={HomCen.seFullPost_box}>
              <div className={HomCen.noti_box_text}>
                Annoucing the first annual CODING COMPETITION 2022. All you web
                3.0 enthusiasts join us.
                <br />
                <br />
                📍22 Some Block, Fairfax Ave, LA.
                <br />
                🕛 10:00am
              </div>
              <div>
                <PostNotification showValue={false} />
              </div>
            </div>
            <div className="flex justify-center">
              <div className={HomCen.seeFullPost}>See full post</div>
            </div>
          </div>
        </div>
        <div className={HomCen.notification_wraper}>
          <div className={HomCen.notification_profile_box}>
            <div className="flex items-center gap-[19px]">
              <div>
                <Image src={notiUsr} />
              </div>
              <div className={HomCen.noti_info2}>
                Jimmy McGill{" "}
                <span className="text-[#BCBCBC]">(@saulgoodman)</span> followed
                you.
              </div>
            </div>
          </div>
          <div className={HomCen.noti_desc_box}>
          <div className={HomCen.seFullPost_box}>
              <div className={HomCen.noti_box_text}>
                You have made a great point but not many will understand. But
                still lets wait for the final results. More power to you 👊{" "}
              </div>
              <div>
                <PostNotification showValue={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationCenterView;
