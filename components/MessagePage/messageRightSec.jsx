import React from "react";
import mrs from "../../Asstes/style/message_right_sec.module.css";
import mscImage from "../../Asstes/Images/msc.png";
import Image from "next/image";
import ShowConversation from "./showConversation";
import { useSelector, useDispatch } from "react-redux";

const MessageRightSec = ({ handelTypeMessage, typemessage, sendMessage }) => {
  const isMessage = useSelector((state) => state.allGernalFunction.isMessage);
  console.log("isMessage", isMessage);

  return (
    <>
      <div className={mrs.main_container}>
        {isMessage === false ? (
          <>
            <div className={mrs.inner_content}>
              <div className={mrs.select_chat}>Select a chat</div>
              <div className={mrs.text}>
                Choose from one of your existing chats to read and send messages
                here.{" "}
              </div>
            </div>
            <div className={mrs.bottom_img}>
              <Image src={mscImage} />
            </div>
          </>
        ) : (
          <ShowConversation
            handelTypeMessage={handelTypeMessage}
            typemessage={typemessage}
            sendMessage={sendMessage}
          />
        )}
      </div>
    </>
  );
};

export default MessageRightSec;
