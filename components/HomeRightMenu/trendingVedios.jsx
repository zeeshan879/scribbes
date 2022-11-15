import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import vedioTile from "../../Asstes/Images/vedioTile.png";
import vedioProfile from "../../Asstes/Images/vedioProfile.png";
import vedioTag from "../../Asstes/Images/vedioTag.png";
import Image from "next/image";



const TrendingVedios = () => {
  return (
<>
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
       
                </div>
              </div>


</>
  )
}

export default TrendingVedios