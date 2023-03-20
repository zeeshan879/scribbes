import React from "react";
import ct from "../../Asstes/style/community_titles_views.module.css";
import Image from "next/image";
import growth from "../../Asstes/Images/growth.png";
import ecno from "../../Asstes/Images/ecno.png";
import Link from "next/link";
import Cookies from "universal-cookie";
import {getFollowedCommunity} from "../../redux/reducers/userReducer"
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";

const CommunityTiles = () => {
  const followedCommunity=useSelector((state)=>state.user.userFollowedCommunity)
  const showCommunities=followedCommunity?.data?.communities
  return (
    <>
      <div className={ct.header_wraper}>
        <div className={ct.heder_heaind}>Followed by you</div>
      <Link href="/new-community"> 
       <div className={ct.new_community_btn}>New Community</div></Link>
      </div>
      <div className="flex justify-center">
        <div className="vedios_container2" id="style-12">
          <div className={ct.tile_wraper}>
            {showCommunities?.map((data) => {
              return (
                <>
                  <div className={ct.tile}>
                    <div>
                      <Image src={growth} />
                    </div>
                    <div>
                      <div className={ct.title_heading}>{data.communityName}</div>
                      <div className={ct.tile_followers}>{data.Users?.length} followers</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityTiles;
