import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    // create two useState for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitted = (e) =>{
        e.preventDefault();
        handleLogin(email,password);
        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        {/* Login div  */}
        <form 
            onSubmit={(e)=>{
                submitted(e);
            }}
        className='flex items-center rounded-lg justify-center flex-col min-h-[80vh] bg-[#1c1c1c] p-5 min-w-[60vh]'>
            <input 
                value = {email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
            required type="email" placeholder='Email' className='border-red-700 px-4 py-2 rounded-full w-[50vh] focus:outline-none placeholder:text-gray-300 m-3 bg-[#1c1c1c] border-2 ' />
            <input 
                value = {password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
            required type="password" className='border-red-700 px-4 py-2 rounded-full w-[50vh] focus:outline-none m-3 placeholder:text-gray-300 bg-[#1c1c1c] border-2 ' placeholder='Password' />
            <button className='border-none  px-4 py-2 rounded-full w-[50vh] focus:outline-none m-3 bg-green-500 hover:bg-green-700 '>Log in </button>
        </form>
    </div>
  )
}

export default Login