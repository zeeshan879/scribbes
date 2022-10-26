import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RiNotification2Fill } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdCreate } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Home from "../../styles/Home.module.css";
import bn from "../../Asstes/style/mobileBottomNavigation.module.css";
import profile from "../../Asstes/Images/profile.png";
import Image from "next/image";
import imgV from "../../Asstes/Images/imgV.png";
import LinkV from "../../Asstes/Images/LinkV.png";
import gifV from "../../Asstes/Images/gifV.png";
import HomCen from "../../Asstes/style/home_centerView.module.css";

const MobileBottomNavigation = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [activeTag, setActiveTag] = useState(1);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setShow(true);
  }
  return (
    <>
      <div className={bn.bottom_mobile_menu_container}>
        <div className={bn.mbl_create_post_wrap}>
          <div className={bn.mbl_create_post} onClick={() => handleShow()}>
            <IoMdCreate />
          </div>
        </div>
        <div className={bn.bottom_mobile_menu_box}>
          <div>
            <AiFillHome />
          </div>
          <div>
            <BiSearch />
          </div>
          <div>
            <RiNotification2Fill />
          </div>
          <div>
            <BsEnvelope />
          </div>
        </div>
      </div>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header>
          <div className={bn.mobile_share_post_modal_header}>
            <div onClick={() => setShow(false)}>
              <BsArrowLeft />
            </div>
            <div className={bn.mbl_post_btn}>Post</div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className={bn.share_thoughts_wraper}>
            <div className={bn.share_thouts_ele}>
              <div>
                <Image src={profile} width="40px" height="40px" />
              </div>
              <div className={bn.share_thougts_box}>
                <textarea
                  className={bn.mbl_share_thougts}
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>
            </div>
            <div className="px-3">
              <div className={bn.seprator}></div>
            </div>
            <div className={bn.mbl_media_wrap}>
              <div className={bn.media_inner_box}>
                <div className={bn.media_item}>
                  <Image src={imgV} width="15px" height="15px" />
                </div>
                <div className={bn.media_item}>
                  <Image src={LinkV} width="15px" height="15px" />
                </div>
                <div className={bn.media_item}>
                  <Image src={gifV} width="15px" height="15px" />
                </div>
              </div>
              <div className={HomCen.share_scribe_box}>
                <div
                  className={
                    activeTag === 1
                      ? HomCen.share_tag_active
                      : HomCen.share_tag_non_active
                  }
                  onClick={() => setActiveTag(1)}
                >
                  Scribbe
                </div>
                <div
                  className={
                    activeTag === 2
                      ? HomCen.share_tag_active
                      : HomCen.share_tag_non_active
                  }
                  onClick={() => setActiveTag(2)}
                >
                  Blog
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MobileBottomNavigation;
