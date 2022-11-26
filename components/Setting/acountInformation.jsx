import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import acount from "../../Asstes/Images/acount.png";
import key from "../../Asstes/Images/key.png";
import deactive from "../../Asstes/Images/deactive.png";
import scv from "../../Asstes/style/setting_center_view.module.css";
import Image from "next/image";
import AcountInformationModal from "./acountInformationModal";
import { useState } from "react";
import ChnagePassword from "./changePasswordModal";
import DeactivateAccounts from "./deactiveAccountModal"

const AcountInformation = () => {
  const [acountModal, setAccountModal] = useState(false);
  const [change, setChnage] = useState(false);
  const [deactivate, setDeactivate] = useState(false);

  const showAccountModal = () => {
    setAccountModal(!acountModal);
  };
  const changePass = () => {
    setChnage(!change);
  };
  const handleDeactivate = () => {
    setDeactivate(!deactivate);
  };

  return (
    <>
      <div className={scv.content_body}>
        <div className={scv.content_heading}>Your Account</div>
        <div className={scv.content_text}>
          See information about your account, account safety or learn about your
          account deactivation options.{" "}
        </div>
        <div className={scv.content_items_box}>
          <div className="flex justify-between w-[100%]">
            <div className="flex gap-[21px]">
              <div>
                <Image src={acount} />
              </div>
              <div>
                <div className="font-DM font-bold text-[20px]">
                  Account Information
                </div>
                <div className="font-DM font-normal text-base">
                  See your account information like phone number and email
                  address.{" "}
                </div>
              </div>
            </div>
            <div onClick={() => showAccountModal()}>
              <MdOutlineModeEdit className="text-[#BCBCBC] cursor-pointer text-xl" />
            </div>
          </div>

          <div className="flex justify-between w-[100%]">
            <div className="flex gap-[21px]">
              <div>
                <Image src={key} />
              </div>
              <div>
                <div className="font-DM font-bold text-[20px]">
                  Change Your Password
                </div>
                <div className="font-DM font-normal text-base">
                  Change your Password any time.
                </div>
              </div>
            </div>
            <div onClick={()=>changePass()}>
              <MdOutlineModeEdit className="text-[#BCBCBC] cursor-pointer text-xl" />
            </div>
          </div>
          <div className="flex justify-between w-[100%]">
            <div className="flex gap-[21px]">
              <div>
                <Image src={deactive} />
              </div>
              <div>
                <div className="font-DM font-bold text-[20px]">
                  Deactivate Your Account
                </div>
                <div className="font-DM font-normal text-base">
                  Find out how you can deactivate your scribbes account.
                </div>
              </div>
            </div>
            <div onClick={()=>handleDeactivate()}>
              <MdOutlineModeEdit className="text-[#BCBCBC] cursor-pointer text-xl" />
            </div>
          </div>
        </div>
      </div>
      <AcountInformationModal state={acountModal} onClick={showAccountModal} />
      <ChnagePassword state={change} onClick={changePass} />
      <DeactivateAccounts state={deactivate} onClick={handleDeactivate}  />
    </>
  );
};

export default AcountInformation;
