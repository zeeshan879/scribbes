import React from "react";
import scv from "../../Asstes/style/setting_center_view.module.css";
import backscreen from "../../Asstes/Images/backscreen.png";
import Image from "next/image";
import SettingTabs from "./settingTabs";
import AcountInformation from "./acountInformation";
import { useSelector } from "react-redux";
import PrivacyAndSafety from "./privacySafety";

const SettingCenterView = () => {
  const settingTabs = useSelector(
    (state) => state.allGernalFunction.settingTabs
  );
  return (
    <>
      <div className={scv.main_container}>
        <div className={scv.header_wraper}>
          <div className="flex gap-[18px]">
            <div className="cursor-pointer pt-[10px]">
              <Image src={backscreen} />
            </div>
            <div>
              <div className={scv.header_text}>Settings</div>
              <div className={scv.header_subText}>Your Account</div>
            </div>
          </div>
        </div>
        <div className={scv.tabs_container}>
          <SettingTabs />
        </div>
        {settingTabs == 1 ? (
          <AcountInformation />
        ) : settingTabs == 2 ? (
          <PrivacyAndSafety />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SettingCenterView;
