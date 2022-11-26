import React from "react";
import Image from "next/image";
import at from "../../Asstes/style/admin_tool.module.css";
import postAction from "../../Asstes/Images/postAction.png";
import mode from "../../Asstes/Images/mode.png";
import userV from "../../Asstes/Images/userV.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MemberOptionToggle = () => {
  const [isClick, setIsClick] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    setIsClick(false);
  };

  return (
    <>
      <div className={at.member_option}>
        <Image src={postAction} onClick={() => setIsClick(!isClick)} />
        {isClick && (
          <div className={at.opt_toggle_box}>
            <div className={at.opt_items} onClick={handleShow}>
              <Image src={mode} />
              Remove from mod team
            </div>
            <div className={at.opt_items}>
              <Image src={userV} />
              View @mikesomeoneuser
            </div>
          </div>
        )}
      </div>
      <Modal
        className="add_mode_modal"
        show={show}
        onHide={handleShow}
        centered
      >
        <div className={at.add_modal_body}>
          <div className={at.add_modal_heading}>Add to Mod Team?</div>
          <div className={at.add_modal_text}>
            Are you sure you want to make @mikesomeoneuser a moderator?
          </div>
          <div className={at.add_modal_addbtn}>Add</div>
          <div className={at.add_modal_Cancelbtn} onClick={() => handleShow()}>
            Cancel
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MemberOptionToggle;
