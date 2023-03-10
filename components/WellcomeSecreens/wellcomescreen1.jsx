import React, { useState } from "react";
import well1 from "../../Asstes/style/wellsec1.module.css";
import Scribbes from "../../Asstes/Images/Scribbes.png";
import Header from "../Header";
import Image from "next/image";
import WellcomeView from "../WellcomeSecreens/wellcomeView";
import backArrow from "../../Asstes/Images/backArrow.png";
import SetUpProfileView from "../WellcomeSecreens/setUpProfileView";
import TellUsView from "../WellcomeSecreens/tellUsScreen";
import FollowYourDesired from "../WellcomeSecreens/followYourDesired";
import StartConverstion from "../WellcomeSecreens/startConverstion";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { updateUserprofile,userIntroduction } from "../../redux/reducers/userReducer";

const WellcomeScreen1 = () => {
  const [activeView, setActiveView] = useState(1);
  const chnagePostType = useSelector(
    (state) => state.allGernalFunction.isBlogOrPost
  );
  const userProfile = useSelector((state) => state.user.userProfile);
  const temBio = useSelector((state) => state.user.temBio);
  const dispatch = useDispatch();
  const handleChngeScreen = () => {
    setActiveView(activeView + 1);
    if (activeView === 3) {
      dispatch(userIntroduction(temBio));
    }
  };
  const handlePrevScreen = () => {
    setActiveView(activeView - 1);
  };
  console.log("activestate", activeView);
  return (
    <>
      <div className="bg-[#f8f8f8]">
        <Header />
        <div className={well1.login_main}>
          <div className={well1.well_sec_1_container}>
            <div className={well1.scrren1_wrap}>
              <div
                className={
                  chnagePostType === 2
                    ? well1.well_sec__wrapper2
                    : well1.well_sec__wrapper
                }
              >
                <div className={well1.conditional_opt}>
                  {activeView === 1 ? (
                    <WellcomeView />
                  ) : activeView === 2 ? (
                    <SetUpProfileView />
                  ) : activeView === 3 ? (
                    <TellUsView />
                  ) : activeView === 4 ? (
                    <FollowYourDesired />
                  ) : activeView === 5 ? (
                    <StartConverstion />
                  ) : (
                    ""
                  )}
                </div>
                <div className={well1.sec1_action_box}>
                  <div className={well1.action_btn_wraperr}>
                    {activeView === 1 ? (
                      <Link href="/">
                        <div className={well1.sce1_skip_now}>Skip for now</div>
                      </Link>
                    ) : (
                      <div
                        className={well1.backBtn}
                        onClick={() => handlePrevScreen()}
                      >
                        {" "}
                        <Image src={backArrow} /> Back
                      </div>
                    )}
                  </div>
                  <div className={well1.sec1_change_circle}>
                    <div
                      className={
                        activeView === 1
                          ? well1.active_circle
                          : well1.non_active_circle
                      }
                      onClick={() => setActiveView(1)}
                    ></div>
                    <div
                      className={
                        activeView === 2
                          ? well1.active_circle
                          : well1.non_active_circle
                      }
                      onClick={() => setActiveView(2)}
                    ></div>
                    <div
                      className={
                        activeView === 3
                          ? well1.active_circle
                          : well1.non_active_circle
                      }
                      onClick={() => setActiveView(3)}
                    ></div>
                    <div
                      className={
                        activeView === 4
                          ? well1.active_circle
                          : well1.non_active_circle
                      }
                      onClick={() => setActiveView(4)}
                    ></div>
                    <div
                      className={
                        activeView === 5
                          ? well1.active_circle
                          : well1.non_active_circle
                      }
                      onClick={() => setActiveView(5)}
                    ></div>
                  </div>
                  <div className={well1.action_btn_wraperr2}>
                    {(activeView === 2 ||
                      activeView === 3 ||
                      activeView === 4) && (
                      <div
                        className={well1.sce1_skip_now2}
                        onClick={() => setActiveView(activeView + 1)}
                      >
                        Skip this step
                      </div>
                    )}

                    {activeView === 5 ? (
                      <Link href="/">
                        <div className={well1.take_home_btn}>
                          Take me to homepage
                        </div>
                      </Link>
                    ) : (
                      <div
                        className={well1.sec1_show_around_btn}
                        onClick={() => handleChngeScreen()}
                      >
                        {" "}
                        {activeView === 1 ? "Show me around " : "Continue"}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={well1.scribe_logo}>
            <Image src={Scribbes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WellcomeScreen1;
