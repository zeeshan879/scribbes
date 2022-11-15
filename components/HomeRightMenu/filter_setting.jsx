import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";

const Filtersetting = () => {
  return (
    <>
      <div className={rbar.fillter_wraper}>
        <div className={rbar.filter_heading}>Filter Settings</div>
        <div className={rbar.filter_body}>
          <div className="font-bold font-DM text-base">Content Filter</div>
          <div className={rbar.fillter_content}>
            <div className="flex justify-between items-center ">
              <div className="font-DM font-normal">All Content</div>
              <div>
                <input
                  class="rounded-checkbox accent-[#1CAC19]"
                  type="checkbox"
                  checked
                />{" "}
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div>Photos</div>
              <div>
                <input
                  class="rounded-checkbox accent-[#1CAC19]"
                  type="checkbox"
                />{" "}
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div>Videos</div>
              <div>
                <input
                  class="rounded-checkbox accent-[#1CAC19]"
                  type="checkbox"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filtersetting;
