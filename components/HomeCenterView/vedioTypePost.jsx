import React from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import postAction from "../../Asstes/Images/postAction.png";
import postWeb from "../../Asstes/Images/postWeb.png";
import Image from "next/image";
import profile from "../../Asstes/Images/profile.png";
import postP from "../../Asstes/Images/postP.png";
import pikacho from "../../Asstes/Images/pikacho.png";
import play from "../../Asstes/Images/play.png";
import updateImage from "../../Asstes/Images/updateImage.png";
import likes from "../../Asstes/Images/likes.png";
import cardImage from "../../Asstes/Images/cardImage.png";
import vPost from "../../Asstes/Images/vPost.png";
import timg from "../../Asstes/Images/timg.png";
import timage1 from "../../Asstes/Images/timage1.png";
import timage2 from "../../Asstes/Images/timage2.png";
import PostNotification from "../HomeCenterView/postNotification";
import PostOption from "../HomeCenterView/postOption"
import Link from "next/link";

const VedioTypePost = (props) => {
  return (
<>
<div className={HomCen.description_post_wrap}>
           { props?.check  &&        <div className={HomCen.post_action}>
            <div className={HomCen.post_action_icon}>
      <PostOption/>
            </div>
          </div>}
          <div className={HomCen.desc_pots_wrap}>
            <div className={HomCen.post_descition_wrap}>
            <Link href="/user-profile">
            <div className={HomCen.post_profile}>
                <Image src={vPost} />
              </div>
              </Link>
              <div className={HomCen.post_des_box}>
              <div className={HomCen.des_post_userName}>John Doe</div>
              <div className={HomCen.des_post_userEmal}>@@Johndoe</div>
              <div className={HomCen.des_post_time}>2d</div>
              </div>
          
            </div>
            <div className={HomCen.des_post_box}>
              <div>
                <div className={HomCen.des_post_text}>
				Look at this amazing video of a man trying VR for the first time! This is elite
entertainment, man. I am typing random things to just show you how a post
with video looks like. #video #tech
                </div>
                <div className={HomCen.vedio_imagge_update}>
              <div className={HomCen.vedio_post_like}>
				<Image src={likes} />
			  </div>
			  <div className={HomCen.vedio_post_ply_btn}>
				<Image src={play} />
			  </div>
                </div>
              </div>
              <div>
                <PostNotification showValue={true}  />
              </div>
            </div>
          </div>
		  {/*....................*/}
		  <div className={HomCen.description_post_wrap}>
               { props?.check  &&        <div className={HomCen.post_action}>
            <div className={HomCen.post_action_icon}>
      <PostOption/>
            </div>
          </div>}
          <div className={HomCen.desc_pots_wrap}>
            <div className={HomCen.post_descition_wrap}>
            <div className={HomCen.post_profile}>
                <Image src={vPost} />
              </div>
              <div className={HomCen.post_des_box}>
              <div className={HomCen.des_post_userName}>John Doe</div>
              <div className={HomCen.des_post_userEmal}>@@Johndoe</div>
              <div className={HomCen.des_post_time}>2d</div>
              </div>
          
            </div>
            <div className={HomCen.des_post_box}>
              <div>
                <div className={HomCen.des_post_text}>
				Look at this amazing video of a man trying VR for the first time! This is elite
entertainment, man. I am typing random things to just show you how a post
with video looks like. #video #tech
                </div>
                <div className={HomCen.vedio_imagge_cake}>
              <div className={HomCen.vedio_post_like}>
				<Image src={likes} />
			  </div>
			  <div className={HomCen.vedio_post_ply_btn}>
				<Image src={play} />
			  </div>
                </div>
              </div>
              <div>
                <PostNotification showValue={true}  />
              </div>
            </div>
          </div>
        </div>
        </div>


</>
  )
}

export default VedioTypePost