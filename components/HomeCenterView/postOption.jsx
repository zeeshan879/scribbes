import React, { useState } from "react";
import postAction from "../../Asstes/Images/postAction.png";
import Image from "next/image";
import pa from "../../Asstes/style/postAction.module.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TfiHandPointRight } from "react-icons/tfi";
import { BiLinkAlt, BiBlock } from "react-icons/bi";
import { BsVolumeMuteFill } from "react-icons/bs";
import { MdOutlineReportProblem } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import { BsArrowLeft } from "react-icons/bs";
import profile from "../../Asstes/Images/profile.png";
import postP from "../../Asstes/Images/postP.png";
import pikacho from "../../Asstes/Images/pikacho.png";
import insert from "../../Asstes/Images/insert.png";
import enoji from "../../Asstes/Images/enoji.png";

import PostScribbeBlogBtn from "../HomeCenterView/postScribbeBlogBtn";

const PostOption = () => {
  const [postaction, setPostAction] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [report, setReport] = useState(false);
  return (
    <>
      <div
        className={pa.post_action_wrap}
        onClick={() => setPostAction(!postaction)}
      >
        <Image src={postAction} />
        {postaction && (
          <div className={pa.toggle_wrap}>
            <div className={pa.item_wrap} onClick={() => setLgShow(true)}>
              <div>
                <AiOutlineUserAdd />
              </div>
              <div>Follow @JohnDoe</div>
            </div>
            <div className={pa.item_wrap}>
              <div>
                <TfiHandPointRight />
              </div>
              <div>Nudge @JohnDoe</div>
            </div>
            <div className={pa.item_wrap}>
              <div>
                <BiLinkAlt />
              </div>
              <div>Copy Post URL</div>
            </div>
            <div className={pa.item_wrap}>
              <div>
                <BiBlock />
              </div>
              <div>Block @JohnDoe</div>
            </div>
            <div className={pa.item_wrap}>
              <div>
                <BsVolumeMuteFill />
              </div>
              <div>Mute @JohnDoe</div>
            </div>
            <div className={pa.item_wrap} onClick={() => setReport(true)}>
              <div>
                <MdOutlineReportProblem />
              </div>
              <div>Report Post</div>
            </div>
          </div>
        )}
      </div>
      <Modal
        style={{ borderRadius:"30px" }}
        size="lg"
        show={lgShow}
        className="post_action_modal"
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={pa.modal_main_box}>
          <div
            className="text-2xl cursor-pointer"
            onClick={() => setLgShow(false)}
          >
            <BsArrowLeft />
          </div>
          <div className={pa.modal_profile_wrap}>
            <div className={pa.profile_info}>
              <div>
                <Image src={profile} />
              </div>
              <div className="font-DM text-xs font-normal">
                John Doe <span className="font-bold">@Johndoe</span>
              </div>
            </div>
            <div className={pa.share_thoughts_container}>
              <textarea
                className={pa.text_ele}
                placeholder="Share your thoughts...."
              ></textarea>
            </div>
          </div>
          <div className={pa.post_des_container}>
            <div className={pa.post_profile_box}>
              <div>
                <Image src={postP} height="43px" width="43px" />
              </div>
              <div className="font-DM text-xs font-normal">
                John Doe <span className="font-bold">@Johndoe</span>
              </div>
            </div>
            <div className="font-DM text-xs font-normal pt-2">
              Some post text that is gonna be here for qoute posts
            </div>
            <div className="mt-[9px]">
              <Image src={pikacho} />
            </div>
          </div>
          <div className={pa.post_bottom_content}>
            <div>
              <PostScribbeBlogBtn />
            </div>
            <div className="text-xs text-black font-medium">
              <span className="text-[#1CAC19]">120</span>/350
            </div>
          </div>
          <div className={pa.bottom_seprator}></div>
          <div className={pa.bottom_media_wrap}>
            <div className="flex gap-[16px] items-center justify-between w-full sm:justify-start ">
              <div className={pa.bottom_media_items}>
                <Image src={insert} />
                Insert Media
              </div>
              <div className={pa.bottom_media_items}>
                <Image src={enoji} />
                Insert Emoji
              </div>
            </div>
            <div className={pa.modal_post_btn}>Post</div>
          </div>
        </div>
      </Modal>
      {/*<==========post share modal========>*/}
      <Modal
        style={{ borderRadius: "30px" }}
        size="lg"
        show={report}
        className="post_action_modal"
        onHide={() => setReport(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={pa.post_share_modal}>
          <div className={pa.post_share_header}>
            <div
              className="mt-1 cursor-pointer"
              onClick={() => setReport(false)}
            >
              <BsArrowLeft />
            </div>
            <div>
              <div>Report Post</div>
              <div className="text-[16px] font-DM font-normal text-[#BCBCBC]">
                This report will be sent to the moderation team for review.
              </div>
            </div>
          </div>
          <div className={pa.report_modal_sep}></div>
          <div className={pa.report_modal_content}>
            <div className={pa.report_modal_text}>
              Choose a category to help our moderators process your report
              appropriately:
            </div>
            <div className={pa.report_modal_checkbox}>
              <div className="flex justify-between items-center font-DM text-[16px] sm:text-[20px] font-normal">
                <div>Spam</div>
                <div>
                  <input
                    class="d-checkbox accent-[#1CAC19]"
                    type="checkbox"
                  />{" "}
                </div>
              </div>
              <div className="flex justify-between items-center font-DM text-[16px] sm:text-[20px] font-normal">
                <div>Violence</div>
                <div>
                  <input
                    class="rounded-checkbox accent-[#1CAC19]"
                    type="checkbox"
                    checked
                  />{" "}
                </div>
              </div>
              <div className="flex justify-between items-center font-DM text-[16px] sm:text-[20px] font-normal">
                <div>Threat</div>
                <div>
                  <input
                    class="rounded-checkbox accent-[#1CAC19]"
                    type="checkbox"
                  />{" "}
                </div>
              </div>
              <div className="flex justify-between items-center font-DM text-[16px] sm:text-[20px] font-normal">
                <div>Porn</div>
                <div>
                  <input
                    class="rounded-checkbox accent-[#1CAC19]"
                    type="checkbox"
                  />{" "}
                </div>
              </div>
              <div className="flex justify-between items-center font-DM text-[16px] sm:text-[20px] font-normal">
                <div>Doxxing</div>
                <div>
                  <input
                    class="rounded-checkbox accent-[#1CAC19]"
                    type="checkbox"
                  />{" "}
                </div>
              </div>
              <div className="flex justify-between items-center font-DM text-[16px] sm:text-[20px] font-normal">
                <div>Other</div>
                <div>
                  <input
                    class="rounded-checkbox accent-[#1CAC19]"
                    type="checkbox"
                  />{" "}
                </div>
              </div>
              <div className={pa.report_modal_text}>
                You can provide additional comments below:
              </div>
              <div className={pa.report_modal_text_box}>
                <textarea
                  placeholder="Description (optional)"
                  className={pa.report_text_ele}
                ></textarea>
                <div className="flex justify-end text-xs text-black">
                  <span className="text-[#1CAC19]">15</span>/350
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className={pa.report_post_btn}>Submit</div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PostOption;
