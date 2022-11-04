import React, { useState } from "react";
import pf from "../../Asstes/style/profile_folloers_center.module.css";
import Image from "next/image";
import vPost from "../../Asstes/Images/vPost.png";
import check from "../../Asstes/Images/check.png";
import FolllowBtn from "./folllowBtn";
const FollowersTile = () => {
  const followersArray = [
    {
      profile: vPost,
      name: "John Doe",
      email: "@Johndoe",
      follow: true,
      varify: false,
      des: "This is how a Bio in a profile will look like, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
    },
    {
      profile: vPost,
      name: "John Doe",
      email: "@Johndoe",
      follow: true,
      varify: false,
      des: "This is how a Bio in a profile will look like, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
    },
    {
      profile: vPost,
      name: "John Doe",
      email: "@Johndoe",
      follow: false,
      varify: true,
      des: "This is how a Bio in a profile will look like, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
    },
    {
      profile: vPost,
      name: "John Doe",
      email: "@Johndoe",
      follow: true,
      varify: false,
      des: "This is how a Bio in a profile will look like, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
    },
    {
      profile: vPost,
      name: "John Doe",
      email: "@Johndoe",
      follow: true,
      varify: false,
      des: "This is how a Bio in a profile will look like, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
    },
    {
      profile: vPost,
      name: "John Doe",
      email: "@Johndoe",
      follow: true,
      varify: false,
      des: "This is how a Bio in a profile will look like, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
    },
    {
      profile: vPost,
      name: "John Doe",
      email: "@Johndoe",
      follow: true,
      varify: false,
      des: "This is how a Bio in a profile will look like, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
    },
    {
      profile: vPost,
      name: "John Doe",
      email: "@Johndoe",
      follow: true,
      varify: false,
      des: "This is how a Bio in a profile will look like, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
    },
  ];

  return (
    <>
      <div className={pf.FollowersTile_wraper}>
        {followersArray.map((data) => {
          return (
            <>
              <div className={pf.FollowersTile_container}>
                <div className={pf.FollowersTile_inner_box}>
                  <div className={pf.foloers_tile_user}>
                    <div className={pf.folowers_tile_img}>
                      {data.varify && (
                        <div className={pf.check_img}>
                          <Image src={check} />
                        </div>
                      )}
                      <Image src={data.profile} />
                    </div>
                    <div className="font-DM font-normal text-xs">
                      {data.name}
                    </div>
                    <div className="font-DM font-bold text-xs">
                      {data.email}
                    </div>
                    {data.follow && (
                      <div className={pf.folow_you_tag}>Follows You</div>
                    )}
                  </div>
                  <div className={pf.tile_desc}>{data.des}</div>
                </div>
                <FolllowBtn />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FollowersTile;
