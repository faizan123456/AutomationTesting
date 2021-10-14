import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

import styles from '../styles/Authentication.module.css'
import firebase from '../firebase/initfirebase'
import {db} from '../firebase/initfirebase'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup: NextPage=()=> {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const router = useRouter()
  const creatUser=()=>{
  // e.preventDefault()
  if(name!=='' && email!=='' && password!==''  )
  {
    console.log(email);
    console.log(password);
       
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(() => {
        alert("created user")
        db.collection("user").doc().set({
          name: name,
          email: email,
          password: password,
          admin:false,
      })
      .then(() => {
          console.log("Document successfully written!");
          router.push('/home')
      })
      .catch((error) => {
        setError(error.message)
          console.error("Error writing document: ", error);
      });
        // ...
      })
      .catch((error) => {
    console.log(error.message);
    setError(error.message)
      });

  }else {
    setError("Please fill all the fields!")
  }


  }
    return (  
        <div className={styles.parentContainer}>
    
    <div className={styles.loginform} style={{width:"37vw"}}>
          <h1 className={styles.loginheading}>SIGN UP</h1>
          <div className={styles.icon}>
            {/* <i className="fas fa-user-circle"></i> */}
          </div>
          <div className={styles.formcontainer}>
              
          <div className={styles.container}>
          <label htmlFor="mail"><strong>User Name</strong></label>
            <input className={styles.forminput} onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Enter UserName" name="name" required/>
            <label htmlFor="mail"><strong>E-mail</strong></label>
            <input className={styles.forminput} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter E-mail" name="mail" required/>
            <label htmlFor="psw"><strong>Password</strong></label>
            <input className={styles.forminput} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" required/>
            <p className={styles.error}>{error}</p>
          </div>
          <button className={styles.loginbtn} type="submit" onClick={()=>creatUser()}><strong>SIGN UP</strong></button>
          <div className={styles.container}>
            <label style={{paddingLeft:"15px"}}>
            {/* <input type="checkbox"  checked="checked" name="remember"> Remember me </input> */}
            </label>           
          </div>
          </div>
        </div>
        </div>
        )
  }

  export default  Signup