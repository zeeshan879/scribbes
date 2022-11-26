import React from "react";
import { useState } from "react";
import scv from "../../Asstes/style/setting_center_view.module.css";

const FollowAndUnFollowBtn = () => {
  const [follow, setFollow] = useState(false);
  return (
    <>
      <div
        className={
          follow == false ? scv.sb_follow_btn : scv.active_sb_follow_btn
        }
        onClick={() => setFollow(!follow)}
      >
        {follow == false ? "Following" : "Follow"}
      </div>
    </>
  );
};

export default FollowAndUnFollowBtn;
