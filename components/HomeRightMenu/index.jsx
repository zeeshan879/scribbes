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

const HomeRightmenu = () => {
  const trendingArray = [
    {
      icon: fit,
      title: "Fitness",
      folowers: "3.6k Followers",
    },
    {
      icon: lea,
      title: "Premier League",
      folowers: "3.6k Followers",
    },
    {
      icon: food,
      title: "Internet Foodies",
      folowers: "3.6k Followers",
    },
    {
      icon: car,
      title: "Vintage Cars",
      folowers: "3.6k Followers",
    },
  ];
  return (
    <>
      <div className={rbar.right_bar_wrap}>
        <div className={rbar.serch_box_wrap}>
          <input className={rbar.seach_bar_ele} placeholder="Search " />
        </div>
        <div className={rbar.trending_interst_wrap}>
          <div className={rbar.trending_heading}>Trending interests</div>
          <div className={rbar.trending_box_wrap}>
            {trendingArray.map((data) => {
              return (
                <>
                  <div className={rbar.trending_tile_wrap}>
                    <div className={rbar.trendinf_tile_info}>
                      <div>
                        <Image src={data.icon} />
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
        <div className={rbar.trending_videos_container}>
          <div className={rbar.trending_heading}>Trending Videos</div>
          <div className={rbar.trending_videos_wrap}>
            <div className={rbar.trending_vedio_tile}>
              <Image src={vedioTile} height="134px" width="176px" />

              <div>
                <div className={rbar.trending_vedios_heading}>
                  On this day, a historic goal by this great player
                </div>
                <div className={rbar._vedio_tile_user}>
                  <div>
                    <Image src={vedioProfile} />
                  </div>
                  Jim Someone
                </div>
                <div className={rbar._vedio_tile_tag}>
                  <Image src={vedioTag} />
                  Soccer
                </div>
              </div>
            </div>
            <div className={rbar.trending_vedio_tile}>
              <Image src={vedioTile} height="134px" width="176px" />

              <div>
                <div className={rbar.trending_vedios_heading}>
                  On this day, a historic goal by this great player
                </div>
                <div className={rbar._vedio_tile_user}>
                  <div>
                    <Image src={vedioProfile} />
                  </div>
                  Jim Someone
                </div>
                <div className={rbar._vedio_tile_tag}>
                  <Image src={vedioTag} />
                  Soccer
                </div>
              </div>
            </div>
			<div className={rbar.trending_vedio_tile}>
              <Image src={vedioTile} height="134px" width="176px" />

              <div>
                <div className={rbar.trending_vedios_heading}>
                  On this day, a historic goal by this great player
                </div>
                <div className={rbar._vedio_tile_user}>
                  <div>
                    <Image src={vedioProfile} />
                  </div>
                  Jim Someone
                </div>
                <div className={rbar._vedio_tile_tag}>
                  <Image src={vedioTag} />
                  Soccer
                </div>
              </div>
            </div>
            <div className={rbar.trending_vedio_tile}>
              <Image src={vedioTile} height="134px" width="176px" />

              <div>
                <div className={rbar.trending_vedios_heading}>
                  On this day, a historic goal by this great player
                </div>
                <div className={rbar._vedio_tile_user}>
                  <div>
                    <Image src={vedioProfile} />
                  </div>
                  Jim Someone
                </div>
                <div className={rbar._vedio_tile_tag}>
                  <Image src={vedioTag} />
                  Soccer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRightmenu;
