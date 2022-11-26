import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mback from "../../Asstes/Images/mback.png";
import flag from "../../Asstes/Images/flag.png";
import macount from "../../Asstes/Images/macount.png";
import notMuted from "../../Asstes/Images/notMuted.png";
import profile from "../../Asstes/Images/coomentP.png";
import Image from "next/image";
import scv from "../../Asstes/style/setting_center_view.module.css";

const CommentPostEditHistory = (props) => {
  const mutedAccounts = [
    {
      image: profile,
      name: "Mike someone",
      email: "@JohnDoeuser",
      des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
      time:"Today at 1:30 PM",
    },
    {
      image: profile,
      name: "Mike someone",
      email: "@JohnDoeuser",
      des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
      time:"Today at 1:30 PM",
    },
    {
      image: profile,
      name: "Mike someone",
      email: "@JohnDoeuser",
      des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
      time:"Today at 1:30 PM",
    },
    {
      image: profile,
      name: "Mike someone",
      email: "@JohnDoeuser",
      des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
      time:"Today at 1:30 PM",
    },
    {
      image: profile,
      name: "Mike someone",
      email: "@JohnDoeuser",
      des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
      time:"Today at 1:30 PM",
    },
    {
      image: profile,
      name: "Mike someone",
      email: "@JohnDoeuser",
      des: "This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
      time:"Today at 1:30 PM",
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
        <div className={scv.ed_header_wraper}>
          <div onClick={() => props.onClick()} className="cursor-pointer">
            <Image src={mback} />
          </div>
          <div>Edit History</div>
        </div>

    
        <div className={scv._ed_body_container}>
          <div className={scv.ed_body} id="style-desk">
            {mutedAccounts.map((data) => {
              return (
                <>
                  <div className="flex justify-between w-[100%]">
                    <div className="flex gap-[17px]">
                      <div>
                        <Image src={data.image} />
                      </div>
                      <div>
                        <div className={scv.ma_username}>{data.name}</div>
                        <div className="font-DM text-xs font-normal">
                          {data.email}
                        </div>
                        <div className="pt-[13px] max-w-[550px] text-base font-DM leading-[20px]">
                          {data.des}
                        </div>
						<div className="text-xs font-DM text-[#BCBCBC] pt-[5px]">{data.time}</div>
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

export default CommentPostEditHistory;
