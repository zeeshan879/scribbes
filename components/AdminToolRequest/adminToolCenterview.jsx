import React from "react";
import at from "../../Asstes/style/admin_tool.module.css";
import Image from "next/image";
import backscreen from "../../Asstes/Images/backscreen.png";
import vPost from "../../Asstes/Images/vPost.png";
import { useRouter } from "next/router";
import AdminTabs from "./adminTabs";
import Adminrequest from "./adminrequest";
import AdminMemberTab from "./adminMembersTabs";
import AdminRulesTab from "./adminRulesTab";
import AdminRulesReOrder from "./rulesReorder";
import AdminTool_setingTab from "./adminTool_setingTab";
import { useSelector, useDispatch } from "react-redux";

const AdminToolCenterview = () => {
  const adminToolTabs = useSelector(
    (state) => state.allGernalFunction.adminToolTabs
  );
  const router = useRouter();
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
      <div className={at.admin_wraper}>
        <div className={at.header_wraper}>
          <div
            className="cursor-pointer pt-[5px]  sm:pt-[12px]"
            onClick={() => router.back()}
          >
            <Image src={backscreen} />
          </div>
          <div>
            <div className={at.header_text}>Admin Tools</div>
            <div className="font-DM text-base text-[#BCBCBC]">
              {adminToolTabs == 1
                ? "Requests"
                : adminToolTabs == 2
                ? "Members"
                : adminToolTabs == 3
                ? "Rules"
                : adminToolTabs == 4
                ? "Settings"
                : ""}
            </div>
          </div>
        </div>
        <div className={at.tabs_wraper}>
          <AdminTabs />
        </div>

        {adminToolTabs == 1 ? (
          <Adminrequest />
        ) : adminToolTabs == 2 ? (
          <AdminMemberTab />
        ) : adminToolTabs == 3 ? (
          <AdminRulesTab />
        ) : //  <AdminRulesReOrder />
        adminToolTabs == 4 ? (
          <AdminTool_setingTab />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AdminToolCenterview;
