import React from 'react';
import style from "./Follow.module.css";

const Follow = ({name,profile,user}) => {
  return (
    <div className={style.main}>
        <div className={style.body}>
            <div className={style.pic}>
                <img src={profile} />
            </div>
            <div className={style.detail}>
                <div className={style.name}>
                    <h3>{name}</h3>
                    <p>@{user}</p>
                </div>
                <button>Follow</button>
            </div>
        </div>
    </div>
  );
};

export default Follow;
