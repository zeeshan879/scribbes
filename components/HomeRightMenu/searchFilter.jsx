import React,{useState} from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import AdvanceFillterModal from "../SearchScreen/advanceFillterModal"

const SearchFillter = () => {
	const [show, setShow] = useState(false);
	const  showModale=()=>{
		setShow(!show)
	}
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
          <div className="font-bold font-DM text-base mt-[16px]">Users</div>
          <div className={rbar.fillter_content}>
            <div className="flex justify-between items-center ">
              <div className="font-DM font-normal ">Anyone</div>
              <div>
                <input
                  class="rounded-checkbox accent-[#1CAC19]"
                  type="checkbox"
                  checked
                />{" "}
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div>Followed Users</div>
              <div>
                <input
                  class="rounded-checkbox accent-[#1CAC19]"
                  type="checkbox"
                />{" "}
              </div>
            </div>
          </div>
          <div className={rbar.advance_filter} onClick={()=>showModale()}>Advanced Filters</div>
        </div>
      </div>
	  <AdvanceFillterModal state={show} onClick={showModale} />
    </>
  );
};

export default SearchFillter;
