import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Authentication.module.css'


const Signup: NextPage=()=> {
    return (  
        <div className={styles.parentContainer}>
    
    <form className={styles.loginform} style={{width:"37vw"}} action="/action_page.php">
          <h1 className={styles.loginheading}>SIGN UP</h1>
          <div className={styles.icon}>
            {/* <i className="fas fa-user-circle"></i> */}
          </div>
          <div className={styles.formcontainer}>
              
          <div className={styles.container}>
          <label htmlFor="mail"><strong>User Name</strong></label>
            <input className={styles.forminput} type="text" placeholder="Enter UserName" name="name" required/>
            <label htmlFor="mail"><strong>E-mail</strong></label>
            <input className={styles.forminput} type="text" placeholder="Enter E-mail" name="mail" required/>
            <label htmlFor="psw"><strong>Password</strong></label>
            <input className={styles.forminput} type="password" placeholder="Enter Password" name="psw" required/>
          </div>
          <button className={styles.loginbtn} type="submit"><strong><Link href="/home"> SIGN UP</Link></strong></button>
          <div className={styles.container}>
            <label style={{paddingLeft:"15px"}}>
            {/* <input type="checkbox"  checked="checked" name="remember"> Remember me </input> */}
            </label>
           
          </div>
          </div>
        </form>
        </div>
        )
  }

  export default  Signup