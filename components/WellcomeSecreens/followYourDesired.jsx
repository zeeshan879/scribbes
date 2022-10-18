import React from "react";
import foll from "../../Asstes/style/followyourdesire.module.css";
import tell from "../../Asstes/style/tellUsAboutYourSelf.module.css";
import followDesired from "../../Help/followDesiredArray";
import Image from "next/image";
import crypto from "../../Asstes/Images/crypto.png";

const FollowYourDesired = () => {
  console.log("array", followDesired);
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
