import React from "react";
import profile from "../../Asstes/Images/profile.png";
import arrowUp from "../../Asstes/Images/arrowUp.png";
import homeV from "../../Asstes/Images/homeV.png";
import vedioV from "../../Asstes/Images/vedioV.png";
import com from "../../Asstes/Images/com.png";
import fireV from "../../Asstes/Images/fireV.png";
import noti from "../../Asstes/Images/noti.png";
import explor from "../../Asstes/Images/explor.png";
import userV from "../../Asstes/Images/userV.png";
import msgV from "../../Asstes/Images/msgV.png";
import setV from "../../Asstes/Images/setV.png";
import Image from "next/image";

const HomeLeftMenu = () => {
  return (
    <>
      <div className="w-[330px] bg-white shadow-sideBar">
        <div className="flex pt-[35px] justify-center text-heading text-action font-bold font-sans tracking-[-0.085em] ">
          Scribbes
        </div>
        <div className="pt-[53px]  pl-[36px]">
          <div className="w-[249px] h-[92px] rounded-[20px] border-[1.2px] border-[#BCBCBC] py-[14px] px-[16px]">
            <div className="flex gap-[17px] items-center">
              <div>
                <Image src={profile} />
              </div>
              <div>
                <div className="font-DM font-medium text-[20px] text-[#000580] leading-[26px]">
                  John Doe
                </div>
                <div className="font-DM font-normal text-[12px] text-black">
                  @JohnDoeuser
                </div>
                <div className="flex gap-[12px] items-center text-[#BCBCBC] font-DM font-normal text-xs">
                  190 Followers{" "}
                  <div className="flex gap-[4px] items-center">
                    <Image src={arrowUp} /> 256
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
		<div className="mt-[36px] pl-[56px] flex flex-col gap-[36px]">
			<div className="flex items-center gap-[14px]">
				<div>
					<Image src={homeV} />
				</div>
				<div className="text-[24px] text-action font-bold cursor-pointer">Home</div>
			</div>
			<div className="flex items-center gap-[14px]">
				<div>
					<Image src={vedioV} />
				</div>
				<div className="text-[24px]  text-black font-bold cursor-pointer">Videos</div>
			</div>
			<div className="flex items-center gap-[14px]">
				<div>
					<Image src={com} />
				</div>
				<div className="text-[24px]  text-black font-bold cursor-pointer">Communities</div>
			</div>
			<div className="flex items-center gap-[14px]">
				<div>
					<Image src={fireV} />
				</div>
				<div className="text-[24px]  text-black font-bold cursor-pointer">Trending</div>
			</div>
			<div className="flex items-center gap-[14px]">
				<div>
					<Image src={noti} />
				</div>
				<div className="text-[24px]  text-black font-bold cursor-pointer">Notifications</div>
			</div>
			<div className="flex items-center gap-[14px]">
				<div>
					<Image src={explor} />
				</div>
				<div className="text-[24px]  text-black font-bold cursor-pointer">Explore</div>
			</div>
			<div className="flex items-center gap-[14px]">
				<div>
					<Image src={userV} />
				</div>
				<div className="text-[24px]  text-black font-bold cursor-pointer">Profile</div>
			</div>
			<div className="flex items-center gap-[14px]">
				<div>
					<Image src={msgV} />
				</div>
				<div className="text-[24px]  text-black font-bold cursor-pointer">Messages</div>
			</div>
			<div className="flex items-center gap-[14px]">
				<div>
					<Image src={setV} />
				</div>
				<div className="text-[24px] text-black font-bold cursor-pointer">Settings</div>
			</div>

		</div>
		<div className="flex justify-center pt-[61px] pb-[109px]">
<div className="flex justify-center items-center cursor-pointer bg-action text-white w-[282px] h-[63px] rounded-[41px] text-[24px] font-DM font-bold">Make a post</div>
		</div>
      </div>
    </>
  );
};

export default HomeLeftMenu;
