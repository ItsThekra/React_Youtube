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
        navigate("/")

    }

  return (
    <>
    <div className='flex flex-col gap-5 justify-center align-center items-center bg-blue-950 p-5 m-20 rounded text-white'> Pleace Login to use the website
        <input type="text" placeholder='Enter username' className='border border-amber-50 rounded text-1xl p-2' 
        onChange={handelChange}
        value={user.username}
        name='username'
        />
        <input type="text" placeholder='Enter password' className='border-2  border-amber-50 rounded text-1xl p-2'
        value={user.password}
        onChange={handelChange}
        name='password'
        />
        <button className='bg-blue-400 text-white rounded items-center align-center cursor-pointer p-3'
         onClick={handelLogin}
        >Login</button>
    </div>
    </>
  )
}

export default Login