import React from 'react'
import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'

function Home() {
    // UseState : to store the videos and put it inside the UseEffect
    const [videos , setvideos] = useState([])
    // const [VideoID , setVideoID] = useState("")
    const navigate = useNavigate()
    // API with my API Key
    const apiUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=SA&key=AIzaSyBG4Qr9PNI67jeltYEeyW_Z3uXzVeqBLwk"

    useEffect(() => {
        try{
            axios.get(apiUrl)
            .then((response) => {
                console.log(response.data.items);
                setvideos(response.data.items)
            })

        }catch{
            console.log("OOPS! There is somwthing wrong!")
        }
    
    }, []);


    // const handelVideoID = ()=> {
    //     useEffect(()=>{
    //         navigate(`/videoid/${videos.id}`)
    //     },[])
        
    // }

return (
    <>
    <div className='grid grid-cols-1 gap-4 pt-5 justify-center align-center items-center text-center sm:grid-cols-3'
    // onClick={handelVideoID(videos.id)}
    >
        {
      videos.map((video) => (
        <Link to={`/videoid/${video.id}`}>
        <div key={video.id} className=' bg-white shadow'>
          <iframe
           className='rounded h-50 w-full align-center align-center '
            src={`https://www.youtube.com/embed/${video.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <p className='mb-2'>{video.snippet.title}</p>
        </div>
        </Link>
      ))
      } 
    </div>

    </>
  );
}

export default Home;
