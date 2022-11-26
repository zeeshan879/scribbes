import React from "react";
import at from "../../Asstes/style/admin_tool.module.css";
import Image from "next/image";
import backscreen from "../../Asstes/Images/backscreen.png";
import vPost from "../../Asstes/Images/vPost.png";
import { useRouter } from "next/router";
import AdminTabs from "./adminTabs";
import si from "../../Asstes/style/specficInterest.module.css";
import mem1 from "../../Asstes/Images/mem1.png";
import mem2 from "../../Asstes/Images/mem2.png";
import mem3 from "../../Asstes/Images/mem3.png";
import MemberOptionToggle from "./memberOptionToggle";
import postAction from "../../Asstes/Images/postAction.png";

const AdminMemberTab = () => {
  const newReq = [
    {
      profile: vPost,
      status: "admin",
      email: "@mikesomeoneuser",
    },
    {
      profile: vPost,
      status: "admin",
      email: "@mikesomeoneuser",
    },
    {
      profile: vPost,
      status: "admin",
      email: "@mikesomeoneuser",
    },
    {
      status: "admin",
      profile: vPost,
      email: "@mikesomeoneuser",
    },
    {
      status: "admin",
      profile: vPost,
      email: "@mikesomeoneuser",
    },
    {
      status: "admin",
      profile: vPost,
      email: "@mikesomeoneuser",
    },
    {
      status: "admin",
      profile: vPost,
      email: "@mikesomeoneuser",
    },
  ];
  return (
    <>
      <div>
        <div className={at.admin_body}>
          <div className="flex gap-[15px] items-center font-DM text-base font-bold">
            <div className="flex items-center relative">
              <div className={si.mem1}>
                <Image src={mem1} />
              </div>
              <div className={si.mem2}>
                <Image src={mem2} />
              </div>
              <div className={si.mem3}>
                <Image src={mem3} />
              </div>
              <div className={si.mem4}>
                <Image src={mem1} />
              </div>
            </div>
            <div className="ml-[90px]"> 256 Members</div>
          </div>
          <div className={at.total_req}>
            {newReq.map((data) => {
              return (
                <>
                  <div className={at.mem_req_div}>
                    <div className={at.member_profile}>
                      <div>
                        <Image src={data.profile} />
                      </div>
                      <div className={at.email_status_box}>
                        <div className={at.req_email}>{data.email} </div>
                        <div className={at.mem_admin_btn}>{data.status}</div>
                      </div>
                    </div>
                    <div className={at.remove_cancel_box}>
                      <div>
                        <MemberOptionToggle />
                      </div>

                      <div className={at.cancel_btn}>Remove</div>
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

export default AdminMemberTab;
