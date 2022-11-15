import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import fit from "../../Asstes/Images/fit.png";
import lea from "../../Asstes/Images/lea.png";
import food from "../../Asstes/Images/food.png";
import car from "../../Asstes/Images/car.png";
import add from "../../Asstes/Images/add.png";
import vedioTile from "../../Asstes/Images/vedioTile.png";
import vedioProfile from "../../Asstes/Images/vedioProfile.png";
import vedioTag from "../../Asstes/Images/vedioTag.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const MostFollowedCommunity = () => {
  const trendingArray = [
    {
      icon: fit,
      title: "Fitness",
      folowers: "3.6k Followers",
    },
    {
      icon: fit,
      title: "Premier League",
      folowers: "3.6k Followers",
    },
    {
      icon: fit,
      title: "Internet Foodies",
      folowers: "3.6k Followers",
    },
    {
      icon: fit,
      title: "Vintage Cars",
      folowers: "3.6k Followers",
    },
  ];
  return (
    <>
      <div className={rbar.trending_interst_wrap}>
        <div className={rbar.trending_heading}>
		Most Followed Communities
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
                      <div className={rbar.folowers}>{data.folowers}</div>
                    </div>
                  </div>
                  <div className={rbar.trending_add_btn}>
                    <Image src={add} />
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

export default MostFollowedCommunity;
