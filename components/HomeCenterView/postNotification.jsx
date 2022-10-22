import React, { useState } from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import arrowUp from "../../Asstes/Images/arrowUp.png";
import comnt from "../../Asstes/Images/comnt.png";
import share from "../../Asstes/Images/share.png";
import Image from "next/image";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineCreate } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

const PostNotification = () => {
  const [shareactive, setSahreActive] = useState(false);
  return (
    <>
      <div className={HomCen.post_noti_wrap}>
        <div className={HomCen.noti_box}>
          <Image src={arrowUp} />
          <div>10</div>
        </div>
        <div className={HomCen.noti_box}>
          <Image src={comnt} />
          <div>56</div>
        </div>
        <div
          className={HomCen.noti_box}
          onClick={() => setSahreActive(!shareactive)}
        >
          <Image src={share} />
          <div>56</div>
          {shareactive && (
            <div className={HomCen.share_post_toggle}>
           <div className={HomCen.share_toggle_container}>
		   <div className={HomCen.share_toggle_item}>
                <RiShareForwardLine className="text-lg" />

                <div>Share</div>
              </div>
		   <div className={HomCen.share_toggle_item}>
                <MdOutlineCreate className="text-lg" />

                <div>Quote Scribbe</div>
              </div>
		   <div className={HomCen.share_toggle_item}>
                <BsShare className="text-lg" />

                <div>Share Via</div>
              </div>
		   <div className={HomCen.share_toggle_item}>
                <AiOutlineLink className="text-lg" />

                <div>Copy Post URL</div>
              </div>
		   </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostNotification;
