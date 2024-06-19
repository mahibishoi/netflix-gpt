import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
     const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
     };
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="background"
          
        />
        </div>
        <form className='w-3/12 p-12 absolute bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className="font-bold text-3xl py-5"> {isSignInForm ? "Sign In":"Sign Up"}</h1>
        {  !isSignInForm && <input type="text" placeholder="Full Name"  className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>} 
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg "/>
          

            <input type="password" placeholder="Password"  className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
<button className="p-4 my-6 bg-red-700 w-full text-center rounded-lg ">{isSignInForm ? " Sign In":"Sign Up"}</button>
<p className='py-6 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ?Sign Up Now":"Already registered Sign In Now.."}</p>
        </form>
        </div>
    
  );
};

export default Login