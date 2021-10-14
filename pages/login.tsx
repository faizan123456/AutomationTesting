import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Authentication.module.css'
import firebase from '../firebase/initfirebase';
import { useState } from 'react';
import { useRouter } from 'next/router'
const Login: NextPage=()=> {
  
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessgae, setErrorMessage] = useState('');
    const loginUser = () => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
        // alert("login success!");
        console.log("login success")
        router.push('/home')
        // Signed in
        // var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.log("errorMessage", errorMessage);
      });
    }
    return (  
      <div className={styles.parentContainer}>    
        <div className={styles.loginform} style={{width:"37vw"}}>
          <h1 className={styles.loginheading}>SIGN IN</h1>
          <div className={styles.formcontainer}>
          <span style={{ color: "red", fontWeight: "bold" }}>{errorMessgae !== "" && errorMessgae}</span>
          <div className={styles.container}>
            <label htmlFor="mail"><strong>E-mail</strong></label>
            <input className={styles.forminput} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter E-mail" name="mail" required/>
            <label htmlFor="psw"><strong>Password</strong></label>
            <input className={styles.forminput} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" name="psw" required/>
          </div>
          <button className={styles.loginbtn} onClick={loginUser} type="submit"><strong>SIGN IN</strong></button>
          <div className={styles.container}>
          </div>
          <span className={styles.psw}><Link href="/signup">Create Account</Link></span>
          </div>
        </div>
      </div>
    )
  }

  export default  Login