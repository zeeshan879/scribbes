import React, { useEffect, useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import {
  temUserCommunity,

} from "../../redux/reducers/userReducer";


const FollowYourDesired = () => {
  const allcommunities = useSelector((state) => state.user.allcommunities);
  const showAllCommunity=allcommunities.data.map(data => ({...data, active:false}))
  const [followDesired, setfollowDesired] = useState(showAllCommunity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleSelectCommunity = (data) => {
    const find_id = followDesired?.findIndex((data1) => data1.id === data.id);
    const tempArray = [...followDesired];
    const temp2 = [];
    tempArray[find_id].active = !tempArray[find_id]?.active;
    const activeCom = tempArray.filter((data) => data.active === true);
    for (let i = 0; i <= activeCom.length - 1; i++) {
      temp2?.push({ communityId: activeCom[i]?.id, userId: user?.id });
    }
    dispatch(temUserCommunity({ joinCommunities: temp2 }));
    setfollowDesired(tempArray);
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
                  <Image src={growth} height="74px" width="74px" />
                </div>
                <div>
                  <div
                    className={
                      data.active === true
                        ? foll.active_tile_heading
                        : foll.tile_heading
                    }
                  >
                    {data.communityName}
                  </div>
                  <div
                    className={
                      data.active === true
                        ? foll.active_tile_folowers
                        : foll.tile_folowers
                    }
                  >
               {data.Users?.length} followers
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
