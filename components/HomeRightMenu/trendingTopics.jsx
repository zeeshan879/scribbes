import React from "react";
import rbar from "../../Asstes/style/home_right_bar.module.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const TrendingTopics = () => {
  const trendingTopics = [
    {
      topic: "#Technology",
    },
    {
      topic: "#AEWDynamite",
    },
    {
      topic: "#Comedy",
    },
    {
      topic: "#PresidentOut",
    },
    {
      topic: "#Marvel",
    },
    {
      topic: "#KenyaTechFest",
    },
  ];
  return (
    <>
      <div className={rbar.top_trending_wrap}>
        <div className={rbar.trending_interst_wrap}>
          <div className={rbar.trending_topics}>Trending topics</div>
          <div className={rbar.trending_topic_body}>
            {trendingTopics.map((data) => {
              return (
                <>
                  <div className="cursor-pointer">{data.topic}</div>
                </>
              );
            })}
          </div>
          <div className={rbar.semore_opt}>
            <div className="flex gap-[15px] items-center font-DM text-base cursor-pointer">
              Show more
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingTopics;
