import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mback from "../../Asstes/Images/mback.png";
import flag from "../../Asstes/Images/flag.png";
import chose from "../../Asstes/Images/chose.png";
import Image from "next/image";
import scv from "../../Asstes/style/setting_center_view.module.css";

const AcountInformationModal = (props) => {
  return (
    <>
      <Modal
        size="xl"
        centered
        className="post_action_modal"
        show={props.state}
        onHide={() => props.onClick}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={scv.ai_header_wraper}>
          <div onClick={() => props.onClick()} className="cursor-pointer">
            <Image src={mback} />
          </div>
          <div>Account Information</div>
        </div>
        <div className={scv.seprator}></div>
        <div className="mr-[15px] md:mr-[33px]">
          <div className={scv.ai_modal_body} id="style-desk">
            <div className={scv.ai_name_box}>
              <div className="text-[16px] md:text-[18px] font-DM font-normal text-[#BCBCBC]">
                Name
              </div>
              <div className={scv.ai_name}>John Doe</div>
            </div>
            <div className={scv.ai_contact_box}>
              <div>
                <Image src={flag} />
              </div>
              <div>
                <Image src={chose} />
              </div>
              <div className={scv.ai_contant_bar}></div>
              <div className="text-base font-DM font-normal text-[#BCBCBC]">
                +92**********
              </div>
            </div>
            <div className={scv.ai_name_box}>
              <input placeholder="Email" className={scv.ai_form_ele} />
            </div>
            <div className={scv.ai_name_box}>
              <input placeholder="Country" className={scv.ai_form_ele} />
            </div>
            <div className={scv.ai_name_box}>
              <input placeholder="Language" className={scv.ai_form_ele} />
            </div>
            <div className={scv.ai_name_box}>
              <input placeholder="Gender" className={scv.ai_form_ele} />
            </div>
            <div className={scv.ai_dateOfBrith}>
              <div className="text-[20px] font-DM text-[#BCBCBC]">
                Date of birth
              </div>
              <div className={scv.ai_dateOfBrith_box}>
                <div className={scv.ai_dob_items}>
                  dd
                  <div>
                    <Image src={chose} />
                  </div>
                </div>
                <div className={scv.ai_dob_items}>
                  mm
                  <div>
                    <Image src={chose} />
                  </div>
                </div>
                <div className={scv.ai_dob_items_year}>
                  yyyy
                  <div>
                    <Image src={chose} />
                  </div>
                </div>
              </div>
            </div>
            <div className={scv.ai_name_box}>
              <input placeholder="Age" className={scv.ai_form_ele} />
            </div>
            <div className="flex justify-end pt-[20px] md:pt-[52px]">
              <div className={scv.ai_save_btn}>Save</div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AcountInformationModal;
