import React, { useState } from "react";
import nc from "../../Asstes/style/new_community.module.css";
import ac from "../../Asstes/style/add_community.module.css";
import * as yup from "yup";
import { Form, Field, Formik, ErrorMessage } from "formik";
import Image from "next/image";
import chose from "../../Asstes/images/chose.png";
import earth from "../../Asstes/images/earth.png";
import lock from "../../Asstes/images/lock.png";
import { useSelector, useDispatch } from "react-redux";
import InviteFriens from "./inviteFriends";
import screen from "../../Asstes/images/screen.png";
import mobile from "../../Asstes/images/mobile.png";
import upload_profile from "../../Asstes/images/upload_profile.png";
import { handleDeskTopView } from "../../redux/reducers/scribbes";
import { FaDesktop } from "react-icons/fa";
import { ImMobile } from "react-icons/im";

const CreateNewCommunity = () => {
  const [dragActive, setDragActive] = React.useState(false);
  const [chose1, activeChose] = useState(false);
  const [selecyPrivcy, setPrivcy] = useState("Chose Privacy");
  const [activeTab, setActiveTab] = useState(1);
  const [file, setFile] = useState(null);
  const changeView = useSelector(
    (state) => state.allGernalFunction.mobileDesktopView
  );
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
    }
  };
  const onButtonClick = () => {
    inputRef.current.click();
  };
  const handleSubmit = (value) => {
    const CommunityInformation = {
      communityName: value.communityName,
      category: value.category,
      friends: value.friends,
      description: value.description,
    };

    console.log("CommunityInformation", CommunityInformation);
  };

  const defaultValues = {
    communityName: "",
    category: "",
    friends: "",
    description: "",
  };
  const UserValidateSchema = yup.object().shape({
    communityName: yup.string().required("community name is Required*"),
    category: yup.string().required("category is required*"),
    friends: yup.string(),
    description: yup.string(),
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
  const handlePrivacy = (data) => {
    if (data == true) {
      activeChose(!chose1);
    } else {
      setPrivcy(data);
      activeChose(false);
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
          <Formik
            initialValues={privayData}
            validationSchema={UserValidateSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, errors }) => (
              <Form className="z-10">
                <div className={nc.info_body}>
                  <div className={nc.comunity_name}>
                    <div className="font-DM text-base font-normal">
                      Community Name ( Required)
                    </div>
                    <div className={nc.name_box}>
                      <Field
                        placeholder="community name"
                        name="communityName"
                        className={nc.name_ele}
                      />
                    </div>
                    <div className="text-danger">
                      <ErrorMessage name="communityName" />
                    </div>
                    <div className={nc.name_text}>
                      Use the name of your business, Brand etc or a name what
                      this Community is about....
                    </div>
                  </div>
                  <div className={nc.comunity_name}>
                    <div className="font-DM text-base font-normal">
                      Category ( Required)
                    </div>
                    <div className={nc.name_box}>
                      <Field
                        placeholder="category"
                        name="category"
                        className={nc.name_ele}
                      />
                    </div>
                    <div className="text-danger">
                      <ErrorMessage name="category" />
                    </div>
                    <div className={nc.name_text}>
                      Use the name of your business, Brand etc or a name what
                      this Community is about....
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
                    <div className="font-DM text-base font-normal">
                      Description
                    </div>
                    <div className={nc.comunity_des_text}>
                      <textarea
                        placeholder="write...."
                        className={ac.des_textarea_ele}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
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
            <div className={ac.create_com_btn} onClick={() => handleSubmit()}>
              Create Community
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewCommunity;
