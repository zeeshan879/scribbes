import React from "react";
import vv from "../../Asstes/style/video_views.module.css";
import Image from "next/image";
import play2 from "../../Asstes/Images/play2.png";
import arrowUp from "../../Asstes/Images/arrowUp.png";
import vb from "../../Asstes/Images/vb.png";
import postWeb from "../../Asstes/Images/postWeb.png";
const VediosView = () => {
  const vedios = [
    {
      title: "This dog is posing out! Cant stop laughing.",
    },
    {
      title: "This dog is posing out! Cant stop laughing.",
    },
    {
      title: "This dog is posing out! Cant stop laughing.",
    },
    {
      title: "This dog is posing out! Cant stop laughing.",
    },
    {
      title: "This dog is posing out! Cant stop laughing.",
    },
	{
		title: "This dog is posing out! Cant stop laughing.",
	  },
	  {
		title: "This dog is posing out! Cant stop laughing.",
	  },
	  {
		title: "This dog is posing out! Cant stop laughing.",
	  },
	  {
		title: "This dog is posing out! Cant stop laughing.",
	  },
	  {
		title: "This dog is posing out! Cant stop laughing.",
	  },
	  {
		title: "This dog is posing out! Cant stop laughing.",
	  },
	  {
		title: "This dog is posing out! Cant stop laughing.",
	  },

  ];
  return (
    <>
      <div className={vv.header_wrap}>Followed Videos</div>


<div className="flex justify-center">
<div className="vedios_container2"  id="style-12">
        {vedios.map((data) => {
          return (
            <>
              <div>
                <div className={vv.vedio_bg}>
                  <div className={vv.play_btn}>
                    <Image src={play2} />
                  </div>
                  <div className={vv.vedio_content_box}>
                    <div className={vv.vedio_text}>{data.title}</div>
                    <div className={vv.vedio_like_comnets}>
                      <div>
                        <Image src={arrowUp} /> 255
                      </div>
                      <div>56 comments</div>
                    </div>
                    <div className="flex justify-end">
                      <div className="font-DM font-normal text-white text-xs">
                        0:45
                      </div>
                    </div>
                  </div>
                </div>
                <div className={vv.vedio_bottom_wrap}>
                  <div className={vv.vedio_b_content}>
                    <Image src={vb} /> Michael Someone
                  </div>
                  <div className={vv.sm_btn}>
                    <Image src={postWeb} />
                    Social Media
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
</div>

    </>
  );
};

export default VediosView;
