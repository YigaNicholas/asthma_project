import { useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";


export default function ImageSlider(){
   const[images, setImages]=useState([])
   const[currentslide, setCurrentslide]=useState(0);
   const[loading, setLoading]=useState(true);
   const[error,setError]= useState(null);

   useEffect(()=>{
    const fetchImages=async () => {
        try {
            const res= await fetch("https://picsum.photos/v2/list?page=1&limit=10");
            const data= await res.json();
            console.log(data)
            setImages(data);
            setLoading(false);
        } catch (error) {
            console.error(error)
            setError(error);
            setLoading(false)
        }
    }
    fetchImages()
   },[])//runs once on mount

   //courasel

   useEffect(()=>{
    if (images.length===0)return;

    const interval= setInterval(()=>{
        setCurrentslide((prev)=>prev===images.length-1? 0: prev+1)
    },3000);//changes every 3 seconds

    return()=> clearInterval(interval);
   },[images])

if(loading)return <p>loading...</p>
if(error)return <p>error occured:{error}</p>




   return(
    <div className="relative flex justify-center items-center w-full">
        
        {
            <img
                                
    key={images[currentslide].id}
    src={images[currentslide].download_url}
    alt={images[currentslide].author}
    className="w-full max-h-[500px] object-cover"
  />
        }


       <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentslide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentslide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div> 

        
    </div>
   )

}