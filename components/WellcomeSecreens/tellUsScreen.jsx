import React, { useState } from "react";
import tell from "../../Asstes/style/tellUsAboutYourSelf.module.css";
import Image from "next/image";
import { userBio } from "../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

const TellUsView = () => {
  const [intro, setIntro] = useState();
  const dispatch = useDispatch();
  const temBio = useSelector((state) => state.user.temBio);
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleUserIntroduction = (e) => {
    const bio = e.target.value;
    setIntro(bio);

    dispatch(userBio(bio));
  };
  console.log("introducton", temBio);
  return (
    <>
      <div className={tell.tellUS_wrap}>
        <div className={tell.tellus_heading}>Tell us about yourself</div>
        <div className={tell.tell_content_text}>
          A good bio, serves as an introduction to anyone who visits your
          profile
        </div>
        <div className={tell.textarea_wrap}>
          <div className={tell.texy_aera}>
            <textarea
              className={tell.teaxt_ele}
              placeholder="Introduce yourself...."
              onChange={(e) => handleUserIntroduction(e)}
              value={intro}
            ></textarea>
            <div className={tell.text_limit}>0/2000</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TellUsView;
