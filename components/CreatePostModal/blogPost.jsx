import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import TextEditor from "../CreatePostModal/textEditor"
import pa from "../../Asstes/style/postAction.module.css";






const BlogPost = () => {


  return (
    <>

      <div className={pa.blog_post_wrap}>
        <div className={pa.blog_post_box}>
          <div className={pa.blog_title}>Blog Title</div>
          <div className={pa.blog_title_wrap}>
            <textarea
              placeholder="Blog title goes here..."
              className={pa.blog_title_ele}
            ></textarea>
            <div className="flex justify-end pr-5 text-xs">
              <span className="text-action ">0</span>/150
            </div>
          </div>
		  <div className={pa.blog_title}>Content</div>
		  <div className={pa.text_editor_wraper}>
<TextEditor/>
		  </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
