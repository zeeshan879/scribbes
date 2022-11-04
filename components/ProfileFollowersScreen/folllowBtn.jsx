import React,{useState} from "react";
import pf from "../../Asstes/style/profile_folloers_center.module.css";

const FolllowBtn = () => {
	const [follow, setFollow] = useState(false);
  return (
    <>
      <div
        className={
          follow == true
            ? pf.followers_folow_btn_active
            : pf.followers_folow_btb
        }
        onClick={() => setFollow(!follow)}
      >
        {follow == true ? "Follow" : "Following"}
      </div>
    </>
  );
};

export default FolllowBtn;
