import React from "react";
import vp from "../../Asstes/style/varify_Profile.module.css";
import chose from "../../Asstes/Images/chose.png";
import Image from "next/image";

const VerifyProfileStep2 = () => {
  return (
    <>
      <div className={vp.verify_profile_step2}>
        <div className="text-[18px] sm:text-[20px] font-DM font-bold">
          Step 2: Confirm notability
        </div>
        <div className="max-w-[900px] text-base font-DM leading-5 pt-3">
          Show that the public figure, celebrity or profile represents is in the
          public interest.
        </div>
        <div className="pt-[16px] text-base font-DM font-bold">Category</div>
        <div className={vp.step1_driving_license}>
          <div className="font-DM">Sports</div>
          <div>
            <Image src={chose} />
          </div>
        </div>
		<div className="pt-[21px] text-base font-DM font-bold">Country/Region</div>
		<div className="text-base font-DM leading-5 pt-3 text-[#BCBCBC]">
		Enter the country or region where the person’s profile represents is most popular.
		</div>
		<div className={vp.form_item}>
			<input className={vp.form_ele} placeholder="Enter country name" />
		</div>
		<div className="pt-[22px] text-base font-DM font-bold">Audience (optional)</div>
		<div className="text-base font-DM leading-5 pt-3 text-[#BCBCBC]">
		Describe the people who follow you. Include who they are, what they re interested in and why they follow you.
		</div>
		<div className={vp.form_item}>
			<input className={vp.form_ele} placeholder="Describe..." />
		</div>
		<div className="pt-[22px] text-base font-DM font-bold">Also known as (optional)</div>
		<div className="text-base font-DM leading-5 pt-3 text-[#BCBCBC]">
		List all the names the person profile represents is known by. Include different names and the same name in other languages.
		</div>
		<div className={vp.form_item}>
			<input className={vp.form_ele} placeholder="Describe..." />
		</div>
		<div className="max-w-[1000px] text-base font-DM leading-5 pt-3">
		Add up to 5 articles, social media accounts and other links that show your profile is in the public interest. Paid or promotional content won’t 
be considered. (Optional)
        </div>
		<div className={vp.form_item_link}>
			<input className={vp.form_ele} placeholder="Link 1" />
		</div>
		<div className={vp.form_item_link}>
			<input className={vp.form_ele} placeholder="Link 2" />
		</div>
		<div className={vp.form_item_link}>
			<input className={vp.form_ele} placeholder="Link 3" />
		</div>
		<div className={vp.form_item_link}>
			<input className={vp.form_ele} placeholder="Link 4" />
		</div>
		<div className={vp.form_item_link}>
			<input className={vp.form_ele} placeholder="Link 5" />
		</div>
		<div className="pt-[22px] text-base text-[#BCBCBC] font-DM">
		Verified profiles.<span className="text-[#1CAC19] underline cursor-pointer"> Learn more</span>
		</div>
		<div className="flex justify-end">
			<div className={vp.step2_save_btn}>Send</div>
		</div>
      </div>
    </>
  );
};

export default VerifyProfileStep2;
