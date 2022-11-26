import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mback from "../../Asstes/Images/mback.png";
import flag from "../../Asstes/Images/flag.png";
import chose from "../../Asstes/Images/chose.png";
import Image from "next/image";
import scv from "../../Asstes/style/setting_center_view.module.css";

const DirectMessagePopUp = (props) => {
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
        <div className={scv.at_header_wraper}>
          <div onClick={() => props.onClick()} className="cursor-pointer">
            <Image src={mback} />
          </div>
          <div>Direct Messages</div>
        </div>
        <div className={scv.at_text}>Manage who can message you directly.</div>
        <div className={scv.dm_seprator}></div>
        <div className={scv.dm_content_body}>
          <div className="flex justify-between gap-[10px]">
            <div>
              <div className="font-DM font-normal text-[20px]">
                Allow message requests from everyone
              </div>
              <div className={scv.at_protect_learn}>
                Let people who you don’t follow send you message requests and
                add you to group conversations. To reply to their messages, you
                need to accept the request.{" "}
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
          <div className="pt-[30px] md:pt-[73px] flex justify-between">
            <div>
              <div className="font-DM font-normal text-[20px]">
                Filter low-quality messages
              </div>
              <div className={scv.at_protect_learn}>
                Hide message requests that have been detected as being
                potentially spam or low-quality. These will be sent to a
                separate inbox at the bottom of your message requests. You can
                still access them if you want.{" "}
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
          <div className="pt-[30px] md:pt-[73px] flex justify-between">
            <div>
              <div className="font-DM font-normal text-[20px]">
                Show read receipts
              </div>
              <div className={scv.at_protect_learn}>
                Let people you’re messaging with know when you’ve seen their
                messages. Read receipts are not shown on message requests.{" "}
                <span className="text-[#1CAC19] cursor-pointer underline">
                  Learn more
                </span>
              </div>
            </div>
            <div>
              <input
                class="rounded-checkbox accent-[#1CAC19] "
                type="checkbox"
                checked
              />{" "}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DirectMessagePopUp;
