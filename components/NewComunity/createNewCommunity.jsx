import React from "react";
import nc from "../../Asstes/style/new_community.module.css";
import CommunityInformation from "./communityInformation";

const CreateNewCommunity = () => {
  return (
    <>
      <div className={nc.content_wraper}>
        <div>
          <CommunityInformation />
        </div>
        <div>uiogh</div>
      </div>
    </>
  );
};

export default CreateNewCommunity;
