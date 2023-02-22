import React from "react";
import nc from "../../Asstes/style/add_community.module.css";
import screen from "../../Asstes/images/screen.png";
import mobile from "../../Asstes/images/mobile.png";
import upload_profile from "../../Asstes/images/upload_profile.png";
import Image from "next/image";
import { useState } from "react";
import { handleDeskTopView } from "../../redux/reducers/scribbes";
import { useDispatch, useSelector } from "react-redux";
import { FaDesktop } from "react-icons/fa";
import { ImMobile } from "react-icons/im";

const DeskTopPreview = () => {
  const [activeTab, setActiveTab] = useState(1);
  const changeView = useSelector(
    (state) => state.allGernalFunction.mobileDesktopView
  );
  const dispatch = useDispatch();
  const [dragActive, setDragActive] = React.useState(false);
  console.log("upload image====>",dragActive)
  const inputRef = React.useRef(null);
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div
        className={
          changeView === true ? nc.desktop_preview : nc.desktop_preview_mbl_view
        }
      >
        <div className={nc.desk_prev_heading}>
          <div>Desktop Preview</div>
          <div className="flex items-center gap-[19px]">
            <div
              className="cursor-pointer"
              onClick={() => dispatch(handleDeskTopView(true))}
            >
              <FaDesktop
                className={
                  changeView === true ? nc.active_desktop_icon : nc.desktop_icon
                }
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => dispatch(handleDeskTopView(false))}
            >
              <ImMobile
                className={
                  changeView === false
                    ? nc.active_desktop_icon
                    : nc.desktop_icon
                }
              />
            </div>
          </div>
        </div>
        <div
          className={
            changeView === true ? nc.upload_profile : nc.upload_profile_mbl
          }
        >
          <form
            id="form-file-upload"
            onDragEnter={handleDrag}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={inputRef}
              type="file"
              id="input-file-upload"
              multiple={true}
              onChange={handleChange}
            />
            <label
              id="label-file-upload"
              htmlFor="input-file-upload"
              className={dragActive ? "drag-active" : ""}
            >
              <div>
                <button className="upload-button" onClick={onButtonClick}>
                  <Image src={upload_profile} />
                </button>
              </div>
            </label>
            {dragActive && (
              <div
                id="drag-file-element"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              ></div>
            )}
          </form>
        </div>
        <div className={nc.community_category}>
          <div className="font-DM font-bold text-[20px] text-[#000580]">
            Community Name
          </div>
          <div className="pt-[13px] flex items-center gap-[12px] text-[#BCBCBC] text-base font-DM">
            <div>Category. </div>
            <div>Privacy. </div>
            <div>Members. 1</div>
          </div>
        </div>
        <div
          className={
            changeView === true ? nc.desktop_tabs : nc.desktop_tabs_mbl
          }
        >
          <div
            className={
              activeTab == 1
                ? changeView === true
                  ? nc.active_tabs_items
                  : nc.active_tabs_items_mbl
                : changeView === true
                ? nc.tabs_items
                : nc.tabs_items_mbl
            }
            onClick={() => setActiveTab(1)}
          >
            Scribbes
          </div>
          <div
            className={
              activeTab == 2
                ? changeView === true
                  ? nc.active_tabs_items
                  : nc.active_tabs_items_mbl
                : changeView === true
                ? nc.tabs_items
                : nc.tabs_items_mbl
            }
            onClick={() => setActiveTab(2)}
          >
            About
          </div>
          <div
            className={
              activeTab == 3
                ? changeView === true
                  ? nc.active_tabs_items
                  : nc.active_tabs_items_mbl
                : changeView === true
                ? nc.tabs_items
                : nc.tabs_items_mbl
            }
            onClick={() => setActiveTab(3)}
          >
            Photos
          </div>
          <div
            className={
              activeTab == 4
                ? changeView === true
                  ? nc.active_tabs_items
                  : nc.active_tabs_items_mbl
                : changeView === true
                ? nc.tabs_items
                : nc.tabs_items_mbl
            }
            onClick={() => setActiveTab(4)}
          >
            Videos
          </div>
          <div
            className={
              activeTab == 5
                ? changeView === true
                  ? nc.active_tabs_items
                  : nc.active_tabs_items_mbl
                : changeView === true
                ? nc.tabs_items
                : nc.tabs_items_mbl
            }
            onClick={() => setActiveTab(5)}
          >
            More
          </div>
        </div>
        <div
          className={
            changeView === true ? nc.desktop_last_box : nc.desktop_last_box_mbl
          }
        >
          <div className={nc.desk_des}>
            <div className="font-DM text-base font-normal text-[#BCBCBC]">
              Description
            </div>
            <div className="pt-[8px] font-DM font-normal text-xs text-[#BCBCBC]">
              Lorumipsum aklklas cbkkakc kaslmlkmpoij asjnkjjjjjjjnasjnka
              niawoijoijoinaaaad kingone riski kaliber to the pointly
              hsainimmammmmajwjij awawdwa. No tu aiigramth logicially busrrt.
            </div>
          </div>
          <div className={nc.create_com_btn}>Create Community</div>
        </div>
      </div>
    </>
  );
};

export default DeskTopPreview;
