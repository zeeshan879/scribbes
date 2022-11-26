import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import at from "../../Asstes/style/admin_tool.module.css";
import uploadIcon from "../../Asstes/Images/uploadIcon.png";
import dgroup from "../../Asstes/Images/dgroup.png";
import edit from "../../Asstes/Images/edit.png";
import Image from "next/image";
import backscreen from "../../Asstes/Images/backscreen.png";
import { MdOutlineModeEdit } from "react-icons/md";

const AdminTool_setingTab = () => {
  const [lgShow, setLgShow] = useState(false);
  const [description, setDescription] = useState(false);
  const [type, setType] = useState(false);

  const handleAddModal = () => {
    setLgShow(!lgShow);
  };
  return (
    <>
      <div className={at.setting_wrapper}>
        <div className={at.setting_bannder_wraper}>
          <div className={at.upload_image_box}>
            <Image src={uploadIcon} />
          </div>
          <div className={at.banner_content}>NBA Discussions</div>
        </div>
        <div className={at.seting_info}>
          <div className={at.group_heaing}>Group Information</div>

          <div className="flex justify-between">
            <div>
              <div className={at.group_name}>Group Name</div>
              <div className="font-DM text-sm text-[#BCBCBC]">
                NBA Discussions
              </div>
            </div>
            <div
              className="pt-[25px] cursor-pointer"
              onClick={() => handleAddModal()}
            >
              <MdOutlineModeEdit className="text-[#BCBCBC]" />
            </div>
          </div>
          <div className="flex justify-between pt-[26px]">
            <div>
              <div className={at.group_name}>Description</div>
              <div className="font-DM text-sm text-[#BCBCBC]">
                Lorem ipsum to get more information....
              </div>
            </div>
            <div
              className="pt-[25px] cursor-pointer"
              onClick={() => setDescription(true)}
            >
              <MdOutlineModeEdit className="text-[#BCBCBC]" />
            </div>
          </div>
        </div>
        <div className={at.membership_box}>
          <div className={at.group_heaing}>Membership</div>
          <div className="flex justify-between pt-[34px]">
            <div>
              <div className={at.group_name}>Membership Type</div>

              <div className="font-DM text-sm text-[#BCBCBC]">Restricted</div>
            </div>
            <div
              className="pt-[25px] cursor-pointer"
              onClick={() => setType(true)}
            >
              <MdOutlineModeEdit className="text-[#BCBCBC]" />
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer justify-center text-base font-DM text-[#FF0000] pt-[44px] gap-[8px]">
          <div className="cursor-pointer">
            <Image src={dgroup} />
          </div>
          Delete Group
        </div>
      </div>
      {/*<=======Edit Name====>*/}
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
          Edit Group Name
        </div>
        <div className={at.edit_grup_modal}>
          <div className={at.add_rule_info}>
            <input className={at.add_rule_ele} placeholder="Group Name" />
            <div className="flex justify-end text-xs font-DM font-normal text-black">
              <span className="text-[#1CAC19]">120</span>/350
            </div>
          </div>
          <div className="flex justify-end pt-[40px] sm:pt-[66px]">
            <div className="flex gap-[45px] items-center">
              <div className={at.add_rule_save_btn}>Save</div>
            </div>
          </div>
        </div>
      </Modal>
      {/*<=======Edit Description====>*/}
      <Modal
        size="lg"
        centered
        className="post_action_modal"
        show={description}
        onHide={() => setDescription(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={at.addRule_modal_heading}>
          <Image
            src={backscreen}
            className="cursor-pointer"
            onClick={() => setDescription(false)}
          />
          Edit Description
        </div>
        <div className={at.edit_grup_modal}>
          <div className={at.edit_group_des_box}>
            <textarea
              className={at.edit_des_ele}
              placeholder="Description"
            ></textarea>
            <div className="flex justify-end text-xs font-DM font-normal text-black">
              <span className="text-[#1CAC19]">120</span>/350
            </div>
          </div>
          <div className="flex justify-end pt-[40px] sm:pt-[66px]">
            <div className="flex gap-[45px] items-center">
              <div className={at.add_rule_save_btn}>Save</div>
            </div>
          </div>
        </div>
      </Modal>
      {/*<=======Edit MembershipType====>*/}
      <Modal
        size="lg"
        centered
        className="post_action_modal"
        show={type}
        onHide={() => setType(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={at.membership_type_m_heading}>
          <div>
            <Image
              src={backscreen}
              className="cursor-pointer"
              onClick={() => setType(false)}
            />
          </div>
          <div>
            {" "}
            Edit Membership Type
            <div className="text-xs  lg:text-base text-[#BCBCBC] font-DM font-normal">
              Who can join your Group? Keep in mind all groups are visible to
              everyone on Scribbe.
            </div>
          </div>
        </div>
        <div className={at.membership_content_div}>
          <div className="flex justify-between ">
            <div>
              <div className={at.membership_modal_text}>Open</div>
              <div className={at.membership_modal_subtext}>
                Anyone can join and/or be invited to the Group.
              </div>
            </div>
            <div>
              <div className="pt-[5px]">
                <input
                  class="rounded-checkbox accent-[#1CAC19]"
                  type="checkbox"
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-between  pt-[50px]">
            <div>
              <div className={at.membership_modal_text}>Restricted</div>
              <div className={at.membership_modal_subtext}>
                People must ask to join, and the mod team must approve those
                requests. People invited by the mod team are automatically
                approved.
              </div>
            </div>
            <div>
              <div className="pt-[5px]">
                <input
                  class="rounded-checkbox accent-[#1CAC19]"
                  type="checkbox"
                  checked
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-between  pt-[44px]">
            <div>
              <div className={at.membership_modal_text}>
                Allow members to issue invitations
              </div>
              <div className={at.membership_modal_subtext}>
                People invited by existing members are automatically approved.
              </div>
            </div>
            <div>
              <div>
                <input
                  class="rounded-checkbox accent-[#1CAC19]"
                  type="checkbox"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={at.edit_memship_type_modal}>
          <div className={at.membership_modal_text}>Who can make post</div>
          <div className="flex justify-between items-center pt-[45px]">
            <div>
              <div className={at.membership_modal_text}>Anyone</div>
            </div>
            <div>
              <div className="pt-[5px]">
                <input
                  class="rounded-checkbox accent-[#1CAC19]"
                  type="checkbox"
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-[25px]">
            <div>
              <div className={at.membership_modal_text}>Only admins</div>
            </div>
            <div>
              <div>
                <input
                  class="rounded-checkbox accent-[#1CAC19]"
                  type="checkbox"
                  checked
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-[60px]">
            <div className={at.add_rule_save_btn}>Save</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdminTool_setingTab;
