import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav>
            {/* <div className={`${styles.flex} ${styles.justifyEvenly} ${styles.py5} ${styles.navBackground}`}> */}
            <div className="flex justify-evenly py-5 bg-stone-700">
                    <div className="logo text-white">
                    <Link href={"/"}>
                    This is logo
                    </Link>
                    </div>
                    <div className="address text-white">
                        This is address
                    </div>
                    <div>
                    <input type="text" placeholder='Click Here to Search' className={styles.navInput}/>
                    </div>
                    <div className="signIn text-white">
                    <Link href={"/login"}>
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      This is signIn
                    </button>
                    </Link>
                    </div>

            </div>
           </nav>
  )
}

export default Navbar
