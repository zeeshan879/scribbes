import React from "react";
import bp from "../../Asstes/style/blog_Post.module.css";
import Image from "next/image";
import postWeb from "../../Asstes/Images/postWeb1.png";
import blogImage from "../../Asstes/Images/blogImage.png";
import HomCen from "../../Asstes/style/home_centerView.module.css";

const BlogPost = () => {
  const blogPostArray = [
    {
      text: "This is really sad to read guys, When will there be solid action against such goons? I cant beleive all of this happening in our country.",
      des: "When will there be solid action",
      date: "Feb 22",
    },
    {
      text: "This is really sad to read guys, When will there be solid action against such goons? I cant beleive all of this happening in our country.",
      des: "When will there be solid action",
      date: "12h",
      postIcon: blogImage,
    },
    {
      text: "This is really sad to read guys, When will there be solid action against such goons? I cant beleive all of this happening in our country.",
      des: "When will there be solid action",
      date: "12h",
      postIcon: blogImage,
    },
  ];
  return (
    <>
      <div className={HomCen.blog_post_box}>
        {blogPostArray.map((data) => {
          return (
            <>
              <div className={bp.main_box}>
                <div>
                  <div className={bp.post_text}>{data.text}</div>
                  <div className="flex items-center pt-[9px] gap-2">
                    <div className={bp.mirco_btn}>
                      <div className="flex items-center">
                        <Image src={postWeb} />
                      </div>
                      <div>MicroSaaS</div>
                    </div>
                    <div className="font-DM text-base text-[#BCBCBC]">
                      {data.des}.<span> {data.date}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={data?.postIcon} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BlogPost;
