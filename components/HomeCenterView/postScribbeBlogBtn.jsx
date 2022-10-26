import React, {useState} from 'react'
import psb from "../../Asstes/style/post_scribbe_blog.module.css"

const PostScribbeBlogBtn = (prop) => {
	console.log("btn state",prop.state)
	const [activebtn,setActiveBtn]=useState(1)
  return (
	<>
	<div className={psb.wraper}>
		<div className={prop.state===false?psb.active_btn:psb.non_active_btn1} onClick={prop?.onClick}>Scribbe</div>
		<div className={prop.state===true?psb.active_btn:psb.non_active_btn2} onClick={prop?.onClick}>Blog</div>
	</div>
	
	
	</>
  )
}

export default PostScribbeBlogBtn