import React from "react";
import ht from "../../Asstes/style/hashtag_screen.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import Hashtagtabs from "./hashtag_tabs";
import BlogPost from "../HomeCenterView/blogPost";

const HashTagCenterview = () => {
  const router = useRouter();
  return (
    <>
      <div className={ht.hash_tag_continer}>
        <div className={ht.header_box}>
          {" "}
          <BsArrowLeft
            className="cursor-pointer"
            onClick={() => router.back()}
          />
          #Technology
        </div>
        <div>
          <Hashtagtabs />
        </div>
        <div className={ht.seprator}></div>
        <div className={ht.post_body_wraper}>
          <div className={ht.post_box1}>
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default HashTagCenterview;
