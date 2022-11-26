import React from "react";
import at from "../../Asstes/style/admin_tool.module.css";
import Image from "next/image";
import backscreen from "../../Asstes/Images/backscreen.png";
import vPost from "../../Asstes/Images/vPost.png";
import { useRouter } from "next/router";
import AdminTabs from "./adminTabs";

const Adminrequest = () => {
  const newReq = [
    {
      profile: vPost,
      name: "Mikesomeone",
      email: "@mikesomeoneuser .",
      time: "8m",
    },
    {
      profile: vPost,
      name: "",
      email: "@mikesomeoneuser .",
      time: "8m",
    },
    {
      profile: vPost,
      name: "",
      email: "@mikesomeoneuser .",
      time: "8m",
    },
    {
      profile: vPost,
      name: "",
      email: "@mikesomeoneuser .",
      time: "8m",
    },
    {
      profile: vPost,
      name: "",
      email: "@mikesomeoneuser .",
      time: "8m",
    },
    {
      profile: vPost,
      name: "",
      email: "@mikesomeoneuser .",
      time: "8m",
    },
    {
      profile: vPost,
      name: "",
      email: "@mikesomeoneuser .",
      time: "8m",
    },
  ];
  return (
    <>
      <div>
        <div className={at.admin_body}>
          <div className={at.member_req_heading}>
            New member requests <div className={at.req_acount}>10</div>
          </div>
          <div className={at.total_req}>
            {newReq.map((data) => {
              return (
                <>
                  <div className={at.mem_req_div}>
                    <div className={at.req_pro_box}>
                      <div>
                        <Image src={data.profile} />
                      </div>
                      <div className={at.req_profile_info}>
                        <div className="font-DM text-xs font-normal">
                          {data?.name}
                        </div>
                        <div className={at.req_email}>
                          {data.email}{" "}
                          <span className="font-normal text-xs sm:text-base">{data.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className={at.req_btn_box}>
                      <div className={at.cancel_btn}>Cancel</div>
                      <div className={at.approve_btn}>Approve</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminrequest;
