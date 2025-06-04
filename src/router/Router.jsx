import React from 'react'
import { createBrowserRouter, Outlet , RouterProvider } from 'react-router'
// Components:
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// Pages: 
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import VideoID from '../pages/VideoID'


// Layout function: its like (General template) of the Website
function Layout() {
    return(
        <>
        <Navbar />
        <div className='min-h-screen px-4'>
           <Outlet />
        </div>
        <Footer />
        </>
    )
}
// Create the router system:
const router = createBrowserRouter([{
    path : "/",
    element: <Layout/>,
    children:
    [
        {path: "/home" , element: <Home />},
        {path: "/videoid/:id" , element: <VideoID />},
        {path:"/" , element: <Login/>},
        {path:"/register" , element: <Register/>},
    ]

}])

// Allow to run it by using provider:
function Router() {
  return (
    < RouterProvider router={router}/>
  )
}

export default Router