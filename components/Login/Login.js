import Head from 'next/head';
import React, { useState } from 'react';
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import styles from "./Login.module.css";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from 'firebase/auth';

const Login = () => {

    const [user, setUser] = useState(null);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                setUser(result);
            })
            .catch((err) => {
                console.error(err);
            })
    }


    return (
        <>
            <Head>
                <title>Login / Twitter</title>
                <link rel="icon" href="/twitter.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.loginImage}>
                    <img src="/login2.jpg" />
                </div>
                <div className={styles.login}>
                    <BsTwitter className={styles.icons} />
                    <h1>Happening now</h1>
                    <h3>Join Twitter today.</h3>
                    <div onClick={signInWithGoogle} className={styles.google}>
                        <FcGoogle size={25}/>
                        <button>Continue with Google</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login