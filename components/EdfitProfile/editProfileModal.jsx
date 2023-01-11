import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import backscreen from "../../Asstes/Images/backscreen.png";
import Image from "next/image";
import uploadIcon from "../../Asstes/Images/uploadIcon.png";

const EditProfileModal = (props) => {


  return (
    <>
      <Modal
        size="lg"
        className="post_action_modal"
        show={props?.state}
        onHide={props.onClick}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={HomCen.edit_modal_header}>
          <div className="cursor-pointer" onClick={props.onClick}>
            <Image src={backscreen} />
          </div>
          <div>Edit Profile</div>
        </div>
        <div className="flex justify-center mt-[33px] sm:mt-[73px]">
          <div className={HomCen.upload_image}>
            <Image src={uploadIcon} />
          </div>
        </div>
        <div className={HomCen.user_info_form}>
          {/*<div className={HomCen.user_name}>
            <div className="font-DM text-[16px] sm:text-[20px] font-normal text-[#BCBCBC]">
              Name
            </div>
            <input className={HomCen.user_input_ele} />
          </div>*/}
          <div className={HomCen.user_bio}>
            <div className="font-DM text-[16px] sm:text-[20px] font-normal text-[#BCBCBC]">
              Bio
            </div>
            <textarea className={HomCen.user_input_ele} />
          </div>
          <div className={HomCen.user_name}>
            <div className="font-DM text-[16px] sm:text-[20px] font-normal text-[#BCBCBC]">
              Website
            </div>
            <input className={HomCen.user_input_ele} />
          </div>
          <div className={HomCen.user_name}>
            <div className="font-DM text-[16px] sm:text-[20px] font-normal text-[#BCBCBC]">
              Date of Birth
            </div>
            <input className={HomCen.user_input_ele} />
          </div>
          <div className="flex justify-center  sm:justify-end">
            <div className={HomCen.user_info_save_btn}>Save</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditProfileModal;
