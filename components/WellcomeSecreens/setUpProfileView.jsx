import React from "react";
import pro from "../../Asstes/style/setupProfileScreen.module.css";
import upload from "../../Asstes/Images/upload.png";
import Image from "next/image";

const SetUpProfileView = () => {
  return (
    <>
      <div className={pro.setUpProfile_wrap}>
        <div className={pro.profile_heading}>Setup your profile</div>
        <div className={pro.pro_content_text}>
          Upload an awesome profile picture. It helps people recognize you.
        </div>
        <div className={pro.upload_wraper}>
          <div class={pro.upload_btn_wrapper}>
            <div className="flex justify-center">
              <Image src={upload}  />
            </div>
            <button class={pro.btn_upload}>
              Drag photo here or <span className={pro.span_upload}>Upload from Computer</span>
            </button>
            <input type="file" name="myfile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SetUpProfileView;
