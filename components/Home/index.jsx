import React from "react";
import HomeLeftMenu from "../HomeLeftMenu";
import HomeCenterView from "../HomeCenterView";
import HomeRightmenu from "../HomeRightMenu";

const HomePage = () => {
  return (
    <>
      <div className="max-w-[1920px] m-auto bg-[#F8F8F8] h-full">
        <div className="flex  m-auto">
          <div >
            <HomeLeftMenu />
          </div>
          <div>
            <HomeCenterView />
          </div>
          <div >
            <HomeRightmenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
