import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import profile from "../../Asstes/Images/profile.png"
import arrowUp from "../../Asstes/Images/arrowUp.png"
import Nav from "../../Asstes/style/navbar.module.css"
import { BiUser } from 'react-icons/bi';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { TbMessageCircle } from 'react-icons/tb';

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
  
      <div className={Nav.mobile_profile} onClick={handleShow}>
        <Image src={profile} width="40px" height="40px" />
      </div>

      <Offcanvas show={show} onHide={handleClose} style={{width:"280px"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Acount info</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
     <div className="flex justify-between items-center">
      <div className="">
        <Image src={profile} width="40px" height="40px"  />
      </div>
      <div className="h-[30px] w-[30px] flex justify-center items-center cursor-pointer border-[1px] border-[#BCBCBC] rounded-[50%] text-lg">+</div>
     </div>
     <div className={Nav.user_name}>John Doe</div>
     <div className={Nav.user_email}>@JohnDoeuser</div>
     <div className={Nav.followers}>190 Followers
     <div className={Nav.folloers_toggle}>
      <Image src={arrowUp} />
      256</div>
     </div>
     <div className={Nav.profile_items}>
      <div className={Nav.profile_menu}>
        <div>
          <BiUser/>
        </div>
        <div>Profile</div>
      </div>
      <div className={Nav.profile_menu}>
        <div>
          <TbMessageCircle/>
        </div>
        <div>Topics</div>
      </div>
      <div className={Nav.profile_menu}>
        <div>
          <BsBookmarkStarFill/>
        </div>
        <div>Bookmarks</div>
      </div>
     </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
