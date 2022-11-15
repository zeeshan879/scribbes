import React, { useState } from "react";
import nc from "../../Asstes/style/new_community.module.css";
import Image from "next/image";
import chose from "../../Asstes/Images/chose.png";
import earth from "../../Asstes/Images/earth.png";
import lock from "../../Asstes/Images/lock.png";

const CommunityInformation = () => {
  const [chose1, activeChose] = useState(false);
  return (
    <>
      <div className={nc.heading}>Create New Community</div>
      <div className={nc.create_community_wraper}>
        <div className={nc.header_wraper}>Community Information</div>
        <div className={nc.info_body}>
          <div className={nc.comunity_name}>
            <div className="font-DM text-base font-normal">
              Community Name ( Required)
            </div>
            <div className={nc.name_box}>
              <input placeholder="Search" className={nc.name_ele} />
            </div>
            <div className={nc.name_text}>
              Use the name of your business, Brand etc or a name what this
              Community is about....
            </div>
          </div>
          <div className={nc.comunity_name}>
            <div className="font-DM text-base font-normal">
              Category ( Required)
            </div>
            <div className={nc.name_box}>
              <input placeholder="Search" className={nc.name_ele} />
            </div>
            <div className={nc.name_text}>
              Use the name of your business, Brand etc or a name what this
              Community is about....
            </div>
          </div>
          <div className={nc.chose_Privcy}>
            <div>Chose Privacy</div>
            <div
              className={nc.chose_select}
              onClick={() => activeChose(!chose1)}
            >
              <Image src={chose} />

              {chose1 && (
                <div className={nc.chose_privcy_toggle}>
                  <div className={nc.toggle_item}>
			
                    <Image src={earth} />
				

                    <div>Everyone</div>
                  </div>
                  <div className={nc.toggle_item}>
               <div className="min-w-[25px]">
			   <Image src={lock} />
			   </div>

                    <div>Private</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={nc.comunity_name}>
            <div className="font-DM text-base font-normal">
              Invite Friends ( Optional )
            </div>
            <div className={nc.name_box}>
              <input placeholder="Search" className={nc.name_ele} />
            </div>
          </div>
          <div className={nc.coumity_des}>
            <div className="font-DM text-base font-normal">Description</div>
            <div className={nc.comunity_des_text}>
              Lorumipsum aklklas cbkkakc kaslmlkmpoij asjnkjjjjjjjnasjnka
              niawoijoijoinaaaad kingone riski kaliber to the pointly
              hsainimmammmmajwjij awawdwa. No tu aiigramth logicially busrrt.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityInformation;
