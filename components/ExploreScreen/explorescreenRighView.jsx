import React from "react";
import es from "../../Asstes/style/explorescreen.module.css";
import artical from "../../Asstes/Images/artical.png";
import laugh from "../../Asstes/Images/laugh.png";
import fire1 from "../../Asstes/Images/fire1.png";
import vb from "../../Asstes/Images/vb.png";
import arrowNext from "../../Asstes/Images/arrowNext.png";
import cardLink from "../../Asstes/Images/cardLink.png";
import postWeb from "../../Asstes/Images/postWeb.png";
import arrowUp2 from "../../Asstes/Images/arrowUp2.png";
import card1 from "../../Asstes/Images/card1.png";
import card2 from "../../Asstes/Images/card2.png";
import Image from "next/image";

const ExplorescreenRighView = () => {

  const articalReading = [
    {
      text: "A study on social media trends and more things to make a long headline",
    },
    {
      text: "A study on social media trends and more things to make a long headline",
    },
    {
      text: "A study on social media trends and more things to make a long headline",
    },
  ];
  const whatsFunny = [
    {
      image: card1,
      text: "This cat has a contagious laughter",
      link: false,
    },

    {
      text: "Watch this youtube playlist of funny animals being stupid",
      link: true,
    },
    {
      image: card2,
      text: "What was Pikachu doing at the comic-con expo?",
      link: false,
    },
  ];

  return (
    <>
      <div className={es.search_bar_wraper}>
        <input placeholder="Search " className={es.search_ele} />
      </div>
      <div className={es.explore_screen_body}>
        <div className={es.icon1}>
          <Image src={artical} />
        </div>
        <div className={es.icon2}>
          <Image src={laugh} />
        </div>
        <div className={es.icon3}>
          <Image src={fire1} />
        </div>
        <div className="explore_content_wrap" id="style-12">
          <div className={es.artical_reasding}>
            <div className={es.heading}>Articles worth reading</div>
            <div className={es.card_container}>
              {articalReading.map((data) => {
                return (
                  <>
                    <div className={es.card}>
                      <div className={es.card_top}>
                        <div className={es.card_profile}>
                          <Image src={vb} /> Michael Someone
                        </div>
                        <div className="cursor-pointer">
                          <Image src={arrowNext} />
                        </div>
                      </div>
                      <div className={es.card_text}>{data.text}</div>
                      <div className={es.card_link}>
                        <div>
                          <Image src={cardLink} />
                        </div>
                        medium.com/article/a_study....
                      </div>

                      <div className={es.card_bottom_content}>
                        <div className={es.social_media_btn}>
                          <Image src={postWeb} />
                          Social Media
                        </div>
                        <div className={es.like_coment}>
                          <div className="cursor-pointer">
                            <Image src={arrowUp2} /> 256
                          </div>
                          <div>56 comments</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={es.whats_funny}>
            <div className={es.heading}>Whats funny?</div>
            <div className={es.card_container}>
              {whatsFunny.map((data) => {
                return (
                  <>
                    <div
                      className={es.card}
                      style={  {
						backgroundImage: `url(${data?.image?.src})`,
						backgroundRepeat: "no-repeat",
					  }}
                    >
                      <div className={es.card_top}>
                        <div className={es.card_profile}>
                          <Image src={vb} /> Michael Someone
                        </div>
                        <div className="cursor-pointer">
                          <Image src={arrowNext} />
                        </div>
                      </div>
                      <div className={data.link==false?es.card_text2: es.card_text}>{data.text}</div>

                      {data.link && (
                        <div className={es.card_link}>
                          <div>
                            <Image src={cardLink} />
                          </div>
                          medium.com/article/a_study....
                        </div>
                      )}

                      <div className={es.card_bottom_content}>
                        <div className={es.social_media_btn}>
                          <Image src={postWeb} />
                          Social Media
                        </div>
                        <div className={es.like_coment}>
                          <div className="cursor-pointer">
                            <Image src={arrowUp2} /> 256
                          </div>
                          <div>56 comments</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={es.oven_hot}>
            <div className={es.heading}>Oven-hot debates</div>
            <div className={es.card_container}>
              {articalReading.map((data) => {
                return (
                  <>
                    <div className={es.card}>
                      <div className={es.card_top}>
                        <div className={es.card_profile}>
                          <Image src={vb} /> Michael Someone
                        </div>
                        <div className="cursor-pointer">
                          <Image src={arrowNext} />
                        </div>
                      </div>
                      <div className={es.card_text}>{data.text}</div>
                      <div className={es.card_link}>
                        <div>
                          <Image src={cardLink} />
                        </div>
                        medium.com/article/a_study....
                      </div>

                      <div className={es.card_bottom_content}>
                        <div className={es.social_media_btn}>
                          <Image src={postWeb} />
                          Social Media
                        </div>
                        <div className={es.like_coment}>
                          <div className="cursor-pointer">
                            <Image src={arrowUp2} /> 256
                          </div>
                          <div>56 comments</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorescreenRighView;
