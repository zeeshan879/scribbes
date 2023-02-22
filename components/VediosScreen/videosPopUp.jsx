import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import vv from "../../Asstes/style/video_views.module.css";
import whiteArrow from "../../Asstes/Images/whiteArrow.png";
import Image from "next/image";
import postP from "../../Asstes/Images/postP.png";
import play3 from "../../Asstes/Images/play3.png";
import watch from "../../Asstes/Images/watch.png";
import postLike from "../../Asstes/Images/postLike.png";
import postshare from "../../Asstes/Images/postshare.png";
import pstCmnt from "../../Asstes/Images/pstCmnt.png";

const VideosPopUp = (props) => {
  return (
    <>
      <Modal
        fullscreen
        className="full_secreen"
        show={props.state}
        onHide={props.onClick}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={vv.Modal_header}>
          <div className={vv.back_arrow} onClick={props.onClick}>
            <Image src={whiteArrow} />
          </div>
          <div>Scribbes Videos</div>
        </div>
        <div className={vv.vedio_modal_content} id="style-desk">
          <div className={vv.modal_post_wraper}>
            <div className={vv.post_user}>
              <Image src={postP} />
              <div>Tom Brady</div>
            </div>
            <div className={vv.bg_image}>
              <div className={vv.total_watch}>
                <div className="flex flex-col items-center justify-center">
                  <Image src={watch} />
                  <div>1k</div>
                </div>
              </div>

              <div className={vv.post_notification}>
                <div className={vv.noti_items}>
                  <div className="flex flex-col items-center justify-center py-[10px]">
                    <div className="pt-[10px]">
                      <Image src={postLike} />
                    </div>
                    <div className="mt-[-2px]">10</div>
                  </div>
                </div>
                <div className={vv.noti_items}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="pt-[10px]">
                      <Image src={pstCmnt} />
                    </div>
                    <div className="mt-[-2px]">156</div>
                  </div>
                </div>
                <div className={vv.noti_items}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="pt-[10px]">
                      <Image src={postshare} />
                    </div>
                    <div className="mt-[-10px]">10</div>
                  </div>
                </div>
              </div>

              <div className={vv.ply_btn}>
                <Image src={play3} />
              </div>
              <div className={vv.post_des}>
                Look at this amazing video of a man trying VR for the first
                time! This is elite entertainment, man. I am typing random
                things to just show you how a post with video looks like. #video
                #tech
              </div>
            </div>
          </div>
          <div className={vv.modal_post_wraper}>
            <div className={vv.post_user}>
              <Image src={postP} />
              <div>Tom Brady</div>
            </div>
            <div className={vv.bg_image}>
              <div className={vv.total_watch}>
                <div className="flex flex-col items-center justify-center">
                  <Image src={watch} />
                  <div>1k</div>
                </div>
              </div>

              <div className={vv.post_notification}>
                <div className={vv.noti_items}>
                  <div className="flex flex-col items-center justify-center py-[10px]">
                    <div className="pt-[10px]">
                      <Image src={postLike} />
                    </div>
                    <div className="mt-[-2px]">10</div>
                  </div>
                </div>
                <div className={vv.noti_items}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="pt-[10px]">
                      <Image src={pstCmnt} />
                    </div>
                    <div className="mt-[-2px]">156</div>
                  </div>
                </div>
                <div className={vv.noti_items}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="pt-[10px]">
                      <Image src={postshare} />
                    </div>
                    <div className="mt-[-10px]">10</div>
                  </div>
                </div>
              </div>

              <div className={vv.ply_btn}>
                <Image src={play3} />
              </div>
              <div className={vv.post_des}>
                Look at this amazing video of a man trying VR for the first
                time! This is elite entertainment, man. I am typing random
                things to just show you how a post with video looks like. #video
                #tech
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VideosPopUp;
