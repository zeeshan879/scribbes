import React from "react";
import nc from "../../Asstes/style/new_community.module.css";
import CommunityInformation from "./communityInformation";
import DeskTopPreview from "./deskTopPreview"

const CreateNewCommunity = () => {
  return (
    <>
      <div className={nc.content_wraper} id="style-desk">
        <div>
          <CommunityInformation />
        </div>
        <div className="w-[100%]">
          <DeskTopPreview/>
        </div>
      </div>
    </>
  );
};

export default CreateNewCommunity;
