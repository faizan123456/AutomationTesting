import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Authentication.module.css'


const Login: NextPage=()=> {
    return (  
    <div className={styles.parentContainer}>    

<form className={styles.loginform} style={{width:"37vw"}}  action="/action_page.php">
      <h1 className={styles.loginheading}>SIGN IN</h1>
      <div className={styles.formcontainer}>
      <div className={styles.container}>
        <label htmlFor="mail"><strong>E-mail</strong></label>
        <input className={styles.forminput} type="text" placeholder="Enter E-mail" name="mail" required/>
        <label htmlFor="psw"><strong>Password</strong></label>
        <input className={styles.forminput} type="password" placeholder="Enter Password" name="psw" required/>
      </div>
      <button className={styles.loginbtn} type="submit"><strong><Link href="/home"> SIGN IN</Link></strong></button>
      <div className={styles.container}>
      </div>
      <span className={styles.psw}><Link href="/signup">Create Account</Link></span>
      </div>
    </form>
    </div>
    )
  }

  export default  Login