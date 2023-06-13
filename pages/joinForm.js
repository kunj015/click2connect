import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Joinform = () => {
  const [firstname,setFirstname]=useState()
  const [lastname,setLastname]=useState()
  const [email,setEmail]=useState()
  const [experience,setExperience]=useState()
  const [portfolio,setPortfolio]=useState()
  const [city,setCity]=useState()
  const [age,setAge]=useState()
  const [phone,setPhone]=useState()
  const [speciality,setSpeciality]=useState()
  const [about,setAbout]=useState()

  const handleChange = (e)=>{
    if(e.target.name == 'firstname'){
      setFirstname(e.target.value)
    }
    else if(e.target.name == 'lastname'){
      setLastname(e.target.value)
    }
    else if(e.target.name == 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name == 'experience'){
      setExperience(e.target.value)
    }
    else if(e.target.name == 'portfolio'){
      setPortfolio(e.target.value)
    }
    else if(e.target.name == 'city'){
      setCity(e.target.value)
    }
    else if(e.target.name == 'age'){
      setAge(e.target.value)
    }
    else if(e.target.name == 'phone'){
      setPhone(e.target.value)
    }
    else if(e.target.name == 'speciality'){
      setSpeciality(e.target.value)
    }
    else if(e.target.name == 'about'){
      setAbout(e.target.value)
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const data = {firstname,lastname,email,experience,portfolio,city,age,phone,speciality,about}
    // let res =await fetch("http://localhost:3000/api/addform",{
    let res =await fetch("http://www.connect2click.com/api/addform",{
      method :"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
      
    })
    let response = await res.json()
    if(res.status == 200){
      toast.success(response.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      toast.error(response.error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    setFirstname('')
    setLastname('')
    setEmail('')
    setExperience('')
    setPortfolio('')
    setCity('')
    setAge('')
    setPhone('')
    setSpeciality('')
    setAbout('')
  }

  return (
    <div>
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
      <form onSubmit={handleSubmit}  method='POST' className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Enter Details to join
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Please be patient! Currently we are in early access so form review may take some time!
              We will connect to you through email.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2 m-auto">
                <div className="relative">
                  <label
                    htmlFor="firstname"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Firstname
                  </label>
                  <input value={firstname || ""} onChange={handleChange}
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2 m-auto">
                <div className="relative">
                  <label
                    htmlFor="lastname"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Lastname
                  </label>
                  <input value={lastname || ""} onChange={handleChange}
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full m-auto">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input value={email || ""} onChange={handleChange}
                    type="text"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full m-auto">
                <div className="relative">
                  <label
                    htmlFor="experience"
                    className="leading-7 text-sm text-gray-600"
                  >
                    No. of years of experience
                  </label>
                  <input value={experience || ""} onChange={handleChange}
                    type="text"
                    id="experience"
                    name="experience"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full m-auto">
                <div className="relative">
                  <label
                    htmlFor="portfolio"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Please enter your portfolio link
                  </label>
                  <input value={portfolio || ""} onChange={handleChange}
                    type="text"
                    id="portfolio"
                    name="portfolio"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full m-auto">
                <div className="relative">
                  <label
                    htmlFor="city"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Please enter your city
                  </label>
                  <input value={city || ""} onChange={handleChange}
                    type="text"
                    id="city"
                    name="city"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full m-auto">
                <div className="relative">
                  <label
                    htmlFor="age"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Please enter your age
                  </label>
                  <input value={age || ""} onChange={handleChange}
                    type="text"
                    id="age"
                    name="age"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full m-auto">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Please enter your phone number
                  </label>
                  <input value={phone || ""} onChange={handleChange}
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full m-auto">
                <div className="relative">
                  <label
                    htmlFor="speciality"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Please enter what is your speciality
                  </label>
                  <input value={speciality || ""} onChange={handleChange}
                    type="speciality"
                    id="speciality"
                    name="speciality"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full m-auto">
                <div className="relative">
                  <label
                    htmlFor="about"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Describe yourself as photographer in 1 line
                  </label>
                  <input value={about || ""} onChange={handleChange}
                    type="about"
                    id="about"
                    name="about"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Joinform