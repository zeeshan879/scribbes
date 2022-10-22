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

const UserDescritipnPost = () => {
  return (
    <>
      <div className={HomCen.post_type_container}>
        {/*<======== Post Type => description=======>*/}
        <div className={HomCen.description_post_wrap}>
          <div className={HomCen.post_action}>
            <div className={HomCen.post_action_icon}>
              <Image src={postAction} />
            </div>
          </div>
          <div className={HomCen.desc_pots_wrap}>
            <div className={HomCen.post_descition_wrap}>
              <div className={HomCen.post_profile}>
                <Image src={profile} />
              </div>
     <div className={HomCen.post_des_box}>
     <div className={HomCen.des_post_userName}>Tom Brady</div>
              <div className={HomCen.des_post_userEmal}>@tombrady</div>
              <div className={HomCen.des_post_time}>Today at 1:30 PM</div>
              <div className={HomCen.desc_follow_btn}>+ Follow</div>
     </div>
            </div>
            <div className={HomCen.des_post_box}>
              <div>
                <div className={HomCen.des_post_text}>
                  This is how a post would like on the website, and it’s
                  different from the template we normally use for the blog posts
                  on this website. Either way thats how everything looks. Wow!
                  🔥🔥🔥
                </div>
                <div className={HomCen.des_micro_btn}>
                  <Image src={postWeb} />
                  MicroSaaS
                </div>
              </div>
              <div>
                <PostNotification />
              </div>
            </div>
          </div>
        </div>
        {/*<======== Post Type => Image=======>*/}
        <div className={HomCen.description_post_wrap}>
          <div className={HomCen.post_action}>
            <div className={HomCen.post_action_icon}>
              <Image src={postAction} />
            </div>
          </div>
          <div className={HomCen.desc_pots_wrap}>
            <div className={HomCen.post_descition_wrap}>
            <div className={HomCen.post_profile}>
                <Image src={postP} />
              </div>
              <div className={HomCen.post_des_box}>
              <div className={HomCen.des_post_userName}>Tom Brady</div>
              <div className={HomCen.des_post_userEmal}>@tombrady</div>
              <div className={HomCen.des_post_time}>Today at 1:30 PM</div>
              <div className={HomCen.desc_follow_btn}>+ Follow</div>
              </div>
            </div>
            <div className={HomCen.des_post_box}>
              <div>
                <div className={HomCen.des_post_text}>
                  How to get started with NFT’s?
                </div>
                <div className={HomCen.post_imagge}>
                  <Image src={pikacho}  />
                </div>
              </div>
              <div className={HomCen.img_noti_wrap}>
                <PostNotification />
              </div>
            </div>
          </div>
        </div>
		      {/*<======== Post Type => description=======>*/}
			  <div className={HomCen.description_post_wrap}>
          <div className={HomCen.post_action}>
            <div className={HomCen.post_action_icon}>
              <Image src={postAction} />
            </div>
          </div>
          <div className={HomCen.desc_pots_wrap}>
            <div className={HomCen.post_descition_wrap}>
            <div className={HomCen.post_profile}>
                <Image src={profile} />
              </div>
              <div className={HomCen.post_des_box}>
              <div className={HomCen.des_post_userName}>Tom Brady</div>
              <div className={HomCen.des_post_userEmal}>@tombrady</div>
              <div className={HomCen.des_post_time}>Today at 1:30 PM</div>
              </div>
       
            </div>
            <div className={HomCen.des_post_box}>
              <div>
                <div className={HomCen.des_post_text}>
                  This is how a post would like on the website, and it’s
                  different from the template we normally use for the blog posts
                  on this website. Either way thats how everything looks. Wow!
                  🔥🔥🔥
                </div>
                <div className={HomCen.des_micro_btn}>
                  <Image src={postWeb} />
                  MicroSaaS
                </div>
              </div>
              <div>
                <PostNotification />
              </div>
            </div>
          </div>
        </div>
		     {/*<======== Post Type => Image=======>*/}
			 <div className={HomCen.description_post_wrap}>
          <div className={HomCen.post_action}>
            <div className={HomCen.post_action_icon}>
              <Image src={postAction} />
            </div>
          </div>
          <div className={HomCen.desc_pots_wrap}>
            <div className={HomCen.post_descition_wrap}>
            <div className={HomCen.post_profile}>
                <Image src={postP} />
              </div>
              <div className={HomCen.post_des_box}>
              <div className={HomCen.des_post_userName}>Tom Brady</div>
              <div className={HomCen.des_post_userEmal}>@tombrady</div>
              <div className={HomCen.des_post_time}>Today at 1:30 PM</div>
              <div className={HomCen.desc_follow_btn}>+ Follow</div>
              </div>
            </div>
            <div className={HomCen.des_post_box}>
              <div>
                <div className={HomCen.update_post_text}>
				Updated his profile picture.
                </div>
                <div className={HomCen.post_imagge_update}>
                  <Image src={updateImage}  />
                </div>
              </div>
              <div>
                <PostNotification />
              </div>
            </div>
          </div>
        </div>
				     {/*<======== Post Type => Vedio=======>*/}
					 <div className={HomCen.description_post_wrap}>
          <div className={HomCen.post_action}>
            <div className={HomCen.post_action_icon}>
              <Image src={postAction} />
            </div>
          </div>
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
                <PostNotification />
              </div>
            </div>
          </div>
        </div>
						     {/*<======== Post Type => Vedio cake=======>*/}
							 <div className={HomCen.description_post_wrap}>
          <div className={HomCen.post_action}>
            <div className={HomCen.post_action_icon}>
              <Image src={postAction} />
            </div>
          </div>
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
                <PostNotification />
              </div>
            </div>
          </div>
        </div>
								     {/*<======== Post Type => card=======>*/}
									 <div className={HomCen.description_post_wrap}>
          <div className={HomCen.post_action}>
            <div className={HomCen.post_action_icon}>
              <Image src={postAction} />
            </div>
          </div>
          <div className={HomCen.desc_pots_wrap}>
            <div className={HomCen.post_descition_wrap}>
            <div className={HomCen.post_profile}>
                <Image src={profile} />
              </div>
              <div className={HomCen.post_des_box}>
              <div className={HomCen.des_post_userName}>John Doe</div>
              <div className={HomCen.des_post_userEmal}>@@Johndoe</div>
              <div className={HomCen.des_post_time}>Today at 1:30 PM</div>
              </div>
          
            </div>
            <div className={HomCen.des_post_box}>
              <div>
                <div className={HomCen.des_post_text}>
				This is really sad to read guys, When will there be solid action against such goons? I cant beleive all of this happening in our country.
                </div>
				<div className={HomCen.card_post_wrap} >
					<div>
						<Image src={cardImage} />
					</div>
					<div>
						<div className={HomCen.post_Card_text}>Area left to rot months after Govt promised a new $10m development package</div>
						<div className={HomCen.card_email}>www.supernewz.com</div>
					</div>
				</div>
 
              </div>
              <div>
                <PostNotification />
              </div>
            </div>
          </div>
        </div>
										     {/*<======== Post Type => multi image=======>*/}
<div className={HomCen.description_post_wrap}>
          <div className={HomCen.post_action}>
            <div className={HomCen.post_action_icon}>
              <Image src={postAction} />
            </div>
          </div>
          <div className={HomCen.desc_pots_wrap}>
            <div className={HomCen.post_descition_wrap}>
            <div className={HomCen.post_profile}>
                <Image src={postP} />
              </div>
              <div className={HomCen.post_des_box}>
              <div className={HomCen.des_post_userName}>John Doe</div>
              <div className={HomCen.des_post_userEmal}>@@Johndoe</div>
              <div className={HomCen.des_post_time}>Today at 1:30 PM</div>
              </div>
          
            </div>
            <div className={HomCen.des_post_box}>
              <div>
                <div className={HomCen.des_post_text}>
				How to get started with NFT’s?
                </div>
				<div className={HomCen.multiImage_wrap}>
					<div>
					<Image src={timg} />
					</div>
					<div>
					<Image src={timage1} />
					</div>
					<div>
					<Image src={timage2} />
					</div>
					<div className={HomCen.thunbnail_last_image}>
			
					</div>
				</div>

			
 
              </div>
              <div>
                <PostNotification />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDescritipnPost;
