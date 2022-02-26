import React,{ useState } from 'react';
import { BsTwitter, BsPerson } from "react-icons/bs";
import { RiHome7Fill, RiFileList2Line } from "react-icons/ri";
import { FaHashtag, FaRegBookmark } from "react-icons/fa";
import { FiBell, FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";
import style from "./Menu.module.css";
import { useRouter } from 'next/router';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Menu = () => {

    const router = useRouter();
    const [loggedUser, setLoggedUser] = useState({});

    onAuthStateChanged(auth, (currUser) => {
        setLoggedUser(currUser);
    })

    const signOutAuth = async () => {
        await signOut(auth);
    }

    return (
        <>
            <div className={style.menu}>
                <div onClick={() => router.push('/')} className={style.twitterItem}>
                    <BsTwitter className={style.twitterLogo} />
                </div>
                <div onClick={() => router.push('/')} className={style.item}>
                    <RiHome7Fill />
                    <p>Home</p>
                </div>
                <div className={style.item}>
                    <FaHashtag />
                    <p>Explore</p>
                </div>
                <div className={style.item}>
                    <FiBell />
                    <p>Notification</p>
                </div>
                <div className={style.item}>
                    <MdOutlineMailOutline />
                    <p>Messages</p>
                </div>
                <div className={style.item}>
                    <FaRegBookmark />
                    <p>Bookmarks</p>
                </div>
                <div onClick={() => router.push("/lists")} className={style.item}>
                    <RiFileList2Line />
                    <p>Lists</p>
                </div>
                <div onClick={() => router.push('/profile')} className={style.item}>
                    <BsPerson />
                    <p>Profile</p>
                </div>
                <div className={style.item}>
                    <CgMoreO />
                    <p>More</p>
                </div>
                <div>
                    <button className={style.tweet}>Tweet</button>
                </div>
                <div onClick={signOutAuth} className={style.profileItem}>
                    <div className={style.profile}>
                        <img src={loggedUser?.photoURL} />
                        <div>
                            <p className={style.name}>{loggedUser?.displayName}</p>
                            <p>{`@${loggedUser.displayName?.toLowerCase()}`}</p>
                        </div>
                    </div>
                    <div>
                        <FiMoreHorizontal />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
