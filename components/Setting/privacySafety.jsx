import React,{useState} from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import acount from "../../Asstes/Images/acount.png";
import key from "../../Asstes/Images/key.png";
import deactive from "../../Asstes/Images/deactive.png";
import Union from "../../Asstes/Images/Union.png";
import mute from "../../Asstes/Images/mute.png";
import direct from "../../Asstes/Images/direct.png";
import discovery from "../../Asstes/Images/discovery.png";
import mblock from "../../Asstes/Images/mblock.png";
import scv from "../../Asstes/style/setting_center_view.module.css";
import Image from "next/image";
import AudienceTaggingModal from "./AudienceTaggingModal"
import MuteBlockModal from "./muteBlockModal"
import DirectMessagePopUp from "./directMessageModal"
import DiscoveablityContacts from "./discoveryContactModal"

const PrivacyAndSafety = () => {
  const [audienceModal,setAudienceModal]=useState(false)
  const [muteModal,setMuteModal]=useState(false)
  const [directMesageModal,setDirectMesageModal]=useState(false)
  const [discoveryModal,setDiscoveryModal]=useState(false)

	const showAudienceModal=()=>{
		setAudienceModal(!audienceModal)
	}
	const showMuteModal=()=>{
		setMuteModal(!muteModal)
	}
	const showDirectMessageModal=()=>{
		setDirectMesageModal(!directMesageModal)
	}
	const showDiscoveryContactModal=()=>{
		setDiscoveryModal(!discoveryModal)
	}
  return (
    <>
      <div className={scv.content_body}>
        <div className={scv.content_heading}>Privacy and Safety</div>
        <div className={scv.content_text}>
          Manage what information you see and share on Scribbes.
        </div>
        <div className={scv.content_items_box}>
          <div className="flex justify-between w-[100%]">
            <div className="flex gap-[21px]">
              <div>
                <Image src={Union} />
              </div>
              <div>
              <div className="font-DM font-bold text-[16px] md:text-[18px] lg:text-[20px]">
                  Audience Tagging
                </div>
                <div className="font-DM font-normal text-base">
                  Manage what information you allow other people on Scribbes to
                  see..
                </div>
              </div>
            </div>
            <div onClick={()=>showAudienceModal()}>
              <MdOutlineModeEdit className="text-[#BCBCBC] cursor-pointer text-xl" />
            </div>
          </div>

          <div className="flex justify-between w-[100%]">
            <div className="flex gap-[21px]">
              <div>
                <Image src={mblock} />
              </div>
              <div>
                <div className="font-DM font-bold text-[16px] md:text-[18px] lg:text-[20px]">
                  Mute and Block
                </div>
                <div className="font-DM font-normal text-base">
                  Manage who can message you directly.
                </div>
              </div>
            </div>
            <div onClick={()=>showMuteModal()}>
              <MdOutlineModeEdit className="text-[#BCBCBC] cursor-pointer text-xl" />
            </div>
          </div>
          <div className="flex justify-between w-[100%]">
            <div className="flex gap-[21px]">
              <div>
                <Image src={direct} />
              </div>
              <div>
              <div className="font-DM font-bold text-[16px] md:text-[18px] lg:text-[20px]">
                  Direct Messages
                </div>
                <div className="font-DM font-normal text-base">
                  Find out how you can deactivate your scribbes account.
                </div>
              </div>
            </div>
            <div onClick={()=>showDirectMessageModal()}>
              <MdOutlineModeEdit className="text-[#BCBCBC] cursor-pointer text-xl" />
            </div>
          </div>
          <div className="flex justify-between w-[100%]">
            <div className="flex gap-[21px]">
              <div>
                <Image src={discovery} />
              </div>
              <div>
              <div className="font-DM font-bold text-[16px] md:text-[18px] lg:text-[20px]">
                  Discoverability and Contacts
                </div>
                <div className="font-DM font-normal text-base">
                  Control your discoverability settings and manage contacts
                  you’ve imported.
                </div>
              </div>
            </div>
            <div onClick={()=>showDiscoveryContactModal()}>
              <MdOutlineModeEdit className="text-[#BCBCBC] cursor-pointer text-xl" />
            </div>
          </div>
        </div>
      </div>
      <AudienceTaggingModal state={audienceModal} onClick={showAudienceModal} />
      <MuteBlockModal  state={muteModal} onClick={showMuteModal}  />
      <DirectMessagePopUp state={directMesageModal} onClick={showDirectMessageModal} />
      <DiscoveablityContacts state={discoveryModal} onClick={showDiscoveryContactModal} />
    </>
  );
};

export default PrivacyAndSafety;
