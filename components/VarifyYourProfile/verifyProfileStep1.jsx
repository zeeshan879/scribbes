import React from "react";
import vp from "../../Asstes/style/varify_Profile.module.css";
import chose from "../../Asstes/Images/chose.png";
import Image from "next/image";

const VerifyProfileStep1 = () => {
  return (
    <>
      <div className={vp.step1_box}>
        <div className="text-[18px] sm:text-[20px] font-DM font-bold">
          Step 1: Confirm authenticity
        </div>
        <div className="max-w-[900px] text-base font-DM leading-5 pt-3">
          Add an official identification document for yourself to show that your
          profile is connected to the public figure, celebrity or brand it
          represents.
        </div>
        <div className="pt-3 text-base font-DM font-bold">Document Type</div>
        <div className={vp.step1_driving_license}>
          <div className="font-DM">Driving License</div>
          <div>
            <Image src={chose} />
          </div>
        </div>
        <div className="pt-[22px] text-base font-DM font-bold">
          Add Document
        </div>
        <div className="flex gap-[8px] items-center pt-[12px]">
          <div class="upload-btn-wrapper">
            <button class="btn">Choose Files</button>
            <input type="file" name="myfile" />
          </div>
          <div className="text-xs text-[#BCBCBC] font-DM">No File Chosen</div>
        </div>
      </div>
    </>
  );
};

export default VerifyProfileStep1;
