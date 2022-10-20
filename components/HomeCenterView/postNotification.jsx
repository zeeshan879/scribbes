import React from 'react'
import HomCen from "../../Asstes/style/home_centerView.module.css";
import arrowUp from "../../Asstes/Images/arrowUp.png"
import comnt from "../../Asstes/Images/comnt.png"
import share from "../../Asstes/Images/share.png"
import Image from 'next/image';

const PostNotification = () => {
  return (
<>
<div className={HomCen.post_noti_wrap}>
	<div className={HomCen.noti_box}>
		<Image src={arrowUp} />
		<div>
		10
		</div>
	</div>
	<div className={HomCen.noti_box}>
		<Image src={comnt} />
		<div>
		56
		</div>
	</div>
	<div className={HomCen.noti_box}>
		<Image src={share} />
		<div>
		56
		</div>
	</div>
</div>
</>
  )
}

export default PostNotification