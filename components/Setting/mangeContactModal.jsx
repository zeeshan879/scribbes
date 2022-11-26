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

const MangeContacts = (props) => {
  const removeContactList = [
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
    {
      profile: profile,
      name: "John Doe",
      contact: "+92 339288177",
    },
  ];
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
          <div>Manage Contacts</div>
        </div>
        <div className={scv.mc_text}>
          These are the contacts that you have imported from your mobile
          devices. This information is used to personalize your experience on
          Scribbes, such as suggesting accounts to follow. You can remove any
          contacts you’ve previously uploaded and turn off syncing with Scribbes
          on all devices. Please be aware that this takes a little time. Learn
          more
        </div>
        <div className={scv.mc_seprator}></div>
        <div className="flex justify-center pt-[28px]">
          <div className="flex gap-[6px] items-center cursor-pointer">
            <div className="cursor-pointer">
              <Image src={remove} />
            </div>
            <div className="text-base font-DM text-[#FF0000]">
              Remove All Contacts
            </div>
          </div>
        </div>
        <div className="mt-[3px] mr-[17px]  mb-[35px]">
          <div className={scv.mc_content_body} id="style-desk">
            {removeContactList.map((data) => {
              return (
                <>
                  <div className={scv.mc_contact_wraper}>
                    <div>
                      <Image src={data.profile} />
                    </div>
                    <div>
                      <div className="text-[20px] font-medium text-[#000580] font-DM">
                        {data.name}
                      </div>
                      <div className="text-base font-normal text-black font-DM ">
                        {data.contact}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MangeContacts;
