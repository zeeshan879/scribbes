import React from "react";
import crypto from "../../Asstes/Images/crypto.png";
import Image from "next/image";
import con from "../../Asstes/style/startconversation.module.css";
import closeIcon from "../../Asstes/Images/closeIcon.png";
import { useState } from "react";
const ChoseInterstToggle = (props) => {
  const [interst, setInterst] = useState([
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
    {
      icon: crypto,
      title: "Crypto Currency",
      folowers: "3.6k Followers",
    },
  ]);
  return (
    <>
      <div className={con.chose_toggle2}>
        <div className={con.togle_heading}>
          <div>Followed Interests</div>
          <div className="cursor-pointer" onClick={() => props.onClick()}>
            <Image src={closeIcon} />
          </div>
        </div>
        <div className={con.chose_interst_box} id="style-12">
          {interst.map((data) => {
            return (
              <>
                <div className={con.interst_tile}>
                  <div>
                    <Image src={crypto} height="32px" width="32px" />
                  </div>
                  <div>
                    <div className="text-[#000580] text-xs font-DM">
                      Crypto Currency
                    </div>
                    <div className="text-[#BCBCBC] font-DM text-[10px]">
                      3.6k Followers
                    </div>
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

export default ChoseInterstToggle;
