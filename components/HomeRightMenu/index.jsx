import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import TrendingInterst from "./trendingInterst";
import TrendingTopics from "./trendingTopics";
import TrendingVedios from "./trendingVedios";
import ComunicationWithVideos from "./comunicationMostVideos";
import ProfilePosting from "./profilePosting";
import Filtersetting from "./filter_setting";
import { handelValue } from "../../redux/reducers/scribbes";
import { useSelector,useDispatch } from "react-redux";
import Router from 'next/router'

const HomeRightmenu = (props) => {
  const reDirectFunction = (event) => {
    if (event.key === "Enter" && searchView != "") {

      Router.push("/search-screen")
    }
  };
  const searchView = useSelector((state) => state.allGernalFunction.searchView);
  const sendValue = (e) => {
    dispatch(handelValue(e.target.value));
  };
  const dispatch=useDispatch()

  return (
    <>
      <div className={rbar.right_bar_wrap}>
        <div className={rbar.serch_box_wrap}>
          <input
            className={rbar.seach_bar_ele}
            value={searchView}
            placeholder="Search "
            onKeyPress={(e) => reDirectFunction(e)}
            onChange={sendValue}
          />
        </div>
        <TrendingInterst />
        <TrendingVedios />
      </div>
    </>
  );
};

export default HomeRightmenu;
