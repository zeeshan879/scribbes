import React, { useEffect, useState } from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import MessageLeftSection from "./messageLeftSection";
import HomeRightmenu from "../HomeRightMenu";
import Home from "../../styles/Home.module.css";
import NavBar from "../Navbar";
import MobileBottomNavigation from "../MobileBotomNavigation";
import MessageRightSec from "./messageRightSec";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/reducers/userReducer";
import { Base_Url } from "../../config/baseUrl";
import {
  setCurrentPrivateMemberMsg,
  setCurrentRoom,
  setCurrentRoomMessages,
} from "../../redux/reducers/messageReducer";
import { handleMessageView } from "../../redux/reducers/scribbes";
import { io } from "socket.io-client";

const socket = io(Base_Url);

const Messages = () => {
  const dispatch = useDispatch();
  const userReducer = useSelector((store) => store.user);
  const messageReducer = useSelector((store) => store.messageReducer);
  const [search, setSearch] = useState("");
  const [typemessage, setTypeMessage] = useState("");

  const getFormattedData = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return month + "/" + day + "/" + year;
  };
  const todayDate = getFormattedData();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    // if (location?.state?.detail != null) {
    let firstPerson = userReducer?.userList?.filter(
      (u) => messageReducer?.currentUser?.id !== u?.id
    )[0];
    console.log("firstperson", firstPerson);
    const roomId = orderIds(messageReducer?.currentUser?.id, firstPerson?.id);
    dispatch(setCurrentPrivateMemberMsg(firstPerson));
    dispatch(setCurrentRoom(roomId));
    if (firstPerson) {
      socket.emit("join-room", roomId);
    }
    // }
    // console.log("not get", location?.state?.roomId);
    // socket.emit("join-room", location?.state?.roomId);
  }, [userReducer.userList]);

  useEffect(() => {
    socket.off("room-messages").on("room-messages", (roomMessages) => {
      console.log("get new messages", roomMessages);
      dispatch(setCurrentRoomMessages(roomMessages));
    });

    // socket.off("notification").on("notification", (room) => {
    //   console.log(
    //     "comsat lahore====",
    //     room,
    //     messageReducer?.currentRoom,
    //     messageReducer?.currentRoom != room
    //   );
    //   // if (store?.messageReducer?.currentRoom != room) dispatch(addNotification(room))
    //   dispatch(addNotification(room));
    // });
  }, []);

  const handelTypeMessage = (e) => {
    setTypeMessage(e.target.value);
  };
  const orderIds = (id1, id2) => {
    console.log("comsat lahore===", id1, id2);
    if (id1 > id2) {
      return id1 + "_" + id2;
    } else {
      return id2 + "_" + id1;
    }
  };
  const handlePrivateMemberMsg = (member, index) => {
    dispatch(handleMessageView(true));
    // setRow(index);
    const roomId = orderIds(messageReducer?.currentUser?.id, member.id);
    dispatch(setCurrentPrivateMemberMsg(member));
    socket.emit("join-room", roomId, messageReducer?.currentRoom);
    dispatch(setCurrentRoom(roomId));
    // dispatch(resetNotification(roomId));
  };
  const sendMessage = () => {
    setTypeMessage("");
    if (!typemessage) return;
    const today = new Date();
    const minutes =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    const time = today.getHours() + ":" + minutes;
    const roomId = messageReducer?.currentRoom;
    socket.emit(
      "message-room",
      roomId,
      typemessage,
      messageReducer?.currentUser,
      time,
      todayDate,
      messageReducer?.privateMemberMsg
    );
  };

  return (
    <>
      <div className={Home.main_container}>
        <NavBar />
        <div className="flex h-full w-[100%]">
          <div className={Home.left_menu}>
            <HomeLeftMenu />
          </div>
          <div className={Home.Message_center}>
            <MessageLeftSection
              userList={userReducer?.userList?.filter(
                (u) => messageReducer?.currentUser?.id !== u?.id
              )}
              handlePrivateMemberMsg={handlePrivateMemberMsg}
            />
          </div>
          <div className={Home.message_right}>
            <MessageRightSec
              handelTypeMessage={handelTypeMessage}
              typemessage={typemessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
        {/*<========Mobile Bottom navgation========>*/}
        <MobileBottomNavigation />
      </div>
    </>
  );
};

export default Messages;
