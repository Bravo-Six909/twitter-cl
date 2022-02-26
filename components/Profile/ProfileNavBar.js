import React from 'react'
import styles from "./ProfileNav.module.css";

const ProfileNavBar = () => {
  return (
    <>
        <ul className={styles.nav}>
            <li>Tweets</li>
            <li>Tweets & replies</li>
            <li>Media</li>
            <li>Likes</li>
        </ul>
    </>
  )
}

export default ProfileNavBar