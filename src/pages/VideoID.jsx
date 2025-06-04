import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router'
import axios from 'axios'
function VideoID() {

    // Using "useParams" to extract id from url = to show the clicked vid 
    const {id} = useParams()
    // API = the general api from google + id + my api key
    const APIurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyBG4Qr9PNI67jeltYEeyW_Z3uXzVeqBLwk`
    const SideAPIUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=SA&key=AIzaSyBG4Qr9PNI67jeltYEeyW_Z3uXzVeqBLwk"
    // UseState to save selected vid:
    const [selected , setSelected] = useState(null)
    // To save the videos in side bar:
    const [sideVideos , setsideVideos] = useState([])

    const [comments, setComments] = useState([]); // To save the commentes that comes from API 
    const [newComment, setNewComment] = useState(""); // To save the comments from user


    // Get the data from API but now I need only the selected vid 
    useEffect(() => {
        axios.get(APIurl)
        .then(function (response) {
            console.log(response.data.items[0]);
            setSelected(response.data.items[0]);
        })
        .catch(function (error) {
            console.log(error);
        })
        // كل ماضغط المستخدم على الاي دي مختلف .. فعلنا اليوز افيكت
  }, [id]);

      // Get the data from API but now I need only 5 videos not all of them
    useEffect(() => {
            axios.get(SideAPIUrl)
            .then(function (response) {
                console.log(response.data.items)
                setsideVideos(response.data.items);
            })
            .catch(function (error) {
                console.log(error);
            })
    },[]);


    // Commments 
    useEffect(() => {
    axios
        .get(`https://683c229e28a0b0f2fdc64684.mockapi.io/YouTube/comments?videoId=${id}`)
        .then((res) => {
        setComments(res.data);
        })
        .catch((err) => console.log(err));
    }, [id]);


    const handleCommentSubmit = () => {
    const username = localStorage.getItem("user");

    if (newComment.trim() === "") return;

    axios
        .post("https://683c229e28a0b0f2fdc64684.mockapi.io/YouTube/comments", {
        videoId: id,
        username: username,
        text: newComment,
        })
        .then((res) => {
        setComments([...comments, res.data]); 
        setNewComment(""); 
        })
        .catch((err) => console.log(err));
    };
  
  return ( 
    <>
    <div className='grid grid-cols-4 gap-4 p-4'>

    {/* SIDE BAR */}
    <div className='col-span-1 space-y-4 mt-20'>
        {sideVideos.map((item)=>{
            return(
            <div key={item.id} className='shadow text-center'>
                <iframe 
                // src={SideAPIUrl}
                // رابط الفيديو مهم جدا تفهميه، عندك مشاكل معاه
                src={`https://www.youtube.com/embed/${item.id}`} 
                width="100%" 
                height="200"
                allowFullScreen
                className='rounded cursor-pointer'
                />

                <p className='p-3'>{item.snippet.title}</p>
            </div>
            )
        })}
    </div>

     {/* Main section */}
    <div className='col-span-3 w-full'>
        <iframe 
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        width="100%" 
        height="600"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className='rounded cursor-pointer mt-20'
        />
        {/* To aviod this error :  Cannot read properties of null (reading 'snippet') -- if selected exite get the snippet and if snippet exite get the title*/}
        <p className=' text-2xl pt-3 text-right'>{selected?.snippet?.title}</p>
        <p className='text-gray-700 text-sm whitespace-pre-wrap mt-4 text-right'>{selected?.snippet?.description}</p>
        <p className='text-gray-700 text-sm whitespace-pre-wrap mt-4 text-right'>سنة النشر  | Year : {selected?.snippet?.publishedAt}</p>
        <p className='text-gray-700 text-sm whitespace-pre-wrap mt-4 text-right font-bold'> عدد المشاهدات 👁️ :  {selected?.statistics?.viewCount}</p>


        {/* Comments section */}
<div className="mt-8 bg-[#f1f1f1] text-black p-6 rounded-lg shadow-lg w-full max-w-2xl lg:ml-auto lg:mr-0 sm:mx-auto">
  <h2 className="text-lg font-semibold mb-4 text-right">Comments</h2>


 <div className="space-y-4 mb-6 text-right">
    {comments.map((comment) => (
        <div key={comment.id} className="bg-white p-4 rounded shadow-sm">
        <p className="text-sm text-gray-600 mb-1 font-semibold">{comment.username}</p>
        <p className="text-black">{comment.text}</p>
        </div>
    ))}
    </div>

  
  <div className="flex flex-col space-y-3 text-right">
    <textarea
    className="bg-white text-black p-3 rounded resize-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
    placeholder= "Write your comment here ... "
    rows={3}
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}
    />


    <button
    onClick={handleCommentSubmit}
    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded self-end"
    >
  Send
    </button>

  </div>
</div>
        
    </div>

    </div>
    </>
  )
}

export default VideoID