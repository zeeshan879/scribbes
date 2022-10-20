import React, { useState } from "react";
import con from "../../Asstes/style/startconversation.module.css";
import tell from "../../Asstes/style/tellUsAboutYourSelf.module.css";
import profile from "../../Asstes/Images/profile.png";
import downArrow from "../../Asstes/Images/arrowDown.png";
import insert from "../../Asstes/Images/insert.png";
import LinkV from "../../Asstes/Images/LinkV.png";
import closeIcon from "../../Asstes/Images/closeIcon.png";
import Image from "next/image";

const StartConverstion = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className={con.start_Conversation_wrap}>
        <div className={tell.tellus_heading}>Start a conversation</div>
        <div className={con.text}>
          Make your first scribbe and start a conversation
        </div>
        <div className={con.con_wraper}>
          <div className={con.conversation_ele}>
            <div className={con.profile_wrap}>
              <div>
                {" "}
                <Image src={profile} />
              </div>
              <div className={con.chose_drop}>
                <div className={con.chose_interst}>
                  Choose Interest <Image src={downArrow} />
                </div>
           {/*<div className="relative">
           <div className={con.chose_toggle}>
                  <div className={con.togle_heading}>
                    <div>Followed Interests</div>
                    <div className="cursor-pointer">
                      <Image src={closeIcon} />
                    </div>
                  </div>
                </div>
           </div>*/}
              </div>
            </div>
            <div className={con.text_area}>
              <textarea
                placeholder="Share your thoughts...."
                className={con.text_ele}
              />
            </div>
            <div className={con.scrbe_wrap}>
              <div className={con.blog_btn_wrp}>
                <div
                  className={
                    active == 1 ? con.active_scribe_btn : con.scribe_btn
                  }
                  onClick={() => setActive(1)}
                >
                  Scribbe
                </div>
                <div
                  className={
                    active == 2 ? con.active_scribe_btn : con.scribe_btn
                  }
                  onClick={() => setActive(2)}
                >
                  Blog
                </div>
              </div>
              <div className={con.toal_text_string}>
                <span className={con.span_text}>120</span>/350
              </div>
            </div>
            <div className={con.seprator}></div>
            <div className={con.action_btn_wrap}>
              <div className={con.media_btn_wrap}>
                <div className={con.inser_media}>
                  <Image src={insert} />
                  Insert Media
                </div>
                <div className={con.inser_media}>
                  <Image src={LinkV} />
                  Insert URL
                </div>
              </div>
              <div className={con.post_btn}>Post</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartConverstion;
