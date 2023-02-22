import React from "react";
import { useState } from "react";
import scv from "../../Asstes/style/setting_center_view.module.css";
import { handleScrribsTabs } from "../../redux/reducers/scribbes";
import { useSelector, useDispatch } from "react-redux";

const ScribbedModalTabs = () => {
  const scribbesTabs = useSelector(
    (state) => state.allGernalFunction.scribbesTabs
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className={scv.sb_tabs_box}>
        <div
          className={
            scribbesTabs == 1 ? scv.active_sb_tabs_items : scv.sb_tabs_items
          }
          onClick={() => dispatch(handleScrribsTabs(1))}
        >
          shares
        </div>
        <div
          className={
            scribbesTabs == 2 ? scv.active_sb_tabs_items : scv.sb_tabs_items
          }
          onClick={() => dispatch(handleScrribsTabs(2))}
        >
          Quote Scribbes
        </div>
      </div>
    </>
  );
};

export default ScribbedModalTabs;
