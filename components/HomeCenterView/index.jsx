import React from "react";
import profile from "../../Asstes/Images/profile.png";
import imgV  from "../../Asstes/Images/imgV.png";
import LinkV  from "../../Asstes/Images/LinkV.png";
import gifV  from "../../Asstes/Images/gifV.png";
import Image from "next/image";
const HomeCenterView = () => {
  return (
    <>
      <div className="border-r-[2px] border-[#BCBCBC]">
        <div className="pt-[16px] pb-[20px] pl-[17px]  pr-[17px] border-b-[2px] border-[#BCBCBC]">
          <div className="w-[999px] h-[199px] bg-white shadow-profile rounded-[30px]">
            <div className="pt-[35px] pl-[41px] pr-[41px]   flex items-center gap-[23px]">
              <div>
                <Image src={profile} />
              </div>
              <div className="font-DM font-normal text-[20px] text-[#BCBCBC]">
                Share your thoughts...
              </div>
            </div>
            <div className="mt-[25px] ml-[44px] mr-[41px] border-b-[2px] border-[#BCBCBC]"></div>
			<div className="pt-[19px] pl-[128px] pr-[41px] flex justify-between items-center">
				<div className="flex gap-[16px] items-center">
					<div className="h-[37px] w-[37px] shadow-profile rounded-[50%] border-[1px] border-[#BCBCBC] flex justify-center items-center">
						<Image src={imgV} />
					</div>
					<div className="h-[37px] w-[37px] shadow-profile rounded-[50%] border-[1px] border-[#BCBCBC] flex justify-center items-center">
						<Image src={LinkV} />
					</div>
					<div className="h-[37px] w-[37px] shadow-profile rounded-[50%] border-[1px] border-[#BCBCBC] flex justify-center items-center">
						<Image src={gifV} />
					</div>
				</div>
				<div className="h-[39px] w-[144px] rounded-[41px] flex justify-center cursor-pointer items-center bg-action text-white">Post</div>
			</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCenterView;
