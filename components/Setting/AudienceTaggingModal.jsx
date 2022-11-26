import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mback from "../../Asstes/Images/mback.png";
import flag from "../../Asstes/Images/flag.png";
import chose from "../../Asstes/Images/chose.png";
import Image from "next/image";
import scv from "../../Asstes/style/setting_center_view.module.css";
import Form from 'react-bootstrap/Form';

const AudienceTaggingModal = (props) => {
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
          <div>Audience and Tagging</div>
        </div>
        <div className={scv.at_text}>
          Manage what information you allow other people on Scribbes to see.
        </div>
        <div className={scv.at_protect}>
          <div className="pt-[35px] flex justify-between">
            <div>
              <div className="font-DM font-normal text-[20px]">
                Protect your scribbes
              </div>
              <div className={scv.at_protect_learn}>
                When selected, your Scribbes and other account information are
                only visible to people who follow you.{" "}
                <span className="text-[#1CAC19] cursor-pointer underline">
                  Learn more
                </span>
              </div>
            </div>
            <div>
              <input
                class="radius-checkbox accent-[#1CAC19] "
                type="checkbox"
              />{" "}
            </div>
          </div>
        </div>
        <div className={scv.seprator}></div>
        <div className={scv.at_protect}>
          <div className="pt-[35px] flex justify-between">
            <div>
              <div className="font-DM font-normal text-[20px]">
                Photo Tagging
              </div>
              <div className={scv.at_protect_learn}>
                Allow people to tag you in their photos and receive
                notifications when they do so.
              </div>
            </div>
            <div>
			<Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
		className=""

      />

    </Form>
            </div>
          </div>
          <div className="pt-[35px] flex justify-between">
            <div className="text-base font-DM font-normal">
              Anyone can tag you
            </div>
            <div>
              <input
                class="rounded-checkbox accent-[#1CAC19] h-[20px] w-[20px] "
                type="checkbox"
				checked
              />{" "}
            </div>
          </div>
          <div className="pt-[14px] flex justify-between">
            <div className="text-base font-DM font-normal">
              Only people you follow can tag you
            </div>
            <div>
              <input
                class="rounded-checkbox accent-[#1CAC19] h-[20px] w-[20px] "
                type="checkbox"
              />{" "}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AudienceTaggingModal;
