import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mback from "../../Asstes/Images/mback.png";
import flag from "../../Asstes/Images/flag.png";
import chose from "../../Asstes/Images/chose.png";
import { MdOutlineModeEdit } from "react-icons/md";
import Image from "next/image";
import scv from "../../Asstes/style/setting_center_view.module.css";

import MutedAccountsModal from "./muteAccounts";
import BlockAccounts from "./BlockAccountsModal";

const MuteBlockModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [blockAccounts, setBlockAccounts] = useState(false);
  const handleMutedAccountsModal = () => {
    setShowModal(!showModal);
  };
  const handleBlockaccounts = () => {
    setBlockAccounts(!blockAccounts);
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
        <div className={scv.at_header_wraper}>
          <div onClick={() => props.onClick()} className="cursor-pointer">
            <Image src={mback} />
          </div>
          <div>Mute and Block</div>
        </div>
        <div className={scv.at_text}>
          Manage the accounts that you’ve muted or blocked.
        </div>
        <div className={scv.mb_modal_body}>
          <div className="flex justify-between items-center">
            <div>Blocked Accounts</div>
            <div onClick={() => handleBlockaccounts()}>
              {" "}
              <MdOutlineModeEdit className="text-[#BCBCBC] cursor-pointer text-xl" />
            </div>
          </div>
          <div className="flex justify-between items-center pt-[35px]">
            <div>Muted Accounts</div>
            <div onClick={() => handleMutedAccountsModal()}>
              {" "}
              <MdOutlineModeEdit className="text-[#BCBCBC] cursor-pointer text-xl" />
            </div>
          </div>
        </div>
      </Modal>
      <MutedAccountsModal
        state={showModal}
        onClick={handleMutedAccountsModal}
      />
      <BlockAccounts state={blockAccounts} onClick={handleBlockaccounts} />
    </>
  );
};

export default MuteBlockModal;
