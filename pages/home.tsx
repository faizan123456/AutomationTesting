import type { NextPage } from 'next'
import firebase from 'firebase'
import { securityRules } from 'firebase-admin'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Home:NextPage=()=>{
    const router = useRouter()
    return (
        <>
<div className={styles.navbar}>
 <div className={styles.headings}>
     <h2>Home</h2>
     <h4 className="mb-0 mt-2" style={{cursor:"pointer"}} onClick={()=>router.push('/login')}>Logout</h4>
 </div>
</div>
    <div className="" style={{display:"flex",justifyContent:"center"}}>

    <h3 className="mt-4 d-flex " style={{width:"70%"}}>Create Employee</h3>
    </div>
<div className={styles.homeFormContainer}>
 <div className={styles.homeInputs}>
     <form>
  <div className="form-group my-2">
    <label className="mb-2" htmlFor="exampleInputEmail1">First Name</label>
    <input type="text" className="form-control " style={{padding:"0.65rem"}} name="firstName" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name"/>
  </div>

  <div className="form-group my-2">
    <label   className="mb-2" htmlFor="exampleInputEmail1">Last Name</label>
    <input type="text" className="form-control"  style={{padding:"0.65rem"}} name="lastName"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
  </div>


  <div className="form-group my-2">
    <label  className="mb-2" htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control "  style={{padding:"0.65rem"}} name="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email Address"/>
  </div>

  <div className="form-group my-2">
    <label  className="mb-2" htmlFor="exampleInputPassword1">Project Id</label>
    <input type="text" className="form-control"  style={{padding:"0.65rem"}} name="projectId"  id="exampleInputPassword1" placeholder="Project Id"/>
  </div>
  <button type="submit" className="btn btn-primary my-2">Submit</button>
</form>

 </div>
</div>

</>
    )
}

export default Home