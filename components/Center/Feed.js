import React from 'react';
import style from "./Feed.module.css";
import { MdOutlineModeComment } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";
import { VscHeart } from "react-icons/vsc";
import { FiShare } from "react-icons/fi";

const Feed = ({username,image,name,profilePic,desc}) => {
  return (
    <div className={style.body}>
        <div className={style.profile}>
            <img src={profilePic}/>
        </div>
        <div className={style.detail}>
          <div className={style.name}>
            <h4>{name}</h4>
            <p>@{username}</p>
          </div>
            <p className={style.desc}>{desc}</p>
            <img src={image} />
            <div className={style.icons}>
              <div className={style.comment}>
                <MdOutlineModeComment className={style.commentIcon}/>
              </div>
              <div className={style.retweet}>
                <AiOutlineRetweet classeName={style.retweetIcon} />
              </div>
              <div className={style.like}>
                <VscHeart className={style.likeIcon} />
              </div>
              <div className={style.share}>
                <FiShare className={style.shareIcon} />
              </div>
            </div>
        </div>
    </div>
  );
};

export default Feed;
