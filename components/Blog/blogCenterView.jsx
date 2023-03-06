import React from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import blogBanner from "../../Asstes/Images/blogBanner.png";
import BlogPost from "./blogPost"

const BlogCenterView = () => {
  return (
    <>
      <div className={HomCen.blog_main_container}>
        <div className={HomCen.blog_header}>
          <div className="flex font-grotesk gap-[18px] items-center">
            {" "}
            <BsArrowLeft
              className="cursor-pointer"
              onClick={() => router.back()}
            />
            Blogs
          </div>
        </div>
        <div className="w-full">
          <Image src={blogBanner} className=" w-full" />
        </div>

      <BlogPost/>

   
      </div>
    </>
  );
};

export default BlogCenterView;
