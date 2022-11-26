import React from "react";
import nba from "../../Asstes/Images/nba.png";
import clnd from "../../Asstes/Images/clnd.png";
import vPost from "../../Asstes/Images/vPost.png";
import si from "../../Asstes/style/specficInterest.module.css";
import Image from "next/image";

const SpecficTabAbout = () => {
  const adminUser = [
    {
      profile: vPost,
      name: "John Doe",
      email: "@JohnDoeuser",
      status: "Admin",
    },
    {
      profile: vPost,
      name: "John Doe",
      email: "@JohnDoeuser",
      status: "Mod",
    },
    {
      profile: vPost,
      name: "John Doe",
      email: "@JohnDoeuser",
      status: "Mod",
    },
  ];
  return (
    <>
      <div className={si.about_container}>
        <div className={si.about_nba_box}>
          <div className={si.about_heading}>About NBA Discussions</div>
          <div className="pt-[22px] max-w-[626px] text-base font-DM font-normal leading-[25px]">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
            <div className="pt-[25px]">
              Minime vero istorum quidem, inquit. Bonum patria: miserum exilium.
              Itaque ad tempus ad Pisonem omnes. Duo Reges: constructio
              interrete.
            </div>
            <div className="pt-[25px]">
              Honesta oratio, Socratica, Platonis etiam. Age sane, inquam.
              Compensabatur, inquit, cum summis doloribus laetitia.
            </div>
          </div>
          <div className={si.crated_by}>
            Created by:
            <div className="flex gap-[7px] items-center">
              <Image src={nba} />
              <span className="font-bold">@mikesomeoneuser</span>
            </div>
          </div>
          <div className="flex gap-[12px] items-center pt-[18px] ">
            <Image src={clnd} />
            Since August 2022
          </div>
        </div>
        <div className={si.seprator1}></div>
        <div className={si.about_rules}>
          <div className={si.rules_heading}>Rules</div>
          <div className={si.rules_content}>
            <div className="flex gap-[19px] ">
              <div className={si.rules_indicator}>1</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="flex gap-[19px] ">
              <div className={si.rules_indicator}>2</div>
              <div>
                Minime vero istorum quidem, inquit. Bonum patria: miserum
                exilium. Itaque ad tempus ad Pisonem omnes. Duo Reges:
                constructio interrete.
              </div>
            </div>
            <div className="flex gap-[19px] ">
              <div className={si.rules_indicator}>3</div>
              <div>
                Honesta oratio, Socratica, Platonis etiam. Age sane, inquam.
                Compensabatur, inquit, cum summis doloribus laetitia.
              </div>
            </div>
          </div>
        </div>
        <div className={si.seprator1}></div>
        <div className={si.admin_moderatr}>
          <div className={si.admin_heading}>Admins & Moderators</div>
          <div className={si.admin_profile_wraper}>
            {adminUser.map((data) => {
              return (
                <>
                  <div className={si.admin_profile_box}>
                    <div className={si.admin_info}>
                      <Image src={data.profile} />
                      <div className={si.admin_modrate_status}>
                        <div>
                          <div className="font-DM text-center sm:text-start font-medium text-[16px] sm:text-[20px] text-[#000580]">
                            {data.name}
                          </div>
                          <div className="font-DM text-xs">{data.email}</div>
                        </div>
                        <div className={si.admin_btn}>{data.status}</div>
                      </div>
                    </div>
                    <div className={si.admin_follow_btn}>Follow</div>
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

export default SpecficTabAbout;
