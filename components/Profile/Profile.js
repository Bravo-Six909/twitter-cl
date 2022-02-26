import React,{ useState , useEffect } from 'react'
import { BiArrowBack } from "react-icons/bi";
import { BsCalendar2Week } from "react-icons/bs";
import styles from "./Profile.module.css";
import ProfileNavBar from './ProfileNavBar';
import { db,auth } from '../../firebase';
import { collection , getDocs } from "firebase/firestore";
import Feed from '../Center/Feed';

const Profile = () => {
    const postRef = collection(db,"posts");
    const [post, setPost] = useState([]);

    useEffect(() => {
        getDocs(postRef)
        .then((snapshot) => {
            setPost(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
        })
    }, [])
    



    return (
        <>
            <div className={styles.header}>
                <BiArrowBack />
                <div className={styles.headpara}>
                    {/* <p className={styles.headname}>{auth?.currentUser?.displayName}</p> */}
                    <p className={styles.tweets}>20 Tweet</p>
                </div>
            </div>
            <div className={styles.body}>
                <img className={styles.background} src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <div className={styles.profile}>
                    <img className={styles.profileImg} src={auth?.currentUser?.photoURL} />
                    <div className={styles.edit}>
                        <p>Edit Profile</p>
                    </div>
                </div>
            </div>
            <div className={styles.detail}>
                <h2>{auth?.currentUser?.displayName}</h2>
                <p style={{color : "gray"}}>{`@${auth?.currentUser?.displayName.toLowerCase()}`}</p>
                <div className={styles.join}>
                    <BsCalendar2Week />
                    <p>Joined 20th December 2020</p>
                </div>
                <div className={styles.followers}>
                    <p style={{color: "gray"}}><strong style={{color: "black"}}>51</strong> Followings</p>
                    <p style={{marginLeft: "10px",color: "gray"}}><strong style={{color: "black"}}>5</strong> Followers</p>
                </div>
            </div>
            <ProfileNavBar />
            {post.map((item,i) => {
                return(
                    <Feed key={i} name={item?.name} username={item?.name.toLowerCase()} desc={item?.desc} profilePic={item?.profilePhoto}/>
                );
            })}
        </>
    )
}

export default Profile