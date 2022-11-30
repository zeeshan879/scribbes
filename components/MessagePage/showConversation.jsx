import React from "react";
import sc from "../../Asstes/style/showConversation.module.css";
import Image from "next/image";
import msgUser from "../../Asstes/Images/msgUser.png";
import postAction from "../../Asstes/Images/postAction.png";
import followUser from "../../Asstes/Images/followUser.png";
import clear from "../../Asstes/Images/clear.png";
import muteuser from "../../Asstes/Images/muteuser.png";
import reportv from "../../Asstes/Images/reportv.png";
import blockV from "../../Asstes/Images/blockV.png";
import deleteV from "../../Asstes/Images/deleteV.png";
import chatUploadImage from "../../Asstes/Images/chatUploadImage.png";
import masgSentbtn from "../../Asstes/Images/masgSentbtn.png";
import { useState } from "react";

const ShowConversation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={sc.header_wrap}>
        <div>
          <Image src={msgUser} />
        </div>
        <div className={sc.user_name}>
          Jimmy McGill <span className="font-normal">(@saulgoodman)</span>
        </div>
        <div className={sc.user_opt} onClick={() => setToggle(!toggle)}>
          <Image src={postAction} />
          {toggle && (
            <div className={sc.user_opt_toggle}>
              <div className={sc.user_opt_items}>
                <Image src={followUser} />
                Follow @Jimmy McGill
              </div>
              <div className={sc.user_opt_items}>
                <Image src={clear} />
                Clear Chat
              </div>
              <div className={sc.user_opt_items}>
                <Image src={muteuser} />
                Mute @Jimmy McGill
              </div>
              <div className={sc.user_opt_items}>
                <Image src={reportv} />
                Report @Username
              </div>
              <div className={sc.user_opt_items}>
                <Image src={blockV} />
                Block @Jimmy McGill
              </div>
              <div className={sc.user_opt_items}>
                <Image src={deleteV} />
                Delete Chat
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={sc.message_container} id="style-desk" >
        <div className={sc.message_ui}>
          <div>
            <Image src={msgUser} />
          </div>
          <div className={sc.messge_box}>
            <div className={sc.message_view}>
              Hey! Let me know when you are free. Wanna talk
            </div>
            <div className={sc.message_view2}>
              No rush though, relax and see ya!!!
            </div>
          </div>
        </div>
        <div className={sc.reply_container}>
          <div className={sc.reply_masg}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minime vero
            istorum quidem, inquit. Bonum patria: miserum exilium. Itaque ad
            tempus ad Pisonem.
          </div>
        </div>
        <div className={sc.message_ui}>
          <div>
            <Image src={msgUser} />
          </div>
          <div className={sc.messge_box}>
            <div className={sc.message_view}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
        <div className={sc.message_ui}>
          <div>
            <Image src={msgUser} />
          </div>
          <div className={sc.messge_box}>
            <div className="text-[40px]"> 😂😂😂</div>
          </div>
        </div>
        <div className={sc.reply_container}>
          <div className={sc.reply_masg}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className={sc.message_ui}>
          <div>
            <Image src={msgUser} />
          </div>
          <div className={sc.messge_box}>
            <div className={sc.message_view}>
              Did you watch the match last night? It was epic!
            </div>
          </div>
        </div>
        <div className={sc.chat_input_wraper}>
          <div className={sc.chat_box}>
          <div className="cursor-pointer">
		  <Image src={chatUploadImage} />
		  </div>
            <div className={sc.msg_box}>
              <input
                placeholder="Type Message Here"
                className={sc.chat_element}
              />
            </div>

            <div className="cursor-pointer">
              <Image src={masgSentbtn} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowConversation;
