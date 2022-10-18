import React from "react";
import well1 from "../../Asstes/style/wellsec1.module.css";
const WellcomeView = () => {
  return (
    <>
      <div className={well1.card_image_box}>
        <div className={well1.scren1_card_heading}>Welcome to Scribbes</div>
      </div>
      <div className={well1.screen1_card_content}>
        <div className={well1.sec1_text}>
          Scribbes is the future of how we share infomation and chat on the
          internet.
        </div>
        <div className={well1.sec1_text2}>
          It’s a growing community of writers, thinkers and people with great
          opinions on a wide variety of topics. Follow a topic, join a group,
          find your voice in the fastest growing community on the internet.
        </div>
        <div className={well1.sec1_text3}>
          Speak, learn and share. This is your space, curated by you and for
          you.
        </div>
        <div className={well1.sec1_text4}>Lets get started!</div>
      </div>
    </>
  );
};

export default WellcomeView;
