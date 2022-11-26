import React from "react";
import ss from "../../Asstes/style/searchScreen.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import SearchScreenTabs from "./searchScreenTabs";
import BlogPost from "../HomeCenterView/blogPost";

const SearchScrenCenterview = () => {
  const router = useRouter();
  return (
    <>
      <div className={ss.main_container}>
        <div className={ss.search_container}>
          <BsArrowLeft
            className="cursor-pointer text-2xl"
            onClick={() => router.back()}
          />
          <div className={ss.search_box}>
            <input placeholder="Cryptocurrency" className={ss.search_ele} />
          </div>
        </div>
        <div className="flex justify-center">
          <SearchScreenTabs />
        </div>
        <div className={ss.seprator}></div>
        <div className={ss.post_body}>
          <div className={ss.post_box}>
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

export default SearchScrenCenterview;
