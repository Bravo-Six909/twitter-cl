import React from 'react';
import { AiOutlineSchedule } from "react-icons/ai";
import { MdGif,MdOutlineInsertPhoto,MdClose } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";
import style from "./Tweet.module.css";
import $ from "jquery";

const Tweet = () => {

  // $(".tweet").trigger(function(){
  //   alert("Hello");
  // });

  return (
    <div className={style.card}>
      <MdClose className={style.close}/>
      <div className={style.input}>
        <img src="https://images.pexels.com/photos/10162332/pexels-photo-10162332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <div className={style.inputField}>
          <input placeholder="What's happening?" />
          <div className={style.inputIcon}>
            <div className={style.icons}>
              <MdOutlineInsertPhoto className={style.displayIcon} />
              <MdGif className={style.displayIcon} />
              <BiPoll className={style.displayIcon} />
              <BsEmojiSmile className={style.displayIcon} />
              <AiOutlineSchedule className={style.displayIcon} />
              <HiOutlineLocationMarker className={style.displayIcon} />
            </div>
            <button className={style.tweet}>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet