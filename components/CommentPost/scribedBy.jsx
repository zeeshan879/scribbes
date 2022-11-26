import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mback from "../../Asstes/Images/mback.png";
import flag from "../../Asstes/Images/flag.png";
import macount from "../../Asstes/Images/macount.png";
import notMuted from "../../Asstes/Images/notMuted.png";
import profile from "../../Asstes/Images/profile.png";
import Image from "next/image";
import scv from "../../Asstes/style/setting_center_view.module.css";
import ScribbedModalTabs from "./scribbedModalTabs";
import FollowAndUnFollowBtn from "./followBtn";
import ScribbedByshares from "./shares";
import QuotesScribes from "./quotesScribes";
import { useSelector } from "react-redux";
const ScribbedBy = (props) => {
  const scribbesTabs = useSelector(
    (state) => state.allGernalFunction.scribbesTabs
  );

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
        <div className={scv.ed_header_wraper}>
          <div onClick={() => props.onClick()} className="cursor-pointer">
            <Image src={mback} />
          </div>
          <div>Scribbed By</div>
        </div>
        <div className={scv.sb_tabs_container}>
          <ScribbedModalTabs />
        </div>
        {scribbesTabs == 1 ? <ScribbedByshares /> : <QuotesScribes />}
      </Modal>
    </>
  );
};

export default ScribbedBy;
