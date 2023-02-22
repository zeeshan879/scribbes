import React, { useState } from "react";
import upMedia from "../../Asstes/Images/upMedia.png";
import embed from "../../Asstes/Images/embed.png";
import pa from "../../Asstes/style/postAction.module.css";
import insert from "../../Asstes/Images/insert.png";
import enoji from "../../Asstes/Images/enoji.png";
import activeinsert from "../../Asstes/Images/activeinsert.png";
import Image from "next/image";

const InsertMediaAndInsertUrlBtn = () => {
  const [insertMedia, setInsertMedia] = useState(false);
  return (
    <>
      <div className="flex gap-[16px] items-center justify-between w-full sm:justify-start ">
        <div
          className={
            insertMedia === true
              ? pa.active_create_bottom_media_items
              : pa.create_bottom_media_items
          }   
        >
          {insertMedia === true ? (
            <Image src={activeinsert} />
          ) : (
            <Image src={insert} />
          )}
       <div  onClick={() => setInsertMedia(!insertMedia)}> Insert Media</div>
          {insertMedia && (
            <div className={pa.create_insert_media_toggle}>
              <div className={pa.create_insert_up_bnt}>
                <Image src={upMedia} />
                Upload from computer
              </div>
              <div className={pa.create_insert_up_bnt}>
                <Image src={embed} />
                Embed Media
              </div>
            </div>
          )}
        </div>
        <div className={pa.create_bottom_media_items}>
          <Image src={enoji} />
          Insert Emoji
        </div>
      </div>
    </>
  );
};

export default InsertMediaAndInsertUrlBtn;
