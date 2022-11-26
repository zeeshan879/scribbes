import React from "react";
import vp from "../../Asstes/style/varify_Profile.module.css";
import VerifyProfileStep1 from "./verifyProfileStep1"
import VerifyProfileStep2 from "./verifyProfileStep2"

const VarifyProfileView = () => {
  return (
    <>
      <div className={vp.main_container}>
        <div className={vp.search_box}>
          <input className={vp.search_ele} placeholder="Search" />
        </div>
        <div className={vp.heading}>verify Your Profile</div>
        <div className={vp.content_body}>
          <div className={vp.content_text}>
            Verified profiles have blue checkmarks next to their names to show
            that Scribbes has confirmed theyre the real presence of the public
            figures, celebrities, and brands they represent.
          </div>
		  <div className={vp.form_wraper}>
			<VerifyProfileStep1/>
			<VerifyProfileStep2/>
		  </div>
        </div>
      </div>
    </>
  );
};

export default VarifyProfileView;
