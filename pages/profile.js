import React,{ useState , useEffect } from 'react'
import Head from 'next/head'
import Menu from '../components/Left Side/Menu';
import Profile from '../components/Profile/Profile';
import FollowPage from '../components/Right Side/FollowPage';
import { db,auth } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Profiles = () => {
    const postRef = collection(db,"posts");
    const [post, setPost] = useState([]);

    useEffect(() => {
        getDocs(postRef)
        .then((snapshot) => {
            setPost(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
        })
    }, [])

    return (
        <div>
            <div>
                <Head>
                    <title>Twitter / Profile</title>
                    <link rel="icon" href="/twitter.ico" />
                </Head>
                <div className='main'>
                    <div className="leftSide">
                        <Menu />
                    </div>
                    <div className="center">
                        <Profile />
                    </div>
                    <div className="rightSide">
                        <FollowPage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles;