import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import nba from "../../Asstes/Images/nba.png";
import Image from "next/image";

const AboutNBA = () => {
  return (
    <>
      <div className={rbar.nba_wraper}>
        <div className={rbar.nba_header}>About NBA Discussions</div>
        <div className={rbar.nba_content_body}>
          <div className="text-base font-DM font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="text-base font-DM font-normal pt-[40px]">
            Minime vero istorum quidem, inquit. Bonum patria: miserum exilium.
            Itaque ad tempus ad Pisonem omnes. Duo Reges: constructio interrete.
          </div>
          <div className="text-base font-DM font-normal pt-[30px]">
            Honesta oratio, Socratica, Platonis etiam. Age sane, inquam.
            Compensabatur, inquit, cum summis doloribus laetitia.
          </div>
          <div className={rbar.nba_sep}></div>
          <div className="flex justify-center pt-[27px]">
            <div className="flex gap-[11px]">
              <div>Created by:</div>
              <div className="flex items-center gap-[6px] text-base font-DM font-normal">
                <Image src={nba} />
                <span className="font-bold text-base font-DM">
                  {" "}
                  @mikesomeoneuser
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-[17px] pb-[31px]">
            <div className="text-base font-DM font-normal">
              Since August 2022
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNBA;
