import React from "react";
import Header from "../Header";
import well from "../../Asstes/style/wellSecGooglelogin.module.css";
import Scribbes from "../../Asstes/Images/Scribbes.png";
import Image from "next/image";
import Link from "next/link";

const WellcomeGoogleLogin = () => {
  return (
    <>

      <div className={well.login_main}>
	  <Header />
        <div className={well.continue_card}>
          <div className={well.card_box}>
            <div className={well.card_heading_wrap}>
              <div className={well.card_heading}>
                Thank you for signing up with Scribbes, to get started setup
                your username
              </div>
              <div className={well.card_input_wrap1}>
                <input
                  className={well.card_ele}
                  placeholder="Your Scribbes username"
                />
              </div>
              <Link href="/wellcomescreen">
              <div className={well.card_continue_btn}>Continue</div></Link>
            </div>
          </div>
        </div>
        <div className={well.scribe_logo}>
          <Image src={Scribbes} />
        </div>
      </div>
    </>
  );
};

export default WellcomeGoogleLogin;
