import React,{ useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Logo from "../public/logo.png"
import Image from 'next/image'

// const locationData =async ()=>{
//   const [location,setLocation] = useState();
//   // useEffect(() => {
      
//   // },[])
//   useEffect(getData,[])
// }
// function getData() {
//   return console.log("function running")
//   const data = await fetch('https://api.ipregistry.co/?key=fwy214vud5dw3nly')
//   .then((res)=>{
//     if(res.status == 200){
//       console.log(res.status)
//     }
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
//   console.log(data)
// }      


// https://api.ipregistry.co/?key=fwy214vud5dw3nly 



const Navbar = () => {
  return (
    <nav className='shadow-md sticky z-50 top-0 left-0'>
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
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                    </span>
                    <span className='font-normal cursor-pointer'>Lucknow,India</span>
                    </div>
                    <div>
                    <input type="text" placeholder='Click Here to Search' className={styles.navInput}/>
                    </div>
                    <div className='flex flex-row mt-2'>
                    <div className="signIn text-white">
                    <Link href={"/login"}>
                    <button className="flex mx-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Login
                    </button>
                    </Link>
                    </div>
                    <div className="signIn text-white">
                    <Link href={"/signup"}>
                    <button className="flex mx-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Signup
                    </button>
                    </Link>
                    </div>
                    </div>

            </div>
           </nav>
  )
}

export default Navbar
