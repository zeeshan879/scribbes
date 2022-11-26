import React from "react";

import backscreen from "../../Asstes/Images/backscreen.png";
import Image from "next/image";
import { useRouter } from "next/router";
import si from "../../Asstes/style/specficInterest.module.css";
import mem1 from "../../Asstes/Images/mem1.png";
import opt from "../../Asstes/Images/opt.png";
import mem2 from "../../Asstes/Images/mem2.png";
import mem3 from "../../Asstes/Images/mem3.png";
import Specfictabs from "./specfictabs";
import SpecficPostSec from "./postSection";
import SpecficTabAbout from "./about";
import { useSelector } from "react-redux";

const SpecficInterestCenterView = () => {
  const specficTabs = useSelector(
    (state) => state.allGernalFunction.specficInterestTab
  );
  const router = useRouter();
  return (
    <>
      <div className={si.main_container}>
        <div className={si.header_wraper}>
          <div className="cursor-pointer" onClick={() => router.back()}>
            <Image src={backscreen} />
          </div>
          NBA Discussions
        </div>
        <div className={si.bannder_wraper}>
          <div className={si.banner_content}>NBA Discussions</div>
        </div>
        <div className={si.member_wrapers}>
          <div className={si.specific_users_box}>
            <div className="flex items-center relative">
              <div className={si.mem1}>
                <Image src={mem1} />
              </div>
              <div className={si.mem2}>
                <Image src={mem2} />
              </div>
              <div className={si.mem3}>
                <Image src={mem3} />
              </div>
              <div className={si.mem4}>
                <Image src={mem1} />
              </div>
            </div>
            <div className={si.total_mem}> 256 Members</div>
          </div>
          <div className="flex gap-[12px] items-center">
            <div className={si.option_bnt}>
              <Image src={opt} />
            </div>
            <div className={si.follow_btn}>Follow</div>
          </div>
        </div>
        <div className={si.tabs_container}>
          <Specfictabs />
        </div>
        <div className={si.seprator1}></div>
        {specficTabs === 1 ? (
          <SpecficTabAbout />
        ) : (
          <div className={si.discussion_container}>
          <SpecficPostSec />
        </div>
     
        )}
      </div>
    </>
  );
};

export default SpecficInterestCenterView;
