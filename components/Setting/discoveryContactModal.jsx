import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mback from "../../Asstes/Images/mback.png";
import flag from "../../Asstes/Images/flag.png";
import chose from "../../Asstes/Images/chose.png";
import Image from "next/image";
import { MdOutlineModeEdit } from "react-icons/md";
import scv from "../../Asstes/style/setting_center_view.module.css";
import MangeContacts from "./mangeContactModal";

const DiscoveablityContacts = (props) => {
  const [mange, setMange] = useState(false);
  const handleMangeContact = () => {
    setMange(!mange);
  };
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
        <div className={scv.ai_header_wraper}>
          <div onClick={() => props.onClick()} className="cursor-pointer">
            <Image src={mback} />
          </div>
          <div>Discoverability And Contacts</div>
        </div>
        <div className={scv.at_text}>
          Control your discoverability settings and manage contacts you’ve
          imported.
        </div>
        <div className={scv.da_seprator}></div>
        <div className={scv.da_content_body}>
          <div className="font-DM text-[30px] font-bold">Discoverability</div>
          <div className="font-DM max-w-[500px] text-[#BCBCBC] leading-[20px] text-base font-normal">
            Decide whether people who have your email address or phone number
            can find and connect with you on Scribbes.
          </div>
          <div className="flex pt-[43px] justify-between">
            <div>
              <div className="font-DM font-normal text-[20px]">
                Let people who have your phone number find you on Scribbes
              </div>
              <div className={scv.at_protect_learn}>
                Let people who have your phone number find and connect with you
                on Scribbes.
                <span className="text-[#1CAC19] cursor-pointer underline">
                  Learn more
                </span>
              </div>
            </div>
            <div>
              <input
                class="rounded-checkbox accent-[#1CAC19] "
                type="checkbox"
              />{" "}
            </div>
          </div>
        </div>
        <div className={scv.da_seprator2}></div>
        <div className={scv.da_content_body}>
          <div className="font-DM text-[30px] font-bold">Discoverability</div>
          <div className={scv.at_protect_learn}>
            Manage contacts that you have imported from your mobile devices.
            <span className="text-[#1CAC19] cursor-pointer underline">
              Learn more
            </span>
          </div>
          <div className="flex justify-between pt-[64px] items-center">
            <div>Manage Contatcs</div>
            <div onClick={() => handleMangeContact()}>
              <MdOutlineModeEdit className="text-[#BCBCBC] cursor-pointer text-xl" />
            </div>
          </div>
        </div>
      </Modal>
      <MangeContacts state={mange} onClick={handleMangeContact} />
    </>
  );
};

export default DiscoveablityContacts;
