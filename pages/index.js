import { onAuthStateChanged } from 'firebase/auth';
import Head from 'next/head'
import Feedbody from '../components/Center/Feedbody';
import Menu from '../components/Left Side/Menu';
import FollowPage from '../components/Right Side/FollowPage';
import Tweet from '../components/Tweet/Tweet';
import { auth } from '../firebase';
import { useState } from 'react'; 

export default function Home() {

  const [loggedUser, setLoggedUser] = useState(null);

  onAuthStateChanged(auth,(currUser) => {
    setLoggedUser(currUser);
  })


  return (
    <div>
      <Head>
        <title>Home / Twitter</title>
        <link rel="icon" href="/twitter.ico" />
      </Head>
      <div className='main'>
        <div className="leftSide">
          <Menu />
        </div>
        <div className="center">
          <Feedbody />
        </div>
        <div className="rightSide">
          <FollowPage />
        </div>
      </div>
    </div>
  );
}