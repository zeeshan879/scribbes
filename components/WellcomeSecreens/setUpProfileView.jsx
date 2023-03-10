import React, { useState } from "react";
import pro from "../../Asstes/style/setupProfileScreen.module.css";
import upload from "../../Asstes/Images/upload.png";
import Image from "next/image";
import { holdUserProfile,updateUserprofile } from "../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

const SetUpProfileView = () => {
  const [dragActive, setDragActive] = React.useState(false);
  const [file, setFile] = useState(null);
  const onlyHoldUserProfile = useSelector(
    (state) => state.user.onlyHoldUserProfile
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
  const updatedUser = {
    updatedUser: file,
  };
  console.log("upload image====>", updatedUser);
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(URL.createObjectURL(e.dataTransfer.files[0]));
      const user_profile = [e.target.files[0]];
      const profilePic = {
         updatedUser: user_profile,
      };
      dispatch(holdUserProfile(updatedUser));
    }
  };
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
      const user_profile = e.target.files[0];
      const  data = {
        profilePic: user_profile,
        updatedUser:user?.id
      };
      dispatch(updateUserprofile(data));
    }
  };
  console.log("onlyHoldUserProfile", onlyHoldUserProfile);
  const onButtonClick = () => {
    inputRef.current.click();
  };
  return (
    <>
      <div className={pro.setUpProfile_wrap}>
        <div className={pro.profile_heading}>Setup your profile</div>
        <div className={pro.pro_content_text}>
          Upload an awesome profile picture. It helps people recognize you.
        </div>
        <div className={pro.upload_wraper}>
          <div class={pro.upload_btn_wrapper}>
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
                name="updatedUser"
              />
              <label
                id="label-file-upload"
                htmlFor="input-file-upload"
                className={dragActive ? "drag-active" : ""}
              >
                <div>
                  <button className="upload-button " onClick={onButtonClick}>
                    {file === null ? (
                      <div className="h-[262px] w-[262px] object-cover">
                        <Image src={upload} className="object-cover" />
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
            <button class={pro.btn_upload}>
              Drag photo here or{" "}
              <span className={pro.span_upload}>Upload from Computer</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetUpProfileView;
