import React, { useState } from "react";
import nc from "../../Asstes/style/add_community.module.css";
import Image from "next/image";
import chose from "../../Asstes/images/chose.png";
import earth from "../../Asstes/images/earth.png";
import lock from "../../Asstes/images/lock.png";
import { useSelector, useDispatch } from "react-redux";

const CommunityInformation = () => {
  const [chose1, activeChose] = useState(false);
  const [selecyPrivcy, setPrivcy] = useState("Chose Privacy");
  const changeView = useSelector(
    (state) => state.allGernalFunction.mobileDesktopView
  );
  const handlePrivacy = (data) => {
    if (data == true) {
      activeChose(!chose1);
    } else {
      setPrivcy(data);
      activeChose(false);
    }
  };
  const privayData = [
    {
      name: "Everyone",
      icon: earth,
    },
    {
      name: "Private",
      icon: lock,
    },
  ];
  return (
    <>
      <div
        className={
          changeView === true
            ? nc.create_community_wraper
            : nc.create_community_wraper_mblView
        }
      >
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
          <div className={nc.chose_Privcy}     >
            <div className="font-DM">{selecyPrivcy}</div>
            <div className={nc.chose_select} >
              <Image src={chose} onClick={() => handlePrivacy(true)} />

              {chose1 && (
                <div
                  className={nc.chose_privcy_toggle}
              
                >
                  {privayData.map((data) => {
                    return (
                      <>
                        <div className={nc.toggle_item}>
                          <Image src={data.icon} />

                          <div
                            className="font-DM w-full h-full items-center flex"
                            onClick={() => handlePrivacy(data.name)}
                          >
                            {data.name}
                          </div>
                        </div>
                      </>
                    );
                  })}
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
              <textarea
                placeholder="write...."
                className={nc.des_textarea_ele}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityInformation;
