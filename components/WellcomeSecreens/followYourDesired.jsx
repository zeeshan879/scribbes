import React, { useState } from "react";
import foll from "../../Asstes/style/followyourdesire.module.css";
import tell from "../../Asstes/style/tellUsAboutYourSelf.module.css";
import growth from "../../Asstes/Images/growth.png";
import ent from "../../Asstes/Images/ent.png";
import tech from "../../Asstes/Images/tech.png";
import meta from "../../Asstes/Images/meta.png";
import ecno from "../../Asstes/Images/ecno.png";
import leader from "../../Asstes/Images/leader.png";
import lea from "../../Asstes/Images/lea.png";
import music from "../../Asstes/Images/music.png";
import fit from "../../Asstes/Images/fit.png";
import aple from "../../Asstes/Images/crypto.png";
import Image from "next/image";
import crypto from "../../Asstes/Images/crypto.png";

const FollowYourDesired = () => {
  const [followDesired, setfollowDesired] = useState([
    {
      id: 1,
      icon: crypto,
      title: "Crypto Currency",
      followers: "3.6k Followers",
      active: false,
    },
    {
      id: 2,
      icon: growth,
      active: true,
      title: "Growth",
      followers: "3.6k Followers",
    },
    {
      id: 3,
      icon: ent,
      active: false,
      title: "Entrepreneurship",
      followers: "3.6k Followers",
    },
    {
      id: 4,
      icon: tech,
      active: false,
      title: "Technology Memes",
      followers: "3.6k Followers",
    },
    {
      id: 5,
      icon: meta,
      active: true,
      title: "Web 3.0",
      followers: "3.6k Followers",
    },
    {
      id: 6,
      icon: meta,
      active: false,
      title: "Metaverse",
      followers: "3.6k Followers",
    },
    {
      id: 7,
      icon: ecno,
      active: false,
      title: "Economy",
      followers: "3.6k Followers",
    },
    {
      id: 8,
      icon: leader,
      active: false,
      title: "Leadership",
      followers: "3.6k Followers",
    },
    {
      id: 9,
      icon: lea,
      active: false,
      title: "Premier League",
      followers: "3.6k Followers",
    },
    {
      id: 10,
      icon: music,
      title: "Music",
      active: false,
      followers: "3.6k Followers",
    },
    {
      id: 11,
      icon: fit,
      title: "Fitness",
      active: false,
      followers: "3.6k Followers",
    },
    {
      id: 12,
      icon: aple,
      title: "Apple",
      active: false,
      followers: "3.6k Followers",
    },
  ]);

  const handleSelectCommunity = (data) => {
    console.log("tile data==>", data);
    const find_id = followDesired?.findIndex((data1) => data1.id === data.id);
    console.log("data.id,find_index", data.id, find_id);
    const tempArray = [...followDesired];
    tempArray[find_id].active = !tempArray[find_id].active;
    setfollowDesired(tempArray)
  };
  return (
    <div className={foll.tellUS_wrap}>
      <div className={tell.tellus_heading}>Follow your desired interests</div>
      <div className={foll.text_sec}>
        Scribbes gives you full control over what you want to see, read and
        converse with. Here are some featured topics you may like
      </div>

      <div className={foll.tile_wraper}>
        {followDesired.map((data) => {
          return (
            <>
              <div
                className={data.active == true ? foll.active_tile : foll.tile}
                onClick={() => handleSelectCommunity(data)}
              >
                <div>
                  <Image src={data.icon} />
                </div>
                <div>
                  <div
                    className={
                      data.active === true
                        ? foll.active_tile_heading
                        : foll.tile_heading
                    }
                  >
                    {data.title}
                  </div>
                  <div
                    className={
                      data.active === true
                        ? foll.active_tile_folowers
                        : foll.tile_folowers
                    }
                  >
                    {data.followers}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FollowYourDesired;
