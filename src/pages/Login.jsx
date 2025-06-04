import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2';

function Login() {
   // لان المستخدم راح يتفاعل مع الانبت حق الاسم والرمز
    const [user, userSet] = useState({
    username: "",
    password: "",
  });

  // useEffect:
  let navigate = useNavigate();

  // كيف اخذ البيانات من المستخدم ؟ 
 const handelChange = (e) =>{
    const l = userSet
    ( 
        {...user, [e.target.name]: e.target.value}
    )
 }

 // الكود بداخل يوزافيكت تشتغل، بس لما تتغير قيمة اليوز
    // useEffect(() => {
    // console.log("User updated:", user);
    // }, [user]);

    const handelLogin = ()=>{
        if(user.username == "" || user.password == ""){
            Swal.fire({
            title: "You need to enter your username and passwod !",
            icon: "error"
        });
        return
        }
        localStorage.setItem("user", user.username)
        localStorage.setItem("password", user.password)
        console.log("saved!", user.username, user.password);
        navigate("/home")

    }

  return (
    <>
    <div className='min-h-screen flex items-center justify-center '>
      <div className='bg-white text-black p-10 rounded-xl shadow-lg w-full max-w-md'>

        
        <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
        <p className='text-center text-gray-500 mb-6'>Plaese login to use the website</p>

        
        <div className='flex flex-col gap-4'>

          <input 
            type="text" 
            placeholder='Enter username' 
            className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            onChange={handelChange}
            value={user.username}
            name='username'
          />

          <input 
            type="password" 
            placeholder='Enter password' 
            className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={user.password}
            onChange={handelChange}
            name='password'
          />

          <button 
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
            onClick={handelLogin}
          >
            Login
          </button>

        </div>
      </div>
    </div>
    </>
  )
}

export default Login
