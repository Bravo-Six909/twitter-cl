import React, { useState, useEffect } from 'react';
import style from "./Feedbody.module.css";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdGif, MdOutlineInsertPhoto } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";
import Feed from './Feed';
import { TailSpin } from 'react-loader-spinner';
import { auth, db } from '../../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

const Feedbody = () => {

  const [desc, setDesc] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);
  const [mypost, setMyPost] = useState([]);
  const [data, setData] = useState([]);
  const [snapshot] = useCollection(collection(db, "posts"));
  const postRef = collection(db, "posts");

  useEffect(() => {
    getDocs(postRef)
      .then((snapshot) => {
        setMyPost(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
  }, [snapshot])

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then((datas) => datas.json())
      .then((res) => setData(res))
  }, []);

  const setPost = async () => {
    const postData = await addDoc(postRef, { name: auth?.currentUser?.displayName, desc: desc, username: `@${auth?.currentUser?.displayName}`, profilePhoto: auth?.currentUser?.photoURL });
    setDesc('');
  }



  onAuthStateChanged(auth, (currUser) => {
    setLoggedUser(currUser);
  })

  const signOutAuth = async () => {
    await signOut(auth);
  }


  return (

    <>
      <div className={style.body}>
        <div className={style.header}>
          <p onClick={signOutAuth}>Home</p>
          <img src='https://pbs.twimg.com/media/EA1fiZUVAAE4HAT.jpg' />
        </div>
        <div className={style.input}>
          <img src={loggedUser?.photoURL} />
          <div className={style.inputField}>
            <input onChange={(e) => { setDesc(e.target.value) }} placeholder="What's happening?" />
            <div className={style.inputIcon}>
              <div className={style.icons}>
                <MdOutlineInsertPhoto className={style.displayIcon} />
                <MdGif className={style.displayIcon} />
                <BiPoll className={style.displayIcon} />
                <BsEmojiSmile className={style.displayIcon} />
                <AiOutlineSchedule className={style.displayIcon} />
                <HiOutlineLocationMarker className={style.displayIcon} />
              </div>
              <button onClick={setPost} className={style.tweet}>Tweet</button>
            </div>
          </div>
        </div>
        {mypost.map((item, i) => {
          return (
            <Feed key={i} name={item?.name} username={item?.name.toLowerCase()} desc={item?.desc} profilePic={item?.profilePhoto} />
          );
        })}
        {!data ? <div className={style.loader}><TailSpin heigth="100" width="100" color='#1a8cd8' /></div> : data.map((item, i) => {
          return (
            <Feed key={i} image={item?.urls?.full} name={item?.user?.name} username={item?.user?.instagram_username} profilePic={item?.user?.profile_image?.medium} desc={item?.alt_description} />
          );
        })}
        <div className={style.loader}><TailSpin heigth="100" width="100" color='#1a8cd8' /></div>
      </div>
    </>
  );
};

export default Feedbody;
