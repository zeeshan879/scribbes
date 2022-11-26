import React from "react";
import { useState } from "react";
import scv from "../../Asstes/style/setting_center_view.module.css";

const ScribbedModalTabs = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className={scv.sb_tabs_box}>
        <div
          className={active == 1 ? scv.active_sb_tabs_items : scv.sb_tabs_items}
          onClick={() => setActive(1)}
        >
          Shares
        </div>
        <div
          className={active == 2 ? scv.active_sb_tabs_items : scv.sb_tabs_items}
          onClick={() => setActive(2)}
        >
          Quote Scribbes
        </div>
      </div>
    </>
  );
};

export default ScribbedModalTabs;
