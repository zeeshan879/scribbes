import React, { useState } from "react";
import tell from "../../Asstes/style/tellUsAboutYourSelf.module.css";
import pa from "../../Asstes/style/postAction.module.css";
import profile from "../../Asstes/Images/profile.png";
import downArrow from "../../Asstes/Images/arrowDown.png";
import con from "../../Asstes/style/startconversation.module.css";
import Image from "next/image";
import ChoseInterstToggle from "../ChoseInterst";
import InsertMediaAndInsertUrlBtn from "../InsertMedia";
import BlogPost from "../CreatePostModal/blogPost";
import { useSelector,useDispatch } from "react-redux";
import {handlePostAndBlogView } from "../../redux/reducers/scribbes"

const StartConverstion = () => {
  const [active, setActive] = useState(1);
  const [choseInterst, setChoseInterst] = useState(false);
const chnagePostType =useSelector((state)=>state.allGernalFunction.isBlogOrPost)
console.log("chnagePostType===>",chnagePostType)
const dispatch=useDispatch()
  const handleInterstToggle = () => {
    setChoseInterst(!choseInterst);
  };
  return (
    <>
      <div className={con.start_Conversation_wrap}>
        <div className={tell.tellus_heading}>Start a conversation</div>
        <div className={con.text}>
          Make your first scribbe and start a conversation
        </div>
        <div className={con.con_wraper}>
          <div className={chnagePostType==2?con.conversation_ele2:con.conversation_ele}>
            <div className={con.profile_wrap}>
              <div>
                {" "}
                <Image src={profile} />
              </div>
              <div className={con.chose_drop}>
                <div
                  className={con.chose_interst}
                  onClick={() => setChoseInterst(!choseInterst)}
                >
                  Choose Interest <Image src={downArrow} />
                </div>

                {choseInterst && (
                  <ChoseInterstToggle
                    state={choseInterst}
                    onClick={handleInterstToggle}
                  />
                )}
              </div>
            </div>
            {chnagePostType == 2 ? (
              <BlogPost />
            ) : (
              <div className={con.text_area}>
                <textarea
                  placeholder="share your thoughts...."
                  className={con.text_ele}
                />
              </div>
            )}

            <div className={con.scrbe_wrap}>
              <div className={con.blog_btn_wrp}>
                <div
                  className={
                    chnagePostType == 1 ? con.active_scribe_btn : con.scribe_btn
                  }
                  onClick={() => dispatch(handlePostAndBlogView(1))}
                >
                  Scribbe
                </div>
                <div
                  className={
                    chnagePostType == 2 ? con.active_scribe_btn : con.scribe_btn
                  }
                  onClick={() => dispatch(handlePostAndBlogView(2))}
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
              <div>
        { chnagePostType===2?"":  <InsertMediaAndInsertUrlBtn />}
              </div>
              <div className={pa.modal_post_btn}>
                {chnagePostType === 2 ? "Post Blog" : "Post"}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartConverstion;
