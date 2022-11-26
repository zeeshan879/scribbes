import React from "react";
import { useState } from "react";
import si from "../../Asstes/style/specficInterest.module.css";
import { chnageSpecficInterst } from "../../redux/reducers/scribbes";
import { useSelector,useDispatch } from "react-redux";

const Specfictabs = () => {
  const specficTabs = useSelector(
    (state) => state.allGernalFunction.specficInterestTab
  );
  const dispatch=useDispatch()
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className={si.tabs_box}>
        <div
          className={specficTabs === 1 ? si.active_tabs_items : si.tabs_items}
          onClick={() => dispatch(chnageSpecficInterst(1))}
        >
          About
        </div>
        <div
          className={specficTabs === 2 ? si.active_tabs_items : si.tabs_items}
          onClick={() => dispatch(chnageSpecficInterst(2))}
        >
          Discussions
        </div>
        <div
          className={specficTabs === 3 ? si.active_tabs_items : si.tabs_items}
          onClick={() => dispatch(chnageSpecficInterst(3))}
        >
          Blogs
        </div>
        <div
          className={specficTabs === 4 ? si.active_tabs_items : si.tabs_items}
          onClick={() => dispatch(chnageSpecficInterst(4))}
        >
          Media
        </div>
        <div
          className={specficTabs === 5 ? si.active_tabs_items : si.tabs_items}
          onClick={() => dispatch(chnageSpecficInterst(5))}
        >
          Members
        </div>
      </div>
    </>
  );
};

export default Specfictabs;
