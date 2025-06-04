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


return (
    <>
    <div className='grid grid-cols-1 gap-4 pt-5 justify-center align-center items-center text-center sm:grid-cols-3 mt-20'
    >

        {/* Announcement */}
  {/* <div className="col-span-full flex justify-center items-center">
    <img 
      src="https://mail.google.com/mail/u/0?ui=2&ik=616fb8417f&attid=0.1&permmsgid=msg-a:r2533748484204523138&th=19738ac08ed4d6ad&view=fimg&fur=ip&permmsgid=msg-a:r2533748484204523138&sz=s0-l75-ft&attbid=ANGjdJ8jd6vGLBy2437UMdWpkNAjAiWwwiNea661y040BknD5Ec4A36wUfnpaiELFJZkQf4FeP-dkg-OlMeGpIVpihNiejlkxlAiWnpJu8DJvV2VaI0jhfebXVUdX1E&disp=emb&realattid=ii_19738ad5788872aaed1&zw" 
      className="w-full max-w-4xl rounded-lg shadow-lg"
    />
  </div> */}

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

          <p className='mb-2 p-5'>{video.snippet.title}</p>
        </div>
        </Link>
      ))
      } 
    </div>

    </>
  );
}

export default Home;
