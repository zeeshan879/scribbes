import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import backscreen from "../../Asstes/Images/backscreen.png";
import Image from "next/image";
import uploadIcon from "../../Asstes/Images/uploadIcon.png";
import bg from "../../Asstes/Images/uploadvector.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { updateUserprofile } from "../../redux/reducers/userReducer";
import { useSelector, useDispatch } from "react-redux";
import Editprofile from "../../pages/edit-profile";

const EditProfileModal = (props) => {
  const [file, setFile] = useState(null);
  const [eidtProfole, setEditProfile] = useState({ dob: new Date() });
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);
  console.log("user data", user?.currentUser);

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
      setFile(URL.createObjectURL(e.dataTransfer.files[0]));
    }
  };
  const handleChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
      setEditProfile((values) => ({ ...values, [name]: value }));
    }
  };
  const onButtonClick = () => {
    inputRef.current.click();
  };
  const handleInputsValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditProfile((values) => ({ ...values, [name]: value }));
  };
  const handleupdateProfile = () => {
    // dispatch(updateUserprofile(eidtProfole))
    console.log("update data",eidtProfole)

  };

  return (
    <>
      <Modal
        size="lg"
        className="post_action_modal"
        show={props?.state}
        onHide={props.onClick}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className={HomCen.edit_modal_header}>
          <div className="cursor-pointer" onClick={props.onClick}>
            <Image src={backscreen} />
          </div>
          <div>Edit Profile</div>
        </div>
        <div className="flex justify-center mt-[33px] sm:mt-[73px]">
          <div
            className={HomCen.upload_image}
            style={{
              backgroundImage: `url(${file == null ? bg.src : file})`,
            }}
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
                name="profilePic"
                value={eidtProfole.file}
                onChange={handleChange}
              />
              <label
                id="label-file-upload"
                htmlFor="input-file-upload"
                className={dragActive ? "drag-active" : ""}
              >
                <div className="h-full w-full flex items-center">
                  <button className="upload-button" onClick={onButtonClick}>
                    <Image src={uploadIcon} />
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
        </div>
        <div className={HomCen.user_info_form}>
          <div className={HomCen.user_name}>
            <div className="font-DM text-[16px] sm:text-[20px] font-normal text-[#BCBCBC]">
              Name
            </div>
            <div className="font-DM text-[18px]">
              {user?.currentUser?.firstName}
            </div>
          </div>
          <div className={HomCen.user_name}>
            <div className="font-DM text-[16px] sm:text-[20px] font-normal text-[#BCBCBC]">
              User Name
            </div>
            <div className="font-DM text-[18px]">
              {user?.currentUser?.userName}
            </div>
          </div>
          <div className={HomCen.user_bio}>
            <div className="font-DM text-[16px] sm:text-[20px] font-normal text-[#BCBCBC]">
              Bio
            </div>
            <textarea
              value={eidtProfole.bio}
              name="introduction"
              onChange={(e) => handleInputsValue(e)}
              className={HomCen.user_input_ele}
            />
          </div>
          <div className={HomCen.user_name}>
            <div className="font-DM text-[16px] sm:text-[20px] font-normal text-[#BCBCBC]">
              Website
            </div>
            <input
              value={eidtProfole.website}
              name="website"
              onChange={(e) => handleInputsValue(e)}
              className={HomCen.user_input_ele}
            />
          </div>
          <div className={HomCen.user_name}>
            <div className="font-DM text-[16px] sm:text-[20px] font-normal text-[#BCBCBC]">
              Date of Birth
            </div>

            <DatePicker
              className="w-full outline-none text-lg font-DM"
              selected={eidtProfole.dob}
              onChange={(date) =>
                handleInputsValue({
                  target: { name: "dob", value: date },
                })
              }
            />
          </div>
          <div className="flex justify-center  sm:justify-end">
            <div
              className={HomCen.user_info_save_btn}
              onClick={() => handleupdateProfile()}
            >
              Save
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditProfileModal;
