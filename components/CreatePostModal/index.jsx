import React, { useState } from "react";
import PostScribbeBlogBtn from "../HomeCenterView/postScribbeBlogBtn";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TfiHandPointRight } from "react-icons/tfi";
import { BiLinkAlt, BiBlock } from "react-icons/bi";
import { BsVolumeMuteFill } from "react-icons/bs";
import { MdOutlineReportProblem } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import pa from "../../Asstes/style/postAction.module.css";
import profile from "../../Asstes/Images/profile.png";
import postP from "../../Asstes/Images/postP.png";
import pikacho from "../../Asstes/Images/pikacho.png";
import insert from "../../Asstes/Images/insert.png";
import activeinsert from "../../Asstes/Images/activeinsert.png";
import enoji from "../../Asstes/Images/enoji.png";
import arrowDown from "../../Asstes/Images/arrowDown.png";
import upMedia from "../../Asstes/Images/upMedia.png";
import embed from "../../Asstes/Images/embed.png";
import BlogPost from "./blogPost";
import InsertMedia from "../InsertMedia"
import InsertMediaAndInsertUrlBtn from "../InsertMedia"

const CreatepostModal = (prop) => {
  const [insertMedia, setInsertMedia] = useState(false);
  const [post, setPost] = useState(false);
  const postStatus = () => {
    setPost(!post);
  };
  return (
    <>
      <Modal
        style={{ borderRadius: "30px" }}
        size="lg"
        show={prop?.state}
        className="post_action_modal"
        onHide={prop?.onClick}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={pa.post_create_modal}>
          <div className={pa.create_post_header} onClick={prop?.onClick}>
            <BsArrowLeft />
            {post === true ? "Create a Blog Post" : "Create Post"}
          </div>
          <div className={pa.create_post_sep}></div>
          <div className={pa.create_post_modal_profile}>
            <div className={pa.profile_info}>
              <div>
                <Image src={profile} />
              </div>

              <div className={pa.chose_interst_wrao}>
                Choose Interest
                <Image src={arrowDown} />
              </div>
            </div>
          </div>
          {post === true ? (
            <BlogPost />
          ) : (
            <div className={pa.create_post_share}>
              <textarea
                className={pa.text_ele}
                placeholder="share your thoughts...."
              ></textarea>
            </div>
          )}

          <div className={pa.create_post_bottom_content}>
            <div>
              <PostScribbeBlogBtn state={post} onClick={postStatus} />
            </div>
            <div className="text-xs text-black font-medium">
              <span className="text-[#1CAC19]">120</span>/350
            </div>
          </div>
          <div className={pa.bottom_seprator}></div>
          <div
            className={
              post == true
                ? pa.createPost_blog_active
                : pa.create_bottom_media_wrap
            }
          >
            {post === false ? (
      <InsertMediaAndInsertUrlBtn/>
            ) : (
              ""
            )}
            <div className={pa.modal_post_btn}>
              {post === true ? "Post Blog" : "Post"}{" "}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreatepostModal;
