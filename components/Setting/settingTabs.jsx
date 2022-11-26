import React from "react";
import { useState } from "react";
import scv from "../../Asstes/style/setting_center_view.module.css";
import { handleSettingTabs } from "../../redux/reducers/scribbes";
import { useSelector, useDispatch } from "react-redux";

const SettingTabs = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const settingTabs = useSelector(
    (state) => state.allGernalFunction.settingTabs
  );
  return (
    <div className={scv.tabs_box}>
      <div
        className={settingTabs === 1 ? scv.active_tabs_items : scv.tabs_items}
        onClick={() => dispatch(handleSettingTabs(1))}
      >
        Your Account
      </div>
      <div
        className={settingTabs === 2 ? scv.active_tabs_items : scv.tabs_items}
        onClick={() => dispatch(handleSettingTabs(2))}
      >
        Privacy & Safety
      </div>
      <div
        className={settingTabs === 3 ? scv.active_tabs_items : scv.tabs_items}
        onClick={() => dispatch(handleSettingTabs(3))}
      >
        Notifications
      </div>
    </div>
  );
};

export default SettingTabs;
