import React from "react";
import ct from "../../Asstes/style/community_titles_views.module.css";
import Image from "next/image";
import growth from "../../Asstes/Images/growth.png";
import ecno from "../../Asstes/Images/ecno.png";
import Link from "next/link";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import {getUserCommunity} from "../../redux/reducers/userReducer"
const CommunityTiles = () => {
  const cookies = new Cookies();
  const titles = [
    {
      image: growth,
      follow: "3.6k Followers",
      title: "Growth",
    },
    {
      image: ecno,
      follow: "3.6k Followers",
      title: "Economy",
    },
    {
      image: ecno,
      follow: "3.6k Followers",
      title: "Economy",
    },
    {
      image: ecno,
      follow: "3.6k Followers",
      title: "Economy",
    },
    {
      image: ecno,
      follow: "3.6k Followers",
      title: "Economy",
    },
    {
      image: ecno,
      follow: "3.6k Followers",
      title: "Economy",
    },
    {
      image: ecno,
      follow: "3.6k Followers",
      title: "Economy",
    },
    {
      image: ecno,
      follow: "3.6k Followers",
      title: "Economy",
    },
    {
      image: ecno,
      follow: "3.6k Followers",
      title: "Economy",
    },
    {
      image: ecno,
      follow: "3.6k Followers",
      title: "Economy",
    },
  ];
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
            {titles.map((data) => {
              return (
                <>
                  <div className={ct.tile}>
                    <div>
                      <Image src={data.image} />
                    </div>
                    <div>
                      <div className={ct.title_heading}>{data.title}</div>
                      <div className={ct.tile_followers}>{data.follow}</div>
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
