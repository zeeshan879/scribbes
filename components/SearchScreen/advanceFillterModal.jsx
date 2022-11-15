import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import backscreen from "../../Asstes/Images/backscreen.png";
import dateIcon from "../../Asstes/Images/dateIcon.png";
import Image from "next/image";

const AdvanceFillterModal = (props) => {
  console.log("search flter modal", props);

  return (
    <>
      <Modal className="post_action_modal" show={props?.state} onHide={props.onClick} centered>
        <div className={rbar.advnce_fillter_header}>
          <div className="cursor-pointer" onClick={props.onClick}>
            <Image src={backscreen} />
          </div>
          Filter Settings
        </div>
        <div className={rbar.f_body}>
          <div className={rbar.filter_inputs}>
            <input placeholder="Exact Search Term" className={rbar.input_ele} />
          </div>
          <div className={rbar.filter_inputs}>
            <input
              placeholder="Any of these words"
              className={rbar.input_ele}
            />
          </div>
          <div className={rbar.filter_inputs}>
            <input placeholder="Exclude Words" className={rbar.input_ele} />
          </div>
          <div className="font-DM text-base font-bold mt-[32px] pl-[20px]">
            Date
          </div>
          <div className={rbar.from_box}>
            <div className="font-DM text-xs font-normal  pl-[20px]">From</div>
            <div className={rbar.small_inputs_wrap}>
              <div className={rbar.filter_dates}>
                <div>Month</div>
                <div>
                  <Image src={dateIcon} />
                </div>
              </div>
              <div className={rbar.filter_dates}>
                <div>Month</div>
                <div>
                  <Image src={dateIcon} />
                </div>
              </div>
              <div className={rbar.filter_dates}>
                <div>Month</div>
                <div>
                  <Image src={dateIcon} />
                </div>
              </div>
            </div>
            <div className="font-DM text-xs font-normal mt-[20px]  pl-[20px]">To</div>
            <div className={rbar.small_inputs_wrap}>
              <div className={rbar.filter_dates}>
                <div>Month</div>
                <div>
                  <Image src={dateIcon} />
                </div>
              </div>
              <div className={rbar.filter_dates}>
                <div>Month</div>
                <div>
                  <Image src={dateIcon} />
                </div>
              </div>
              <div className={rbar.filter_dates}>
                <div>Month</div>
                <div>
                  <Image src={dateIcon} />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className={rbar.filter_form_sep}></div>
        <div className="flex justify-end pt-[25px] pb-[20px] px-[39px]">
          <div className={rbar.apply_fillter}>Apply Filters</div>
        </div>
      </Modal>
    </>
  );
};

export default AdvanceFillterModal;
