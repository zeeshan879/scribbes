import React from "react";
import ct from "../../Asstes/style/community_titles_views.module.css";
import postP from "../../Asstes/Images/postP.png";
import Image from "next/image";
import PostNotification from "../HomeCenterView/postNotification";

const ComunityPostSec = () => {
  return (
    <>
      <div className={ct.post_wraper}>
        <div className={ct.post_div}>
          <div className={ct.profile_box}>
            <Image src={postP} />
            <div className="text-xs font-normal font-DM w-[60px]">Tom Brady</div>
          </div>
          <div className="flex gap-[33px] ">
            <div className={ct.postBg}>
              <div className={ct.post_content}>
                <div className="font-medium font-DM text-base text-white">
                  How to get started with NFT’s?
                </div>
                <div className="pt-[3px] text-xs font-DM font-normal text-white ">
                  Tom Brady
                </div>
              </div>
            </div>
            <div>
              <PostNotification showValue={true} />
            </div>
          </div>
        </div>
		<div className={ct.post_div}>
          <div className={ct.profile_box}>
            <Image src={postP} />
            <div className="text-xs font-normal font-DM">Tom Brady</div>
          </div>
          <div className="flex gap-[33px] w-[100%]">
            <div className={ct.postBg2}>
              <div className={ct.post_content}>
                <div className="font-medium font-DM text-base text-white">
                  How to get started with NFT’s?
                </div>
                <div className="pt-[3px] text-xs font-DM font-normal text-white">
                  Tom Brady
                </div>
              </div>
            </div>
            <div>
              <PostNotification showValue={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComunityPostSec;
