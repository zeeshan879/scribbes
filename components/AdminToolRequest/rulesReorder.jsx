import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import at from "../../Asstes/style/admin_tool.module.css";
import Image from "next/image";
import plusBtn from "../../Asstes/Images/plusBtn.png";
import twoArrow from "../../Asstes/Images/twoArrow.png";
import edit from "../../Asstes/Images/edit.png";
import reorder from "../../Asstes/Images/reorder.png";

const AdminRulesReOrder = () => {

  const rules = [
    {
      point: "	Show Respect to others",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      point: "No Promotion or Spam",
      des: "Minime vero istorum quidem, inquit. Bonum patria: miserum exilium. Itaque ad tempus ad Pisonem omnes. Duo Reges: constructio interrete.",
    },
    {
      point: "Effetive Communication",
      des: "Honesta oratio, Socratica, Platonis etiam. Age sane, inquam. Compensabatur, inquit, cum summis doloribus laetitia.",
    },
    {
      point: "  No Hate Speach and Bullying",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      point: "Respect Everyone’s Privacy",
      des: "Minime vero istorum quidem, inquit. Bonum patria: miserum exilium. Itaque ad tempus ad Pisonem omnes. Duo Reges: constructio interrete.",
    },
    {
      point: "Dont Follow Any Rule",
      des: "Just Chill.",
    },
  ];

  return (
    <>
      <div className={at.admin_rule_container}>
        <div className="flex justify-between items-center">
          <div className={at.rules_heading}>Rule</div>
          <div className="flex gap-[57px] items-center">
            <div className={at.rules_done_btn}>Done</div>
          </div>
        </div>
        <div className={at.rules_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minime vero
          istorum quidem, inquit. Bonum patria: miserum exilium.
        </div>

        <div className={at.rules_div}>
          {rules.map((data, index) => {
            return (
              <>
                <div className="flex justify-between">
                  <div className="flex gap-[19px]">
                    <div className={at.rules_indicator}>{index + 1}</div>
                    <div>
                      <div className="font-DM font-bold text-[18px] sm:text-[20px]">
                        {data.point}
                      </div>
                      <div className="text-base font-DM max-w-[625px]">
                        {data.des}
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <Image src={reorder} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default AdminRulesReOrder;
