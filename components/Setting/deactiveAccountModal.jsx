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

const DeactivateAccounts = (props) => {
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
          <div>Deactivate Your Account</div>
        </div>
        <div className={scv.da_content}>
          <div className="flex gap-[17px]">
            <div>
              <Image src={profile} />
            </div>
            <div>
              <div className="font-DM text-[#000580] text-[20px]">
                John Doe{" "}
              </div>
              <div className="font-DM font-normal text-xs">@JohnDoeuser</div>
            </div>
          </div>
          <div className={scv.da_heading}>
            You Are About To Deactivate Your Account
          </div>
          <div className={scv.da_text}>
            You’re about to start the process of deactivating your Scribbes
            account. Your display name, @username, and public profile will no
            longer be viewable on Scribbes.com.
          </div>
        </div>
        <div className={scv.da_contaier}>
          <div className={scv.da_heading}>What Else You Should Know</div>
          <div className={scv.da_text_content_box}>
            <div>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </div>

            <div className="pt-[30px]">
              Minime vero istorum quidem, inquit. Bonum patria: miserum exilium.
              Itaque ad tempus ad Pisonem omnes. Duo Reges: constructio
              interrete.
            </div>
            <div className="pt-[30px]">
              Honesta oratio, Socratica, Platonis etiam. Age sane, inquam.
              Compensabatur, inquit, cum summis doloribus laetitia.
            </div>
          </div>
        </div>
        <div className={scv.seprator}></div>
        <div className="flex justify-center py-[20px] md:py-[44px]">
          <div className="cursor-pointer text-[20px] font-DM font-normal text-[#EA0000]">Deactivate Account</div>
        </div>
      </Modal>
    </>
  );
};

export default DeactivateAccounts;
