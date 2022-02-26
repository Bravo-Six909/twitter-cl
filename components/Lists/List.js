import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { BiArrowBack } from "react-icons/bi";
import { auth } from "../../firebase";
import styles from "./List.module.css";
import Follow from '../Right Side/Follow';
import { BsFileEarmarkPlus } from "react-icons/bs";
import { MdMoreHoriz } from "react-icons/md";

const List = () => {

    const [data, setData] = useState([]);
    const [loggedUser, setLoggedUser] = useState({});

    useEffect(() => {
        fetch("https://api.unsplash.com/photos/?client_id=u-1-a7c5GJ8IqumMMvROC8_zgqtHazH-VIQGXtheMbA")
            .then((datas) => datas.json())
            .then((res) => setData(res))
    }, [])

    onAuthStateChanged(auth, (currUser) => {
        setLoggedUser(currUser);
    })



    return (
        (
            <div>
                <div className={styles.header}>
                    <BiArrowBack />
                    <div className={styles.headpara}>
                        <div className={styles.name}>
                            <p className={styles.headname}>{loggedUser?.displayName}</p>
                            <p className={styles.tweets}>20 Tweet</p>
                        </div>
                        <div className={styles.newlist}>
                            <BsFileEarmarkPlus className={styles.icons} />
                            <MdMoreHoriz className={styles.icons} />
                        </div>
                    </div>
                </div>
                <div style={{"marginTop": "14px"}}>
                    <h3>Pinned List</h3>
                    <div className={styles.pinnedBody}>
                        <p>Nothing to see here yet — pin your favorite Lists to access them quickly.</p>
                    </div>
                </div>
                <div >
                    <h3 style={{"marginBottom": "14px"}}>Discover new Lists</h3>
                    {data.slice(0, 3).map((item, i) => {
                        return (
                            <Follow key={i} name={item?.user.name} profile={item?.user.profile_image.medium} user={item?.user.twitter_username} />
                        );
                    })}
                </div>
            </div>
        )
    );
}

export default List