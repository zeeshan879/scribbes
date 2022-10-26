import React from "react";
import cp from "../../Asstes/style/comment_post.module.css";
import { BsArrowLeft } from "react-icons/bs";
import coomentP from "../../Asstes/Images/coomentP.png";
import arrowUp from "../../Asstes/Images/arrowUp.png";
import pcment from "../../Asstes/Images/pcment.png";
import comnt from "../../Asstes/Images/comnt.png";
import share from "../../Asstes/Images/share.png";
import vPost from "../../Asstes/Images/vPost.png";
import reply from "../../Asstes/Images/reply.png";
import profile from "../../Asstes/Images/profile.png";
import indicator from "../../Asstes/Images/indicator.png";
import indicator2 from "../../Asstes/Images/indicator2.png";
import Image from "next/image";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import PostOption from "../HomeCenterView/postOption";

const CommentPost = () => {
  return (
    <>
      <div className={HomCen.comment_post_header}>
        <div className="flex gap-[18px] items-center">
          {" "}
          <BsArrowLeft className="cursor-pointer" />
          Post
        </div>
        <div className="text-sm sm:text-[18px] pl-[40px] lg:pl-[48px] text-[#BCBCBC] font-normal">
          Mike Someone
        </div>
      </div>
      <div className={HomCen.post_comment_wrap}>
        <div className={HomCen.post_comment_box}>
          <div className={HomCen.post_comment_action}>
            <div className="flex gap-[14px] items-center pt-1">
              <div>
                <Image src={coomentP} />
              </div>
              <div>
                <div className="font-DM text-[16px] font-normal text-[#000580]">
                  Mike Someone
                </div>
                <div className="flex items-center font-bold text-black">
                  @Johndoe
                  <span className="text-[#BCBCBC]">. 2h ago</span>
                </div>
              </div>
            </div>
            <div>
              <PostOption />
            </div>
          </div>
          <div className={HomCen.post_comment_desc}>
            Walking during my trip to this hillstation and took this gem of a
            picture. Can’t believe I was able to take this. Spooky or brilliant?
            👻🤩
          </div>
          <div className="pt-[10px] lg:pt-[20px] ">
            <Image src={pcment} />
          </div>
          <div className={HomCen.post_comment_notification}>
            <div className={HomCen.post_noti_items}>
              <div className="cursor-pointer">
                <Image src={arrowUp} width="26px" height="14px" />
              </div>
              10
            </div>
            <div className={HomCen.post_noti_items}>
              <div className="cursor-pointer">
                <Image src={comnt} width="24px" height="21px" />
              </div>
              56
            </div>
            <div className={HomCen.post_noti_items}>
              <div className="cursor-pointer">
                <Image src={share} width="20px" height="20px" />
              </div>
              56
            </div>
          </div>
        </div>
      </div>
      <div className={HomCen.comment_ele_box}>
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex gap-[10px] md:gap-[23px] items-center w-[100%]">
            <Image src={profile} />
            <div className="w-[100%]">
              <input
                placeholder="Comment your thoughts"
                className={HomCen.comment_input}
              />
            </div>
          </div>
          <div className={HomCen.coment_post_btn}>Comment</div>
        </div>
      </div>

      <div className={HomCen.post_comments_container}>
        <div className={HomCen.comments_items}>
          <div className={HomCen.sub_comment_box}>
            <div className={HomCen.subComment_p_Img}>
              <div>
                <Image src={vPost} />
              </div>
              <div className={HomCen.coment_indicator}>
                <Image src={indicator} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className={HomCen.sub_comment_profile}>
                  Mike Someone
                  <span className="text-[#BCBCBC]">@Johndoe . 2h ago</span>
                </div>
                <div>
                  <PostOption />
                </div>
              </div>
              <div className="font-DM font-normal text-[16px] max-w-[775px]">
                This is how a post would like on the website, and it’s different
                from the template we normally use for the blog posts on this
                website. Either way thats how everything looks. Wow! 🔥🔥🔥
              </div>
              <div className={HomCen.sub_comment_notification}>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={arrowUp} />
                  </div>
                  10
                </div>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={comnt} />
                  </div>
                  56
                </div>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={share} />
                  </div>
                  56
                </div>
              </div>
            </div>
          </div>
          <div className={HomCen.sub_comment_box2}>
          <div className={HomCen.subComment_p_Img}>
            <div>
              <Image src={reply} />
            </div>
            <div className={HomCen.comnt_indicator2}>
              <Image src={indicator2} />
            </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className={HomCen.sub_comment_profile}>
                  Mike Someone
                  <span className="text-[#BCBCBC]">@Johndoe . 2h ago</span>
                </div>
                <div>
                  <PostOption />
                </div>
              </div>
              <div className="font-DM font-normal text-[16px] max-w-[760px]">
                This is how a post would like on the website, and it’s different
                from the template we normally use for the blog posts on this
                website. Either way thats how everything looks. Wow! 🔥🔥🔥
              </div>
              <div className={HomCen.sub_comment_notification}>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={arrowUp} />
                  </div>
                  <div className="min-h-[10px]">1</div>
                </div>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={comnt} />
                  </div>
                  <div className="min-h-[10px]">2</div>
                </div>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={share} />
                  </div>
                  <div className="min-h-[10px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className={HomCen.sub_comment_box3}>
            <div className="">
              <div>
                <Image src={coomentP} width="48px" height="48px" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center ">
                <div className={HomCen.sub_comment_profile}>
                  Mike Someone
                  <span className="text-[#BCBCBC]">@Johndoe . 2h ago</span>
                </div>
                <div>
                  <PostOption />
                </div>
              </div>
              <div className="font-DM font-normal text-[14px] lg:text-[16px] max-w-[760px]">
                This is how a post would like on the website, and it’s different
                from the template we normally use for the blog posts on this
                website. Either way thats how everything looks. Wow! 🔥🔥🔥
              </div>
              <div className={HomCen.sub_comment_notification}>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={arrowUp} />
                  </div>
                  <div className="min-h-[10px]">1</div>
                </div>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={comnt} />
                  </div>
                  <div className="min-h-[10px]">2</div>
                </div>
                <div className={HomCen.sub_noti_items}>
                  <div className="cursor-pointer">
                    <Image src={share} />
                  </div>
                  <div className="min-h-[10px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentPost;
