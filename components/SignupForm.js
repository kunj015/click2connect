import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = () => {
  const [firstname,setFirstname] = useState();
  const [lastname,setLastname] = useState();
  const [email,setEmail]=useState();
  const [password,setPassword] = useState();

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
    else if(e.target.name == 'password'){
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const data = {firstname,lastname,email,password}
    // let res =await fetch("http://localhost:3000/api/signup",{
    let res =await fetch("http://www.connect2click.com/api/signup",{
      method :"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
      
    })
    let response = await res.json();
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
    setPassword('')
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

    <form onSubmit={handleSubmit}  method='POST'>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Sign Up
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Please Enter Details to Sign Up
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
                  <input
                    value={firstname || ""}
                    onChange={handleChange}
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
                  <input
                    value={lastname || ""}
                    onChange={handleChange}
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
                  <input
                  value={email || ""}
                    onChange={handleChange}
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
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    value={password || ""}
                    onChange={handleChange}
                    type="password"
                    id="password"
                    name="password"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              {/* <div className="p-2 w-full m-auto">
                <div className="relative">
                  <label
                    htmlFor="confirmpassword"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Confirm Password
                  </label>
                  <input
                    value={password || ""}
                    onChange={handleChange}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div> */}
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </form>
    </div>
  );
};

export default SignupForm;
