import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Logo from "../public/logo.png"
import Image from 'next/image'
import FaSearchLocation from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
            {/* <div className={`${styles.flex} ${styles.justifyEvenly} ${styles.py5} ${styles.navBackground}`}> */}
            <div className="flex justify-around py-4 bg-cyan-950">
                    <div className="logo text-white">
                    <Link href={"/"}>
                    <Image src={Logo} 
                    alt='Logo' 
                    width={50} 
                    height={50}
                    />
                    </Link>
                    </div>
                    <div className='px-3 py-3 font-bold text-white'>
                        FaSearchLocation
                    </div>
                    <div>
                    <input type="text" placeholder='Click Here to Search' className={styles.navInput}/>
                    </div>
                    <div className="signIn text-white">
                    <Link href={"/login"}>
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      login
                    </button>
                    </Link>
                    </div>

            </div>
           </nav>
  )
}

export default Navbar
