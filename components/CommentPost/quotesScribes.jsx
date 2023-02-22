import React from "react";
import scv from "../../Asstes/style/setting_center_view.module.css";
import coomentP from "../../Asstes/Images/coomentP.png";
import Image from "next/image";
import postAction from "../../Asstes/Images/postAction.png";
import notiImage from "../../Asstes/Images/notiImage.png";
import cardImge from "../../Asstes/Images/cardImge.png";
import arrowUp2 from "../../Asstes/Images/arrowUp2.png";
import share from "../../Asstes/Images/share.png";
import comnt2 from "../../Asstes/Images/comnt2.png";
import lineCounter from "../../Asstes/Images/lineCounter.png";

const QuotesScribes = () => {
  return (
    <>
      <div className="mr-[13px] mt-[29px] mb-[11px]">
        <div className={scv.qoutes_main_container} id="style-desk">
          <div>
            <div className={scv.qs_container}>
              <div className={scv.qs_qoutes_wraper}>
                <div className="flex gap-[12px]">
                  <div>
                    <Image src={coomentP} />
                  </div>
                  <div>
                    <div className="flex gap-2 pt-2">
                      <div className="text-base font-DM text-[#000580]">
                        Mike Someone
                      </div>
                      <div className="text-base font-bold font-DM text-black">
                        @Johndoe
                      </div>
                      <div className="text-base font-normal font-DM text-black">
                        .2h
                      </div>
                    </div>
                    <div className="text-sm md:text-base font-DM max-w-[600px] pt-[20px] leading-[20px]">
                      This is how a post would like on the website, and it’s
                      different from the template we normally use for the blog
                      posts on this website.
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer">
                  <Image src={postAction} />
                </div>
              </div>
              <div className={scv.qoutes_card_container}>
                <div className={scv.qoutes_card_box}>
                  <div className={scv.qoutes_innerbox}>
                    <div>
                      <Image src={notiImage} />
                    </div>
                    <div>
                      <div className="flex gap-2 pt-[5px]">
                        <div className="text-base font-DM text-[#000580]">
                          Mike Someone
                        </div>
                        <div className="text-base font-bold font-DM text-black">
                          @Johndoe
                        </div>
                        <div className="text-base font-normal font-DM text-black">
                          .2h
                        </div>
                      </div>
                      <div className="text-sm md:text-base font-DM max-w-[600px] pt-[10px] leading-[20px]">
                        This is how a post would like on the website, and it’s
                        different from the template we normally use for the blog
                        posts on this website.
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image src={cardImge} />
                  </div>
                </div>
                <div className="flex gap-[80px] pt-[21px]">
                  <div className={scv.qoutes_notification}>
                    <div>
                      <Image src={lineCounter} />
                    </div>
                    <div>10</div>
                  </div>
                  <div className={scv.qoutes_notification}>
                    <div>
                      <Image src={comnt2} />
                    </div>
                    <div>56</div>
                  </div>
                  <div className={scv.qoutes_notification}>
                    <div>
                      <Image src={share} />
                    </div>
                    <div>56</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-[15px]">
              <div className={scv.seprator}></div>
            </div>
          </div>
          <div className="pt-[20px]">
            <div className={scv.qs_container}>
              <div className={scv.qs_qoutes_wraper}>
                <div className="flex gap-[12px]">
                  <div>
                    <Image src={coomentP} />
                  </div>
                  <div>
                    <div className="flex gap-2 pt-2">
                      <div className="text-base font-DM text-[#000580]">
                        Mike Someone
                      </div>
                      <div className="text-base font-bold font-DM text-black">
                        @Johndoe
                      </div>
                      <div className="text-base font-normal font-DM text-black">
                        .2h
                      </div>
                    </div>
                    <div className="text-base font-DM max-w-[600px] pt-[20px] leading-[20px]">
                      This is how a post would like on the website, and it’s
                      different from the template we normally use for the blog
                      posts on this website.
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer">
                  <Image src={postAction} />
                </div>
              </div>
              <div className={scv.qoutes_card_container}>
                <div className={scv.qoutes_card_box}>
                  <div className={scv.qoutes_innerbox}>
                    <div>
                      <Image src={notiImage} />
                    </div>
                    <div>
                      <div className="flex gap-2 pt-[5px]">
                        <div className="text-base font-DM text-[#000580]">
                          Mike Someone
                        </div>
                        <div className="text-base font-bold font-DM text-black">
                          @Johndoe
                        </div>
                        <div className="text-base font-normal font-DM text-black">
                          .2h
                        </div>
                      </div>
                      <div className="text-base font-DM max-w-[600px] pt-[10px] leading-[20px]">
                        This is how a post would like on the website, and it’s
                        different from the template we normally use for the blog
                        posts on this website.
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image src={cardImge} />
                  </div>
                </div>
                <div className="flex gap-[80px] pt-[21px]">
                  <div className={scv.qoutes_notification}>
                    <div>
                      <Image src={lineCounter} />
                    </div>
                    <div>10</div>
                  </div>
                  <div className={scv.qoutes_notification}>
                    <div>
                      <Image src={comnt2} />
                    </div>
                    <div>56</div>
                  </div>
                  <div className={scv.qoutes_notification}>
                    <div>
                      <Image src={share} />
                    </div>
                    <div>56</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-[15px]">
              <div className={scv.seprator}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotesScribes;
