import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import at from "../../Asstes/style/admin_tool.module.css";
import Image from "next/image";
import plusBtn from "../../Asstes/Images/plusBtn.png";
import twoArrow from "../../Asstes/Images/twoArrow.png";
import edit from "../../Asstes/Images/edit.png";
import backscreen from "../../Asstes/Images/backscreen.png";
import dgroup from "../../Asstes/Images/dgroup.png";
import { MdOutlineModeEdit } from 'react-icons/md';

const AdminRulesTab = () => {
  const [lgShow, setLgShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const  handleEditModal=()=>{
	setLgShow(!lgShow)
	setEdit(true)
  }
  const  handleAddModal=()=>{
	setLgShow(!lgShow)
	setEdit(false)
  }
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
  ];

  return (
    <>
      <div className={at.admin_rule_container}>
        <div className="flex justify-between items-center">
          <div className={at.rules_heading} >Rule</div>
          <div className="flex gap-[57px] items-center">
            <div className="cursor-pointer" onClick={() => handleAddModal()}>
              <Image src={plusBtn} />
            </div>
            <div className="cursor-pointer">
              <Image src={twoArrow} />
            </div>
          </div>
        </div>
        <div className={at.rules_text}  >
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
                      <div className="font-DM font-bold text-[20px]">
                        {data.point}
                      </div>
                      <div className="text-base font-DM max-w-[626px]">{data.des}</div>
                    </div>
                  </div>
                  <div className="cursor-pointer min-w-[13px]  " onClick={()=>handleEditModal()}>
                <MdOutlineModeEdit className="text-[#BCBCBC]"/>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Modal
        size="lg"
        centered
        className="post_action_modal"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={at.addRule_modal_heading}>
          <Image
            src={backscreen}
            className="cursor-pointer"
            onClick={() => setLgShow(false)}
          />
		  {
			edit==true?"Edit Rule":"Add Rule"
		  }
  
	
        </div>
        <div className={at.modal_body}>
          <div className={at.add_rule_info}>
            <input className={at.add_rule_ele} placeholder="Rule" />
            <div className="flex justify-end text-xs font-DM font-normal text-black">
              <span className="text-[#1CAC19]">120</span>/350
            </div>
          </div>
          <div className={at.addRule_des_modal}>
            <textarea
              placeholder="Description (optional)"
              className={at.textatea_ele}
            ></textarea>
            <div className="flex justify-end text-xs font-DM font-normal">
              <span className="text-[#1CAC19]">120</span>/350
            </div>
          </div>
          <div className="flex justify-end pt-[30px] sm:pt-[50px]">
            <div className="flex gap-[45px] items-center">
         {edit &&     <div className="cursor-pointer">
                <Image src={dgroup} />
              </div>}
              <div className={at.add_rule_save_btn}>Save</div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdminRulesTab;
