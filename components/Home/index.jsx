import React from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import HomeCenterView from "../HomeCenterView";

const HomePage = () => {
  return (
    <>
      <div className="max-w-[1820px] m-auto bg-[#F8F8F8] h-full">
        <div className="flex justify-between">
          <div>
            <HomeLeftMenu />
          </div>
          <div>
            <HomeCenterView />
          </div>
          <div className="w-full">right side bar</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
