import React, { useState } from "react";
import nc from "../../Asstes/style/new_community.module.css";
import ac from "../../Asstes/style/add_community.module.css";
import Image from "next/image";
import chose from "../../Asstes/images/chose.png";
import earth from "../../Asstes/images/earth.png";
import lock from "../../Asstes/images/lock.png";
import { useSelector, useDispatch } from "react-redux";
import InviteFriens from "./inviteFriends";
import upload_profile from "../../Asstes/images/upload_profile.png";
import { handleDeskTopView } from "../../redux/reducers/scribbes";
import { FaDesktop } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { handleaddCommunity } from "../../redux/reducers/userReducer";

const CreateNewCommunity = () => {
  const [dragActive, setDragActive] = React.useState(false);
  const [chose1, activeChose] = useState(false);
  const [selecyPrivcy, setPrivcy] = useState("Chose Privacy");
  const [activeTab, setActiveTab] = useState(1);
  const [file, setFile] = useState(null);
  const [inputError, setInputError] = useState(false);
  const [categoryError, setcategoryError] = useState(false);
  const [comunityForm, setCommunityFrom] = useState({
    // name: "privacy",
    // name: "invitations",
    // name: "communityOwner",
  });

  const privayData = [
    {
      name: "Everyone",
      icon: earth,
    },
    {
      name: "Private",
      icon: lock,
    },
  ];
  const friends = [
    { title: "Ali@450", year: 1994 },
    { title: "Afzal@562", year: 1972 },
    { title: "Yousaf@258", year: 1974 },
    { title: "Herry@258", year: 2008 },
    { title: "Haroon@654", year: 1957 },
    { title: "Herry@2645", year: 1993 },
    { title: "PulpFiction@254", year: 1994 },
  ];
  const changeView = useSelector(
    (state) => state.allGernalFunction.mobileDesktopView
  );
  const user = useSelector((state) => state.user?.currentUser);

  const inputRef = React.useRef(null);
  const dispatch = useDispatch();
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
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setCommunityFrom((values) => ({ ...values, [e.target.name]: e.target.files[0] }));
    }
  };
  console.log("comunityForm",comunityForm)
  const onButtonClick = () => {
    inputRef.current.click();
  };
  const handlePrivacy = (data) => {
    if (data == true) {
      activeChose(!chose1);
    } else {
      setPrivcy(data);
      setCommunityFrom({
        ...comunityForm,
        privacy: data,
        invitations: friends,
        communityOwner: user?.id,
      });
      console.log("form state", comunityForm);
      activeChose(false);
    }
  };
  const handleAddNewCommunity = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCommunityFrom((values) => ({ ...values, [name]: value }));
    if (comunityForm?.communityName?.trim().length == "") {
      setInputError(true);
    } else {
      setInputError(false);
    }
    if (comunityForm?.category?.trim().length == "") {
      setcategoryError(true);
    } else {
      setcategoryError(false);
    }
  };
  const handleSubmitNewCommunity = () => {
    if (comunityForm?.communityName?.trim().length == 0) {
      setInputError(true);
    } else {
      setInputError(false);
      const formData = new FormData();
      formData.append("communityName",comunityForm.communityName); 
      formData.append("category",comunityForm.category); 
      formData.append("description",comunityForm.description); 
      formData.append("privacy",comunityForm.privacy); 
      formData.append("invitations",JSON.stringify(comunityForm.invitations)); 
      formData.append("communityOwner",comunityForm.communityOwner); 
      formData.append("photo",comunityForm.photo); 
      dispatch(handleaddCommunity(formData));
    }


  };
  return (
    <>
      <div className={nc.content_wraper}>
        {/* <=============Mobile Preview===============> */}
        <div
          className={
            changeView === true
              ? nc.create_community_wraper
              : ac.create_community_wraper_mblView
          }
        >
          <div className={nc.header_wraper}>Community Information</div>

          <div className="z-10">
            <div className={nc.info_body}>
              <div className={nc.comunity_name}>
                <div className="font-DM text-base font-normal">
                  Community Name ( Required)
                </div>
                <div className={nc.name_box}>
                  <input
                    placeholder="community name"
                    className={nc.name_ele}
                    name="communityName"
                    value={comunityForm?.communityName}
                    onChange={(e) => handleAddNewCommunity(e)}
                  />
                </div>
                <div className="text-danger text-sm h-[10px]">
                  {inputError && <span>This feild is required*</span>}
                </div>
                <div className={nc.name_text}>
                  Use the name of your business, Brand etc or a name what this
                  Community is about....
                </div>
              </div>
              <div className={nc.comunity_name}>
                <div className="font-DM text-base font-normal">
                  Category ( Required)
                </div>
                <div className={nc.name_box}>
                  <input
                    placeholder="category"
                    className={nc.name_ele}
                    value={comunityForm?.category}
                    onChange={(e) => handleAddNewCommunity(e)}
                    name="category"
                  />
                </div>
                <div className="text-danger text-sm h-[10px]">
                  {categoryError && <span>This feild is required*</span>}
                </div>
                <div className={nc.name_text}>
                  Use the name of your business, Brand etc or a name what this
                  Community is about....
                </div>
              </div>
              <div className={nc.chose_Privcy}>
                <div className="font-DM">{selecyPrivcy}</div>
                <div className={nc.chose_select}>
                  <Image src={chose} onClick={() => handlePrivacy(true)} />

                  {chose1 && (
                    <div className={nc.chose_privcy_toggle}>
                      {privayData.map((data) => {
                        return (
                          <>
                            <div className={nc.toggle_item}>
                              <Image src={data.icon} />

                              <div
                                className="font-DM w-full h-full items-center flex"
                                onClick={() => handlePrivacy(data.name)}
                              >
                                {data.name}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className={nc.comunity_name}>
                <div className="font-DM text-base font-normal">
                  Invite Friends ( Optional )
                </div>
                <div className={nc.name_box}>
                  <InviteFriens />
                </div>
              </div>
              <div className={nc.coumity_des}>
                <div className="font-DM text-base font-normal">Description</div>
                <div className={nc.comunity_des_text}>
                  <textarea
                    placeholder="write...."
                    className={ac.des_textarea_ele}
                    value={comunityForm?.description}
                    onChange={(e) => handleAddNewCommunity(e)}
                    name="description"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <=============desktop Preview===============> */}
        <div
          className={
            changeView === true
              ? ac.desktop_preview
              : ac.desktop_preview_mbl_view
          }
        >
          <div className={ac.desk_prev_heading}>
            <div>Desktop Preview</div>
            <div className="flex items-center gap-[19px]">
              <div
                className="cursor-pointer"
                onClick={() => dispatch(handleDeskTopView(true))}
              >
                <FaDesktop
                  className={
                    changeView === true
                      ? ac.active_desktop_icon
                      : ac.desktop_icon
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
                      ? ac.active_desktop_icon
                      : ac.desktop_icon
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={
              changeView === true ? ac.upload_profile : ac.upload_profile_mbl
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
                name="photo"
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
                    {file === null ? (
                      <div className="h-[262px] w-[262px] object-cover">
                        <Image src={upload_profile} />
                      </div>
                    ) : (
                      <div className="h-[262px] w-[262px] object-contain">
                        <Image
                          src={file}
                          height="262px"
                          width="262px"
                          className="object-contain"
                        />
                      </div>
                    )}
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
          <div className={ac.community_category}>
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
              changeView === true ? ac.desktop_tabs : ac.desktop_tabs_mbl
            }
          >
            <div
              className={
                activeTab == 1
                  ? changeView === true
                    ? ac.active_tabs_items
                    : ac.active_tabs_items_mbl
                  : changeView === true
                  ? ac.tabs_items
                  : ac.tabs_items_mbl
              }
              onClick={() => setActiveTab(1)}
            >
              Scribbes
            </div>
            <div
              className={
                activeTab == 2
                  ? changeView === true
                    ? ac.active_tabs_items
                    : ac.active_tabs_items_mbl
                  : changeView === true
                  ? ac.tabs_items
                  : ac.tabs_items_mbl
              }
              onClick={() => setActiveTab(2)}
            >
              About
            </div>
            <div
              className={
                activeTab == 3
                  ? changeView === true
                    ? ac.active_tabs_items
                    : ac.active_tabs_items_mbl
                  : changeView === true
                  ? ac.tabs_items
                  : ac.tabs_items_mbl
              }
              onClick={() => setActiveTab(3)}
            >
              Photos
            </div>
            <div
              className={
                activeTab == 4
                  ? changeView === true
                    ? ac.active_tabs_items
                    : ac.active_tabs_items_mbl
                  : changeView === true
                  ? ac.tabs_items
                  : ac.tabs_items_mbl
              }
              onClick={() => setActiveTab(4)}
            >
              Videos
            </div>
            <div
              className={
                activeTab == 5
                  ? changeView === true
                    ? ac.active_tabs_items
                    : ac.active_tabs_items_mbl
                  : changeView === true
                  ? ac.tabs_items
                  : ac.tabs_items_mbl
              }
              onClick={() => setActiveTab(5)}
            >
              More
            </div>
          </div>
          <div
            className={
              changeView === true
                ? ac.desktop_last_box
                : ac.desktop_last_box_mbl
            }
          >
            <div className={ac.desk_des}>
              <div className="font-DM text-base font-normal text-[#BCBCBC]">
                Description
              </div>
              <div className="pt-[8px] font-DM font-normal text-xs text-[#BCBCBC]">
                Lorumipsum aklklas cbkkakc kaslmlkmpoij asjnkjjjjjjjnasjnka
                niawoijoijoinaaaad kingone riski kaliber to the pointly
                hsainimmammmmajwjij awawdwa. No tu aiigramth logicially busrrt.
              </div>
            </div>
            <div
              className={ac.create_com_btn}
              onClick={() => handleSubmitNewCommunity()}
            >
              Create Community
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewCommunity;
