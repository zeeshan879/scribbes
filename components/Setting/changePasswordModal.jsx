import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mback from "../../Asstes/Images/mback.png";
import flag from "../../Asstes/Images/flag.png";
import chose from "../../Asstes/Images/chose.png";
import remove from "../../Asstes/Images/remove.png";
import profile from "../../Asstes/Images/profile.png";
import Image from "next/image";
import { MdOutlineModeEdit } from "react-icons/md";
import scv from "../../Asstes/style/setting_center_view.module.css";

const ChnagePassword = (props) => {
  return (
    <>
      <Modal
        size="lg"
        centered
        className="post_action_modal"
        show={props.state}
        onHide={() => props.onClick}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={scv.com_header_wraper}>
          <div onClick={() => props.onClick()} className="cursor-pointer">
            <Image src={mback} />
          </div>
          <div>Change Your Password</div>
        </div>
        <div className={scv.cp_seprator}></div>
        <div className={scv.cp_forget_box}>
          <div className={scv.cp_forget_div}>
            <input placeholder="Current Password" className={scv.input_ele} />
          </div>
          <div className="font-DM text-[20px] pt-[14px] text-[#1CAC19] cursor-pointer">
            Forgot Password?
          </div>
        </div>
        <div className="pt-[46px]">
          <div className={scv.seprator}></div>
        </div>
        <div className={scv.cp_forget_box}>
          <div className={scv.cp_forget_div}>
            <input placeholder="New Password" className={scv.input_ele} />
          </div>
        </div>
        <div className={scv.cp_forget_box}>
          <div className={scv.cp_forget_div}>
            <input placeholder="Confirm Password" className={scv.input_ele} />
          </div>
          <div className="flex justify-end pt-[52px]">
            <div className={scv.cp_save_btn}>Save</div>
          </div>
        </div> 
 
      </Modal>
    </>
  );
};

export default ChnagePassword;
