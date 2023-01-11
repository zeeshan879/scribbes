import React from "react";
import { useState } from "react";
import si from "../../Asstes/style/specficInterest.module.css";
import { chnageSpecficInterst } from "../../redux/reducers/scribbes";
import { useSelector, useDispatch } from "react-redux";

const SpecficAbout2Tabs = () => {
  const specficTabs = useSelector(
    (state) => state.allGernalFunction.specficInterestTab
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className={si.tabs2_box}>
        <div
          className={specficTabs === 1 ? si.active_tabs2_items : si.tabs2_items}
          onClick={() => dispatch(chnageSpecficInterst(1))}
        >
          About
        </div>
        <div
          className={specficTabs === 2 ? si.active_tabs2_items : si.tabs_items}
          onClick={() => dispatch(chnageSpecficInterst(2))}
        >
          Home
        </div>
      </div>
    </>
  );
};

export default SpecficAbout2Tabs;
