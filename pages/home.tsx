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
<h1>welcome to the home</h1>
</>
    )
}

export default Home