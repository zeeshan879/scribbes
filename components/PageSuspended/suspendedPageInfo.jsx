import React from "react";
import sp from "../../Asstes/style/suspend_page.module.css";

const SuspendedPageInfo = (props) => {
  return (
    <>
      <div className={sp.main_container}>
        <div className={sp.page_info_box}>
          <div>
            <div className={sp.logo_text}>Scribbes</div>
{  props.state==true?  
        <div>
              <div className="flex justify-center font-grotesk font-bold text-[30px]">
                Page Suspended{" "}
              </div>
              <div className="font-DM text-[20px] text-[#BCBCBC] pt-[10px] ">
                Scribbes suspended page which violate the{" "}
                <span className="text-[#1CAC19]">Scribbes rules</span>{" "}
              </div>
            </div>:
            <div>
              <div className="flex justify-center font-grotesk font-bold text-[30px]">
                No result for “Username/PageName”
              </div>
              <div className="font-DM text-[20px] max-w-[600px] text-[#BCBCBC] pt-[10px] ">
                Try searching for something else, or check your Search settings
                to see if they’re protecting you from potentially sensitive
                content.
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuspendedPageInfo;
