import React from "react";
import well1 from "../../Asstes/style/wellsec1.module.css";
import Scribbes from "../../Asstes/Images/Scribbes.png";
import Header from "../Header";
import Image from "next/image";

const WellcomeScreen1 = () => {
  return (
    <>
      <div className={well1.login_main}>
        <Header />

        <div className={well1.well_sec_1_container}>
          <div className={well1.scrren1_wrap}>
            <div className={well1.well_sec__wrapper}>
              <div className={well1.card_image_box}>
                <div className={well1.scren1_card_heading}>
                  Welcome to Scribbes
                </div>
              </div>
              <div className={well1.screen1_card_content}>
                <div className={well1.sec1_text}>
                  Scribbes is the future of how we share infomation and chat on
                  the internet.
                </div>
                <div className={well1.sec1_text2}>
                  It’s a growing community of writers, thinkers and people with
                  great opinions on a wide variety of topics. Follow a topic,
                  join a group, find your voice in the fastest growing community
                  on the internet.
                </div>
                <div className={well1.sec1_text3}>
                  Speak, learn and share. This is your space, curated by you and
                  for you.
                </div>
                <div className={well1.sec1_text4}>Lets get started!</div>
              </div>
              <div className={well1.sec1card_sep}></div>
              <div className={well1.sec1_action_box}>
                <div className={well1.sce1_skip_now}>Skip for now</div>
                <div className={well1.sec1_change_circle}>
                  <div className={well1.active_circle}></div>
                  <div className={well1.non_active_circle}></div>
                  <div className={well1.non_active_circle}></div>
                  <div className={well1.non_active_circle}></div>
                </div>
                <div className={well1.sec1_show_around_btn}>Show me around</div>
              </div>
            </div>
          </div>
        </div>

        <div className={well1.scribe_logo}>
          <Image src={Scribbes} />
        </div>
      </div>
    </>
  );
};

export default WellcomeScreen1;
