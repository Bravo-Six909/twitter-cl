import React from 'react'
import List from '../components/Lists/List';
import Head from 'next/head';
import Menu from "../components/Left Side/Menu";
import FollowPage from "../components/Right Side/FollowPage";

const Lists = () => {
  return (
    <div>
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
            <List />
          </div>
          <div className="rightSide">
            <FollowPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lists;