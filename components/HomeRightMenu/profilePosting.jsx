import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import tom from "../../Asstes/Images/tom.png";
import postP from "../../Asstes/Images/postP.png";
import john from "../../Asstes/Images/john.png";
import michle from "../../Asstes/Images/michle.png";
import add from "../../Asstes/Images/add.png";
import vedioTile from "../../Asstes/Images/vedioTile.png";
import vedioProfile from "../../Asstes/Images/vedioProfile.png";
import vedioTag from "../../Asstes/Images/vedioTag.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const ProfilePosting = () => {
  const trendingArray = [
    {
      icon: tom,
      title: "Tom Someone",
      folowers: "3.6k Followers",
    },
    {
      icon: postP,
      title: "Matt Person",
      folowers: "3.6k Followers",
    },
    {
      icon: john,
      title: "John Doe",
      folowers: "3.6k Followers",
    },
    {
      icon: michle,
      title: "Michael User",
      folowers: "3.6k Followers",
    },
  ];
  return (
    <>
      <div className={rbar.trending_interst_wrap}>
        <div className={rbar.trending_heading}>
        Profiles posting great videos
        </div>
        <div className={rbar.trending_box_wrap}>
          {trendingArray.map((data) => {
            return (
              <>
                <div className={rbar.trending_tile_wrap}>
                  <div className={rbar.trendinf_tile_info}>
                    <div>
                      <Image src={data.icon} className={rbar.trending_images} />
                    </div>
                    <div>
                      <div className={rbar._trending_tile_head}>
                        {data.title}
                      </div>
              
                    </div>
                  </div>
                  <div className={rbar.posting_follow_btn}>
                  Follow
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProfilePosting;
