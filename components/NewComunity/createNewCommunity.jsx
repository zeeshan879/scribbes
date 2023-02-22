import React from "react";
import nc from "../../Asstes/style/new_community.module.css";
import CommunityInformation from "./communityInformation";
import DeskTopPreview from "./deskTopPreview"

const CreateNewCommunity = () => {
  return (
    <>
      <div className={nc.content_wraper} >
   
          <CommunityInformation />
          <DeskTopPreview/>
   
      </div>
    </>
  );
};

export default CreateNewCommunity;
