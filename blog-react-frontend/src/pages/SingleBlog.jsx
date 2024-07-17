import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
export default function SingleBlog() {
  const id = useParams().id

  const [data, setData]= useState(null);
  const [notFound, setNotFound] = useState(false)

  async function retrive(id){   
    const res = await fetch(`${process.env.REACT_APP_URL}/blogs/${id}`);
    if(res.status === 404) {
      console.log("Blog not found")
      setNotFound(true)
      return;
    }
    const blog = await res.json();
    setData(blog[0])
  }

  useEffect(()=>{
    retrive(id)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black justify-center ">

      {notFound ? <div className="text-white text-center text-2xl font-bold">404 Blog not found</div>:
      
        data === null ? <div className="text-white text-center">Loading...</div> : 
        
        <div className="h-full w-full mx-auto container">
        
        
        <button onClick={()=>window.history.back()} className="text-white self-start mx-4 w-1/3 md:w-24 bg-black border-2 border-white rounded-md px-4 py-2 my-4">Back</button>
        <div className="px-4 py-4 md:py-10 md:my-6 bg-black mx-auto flex flex-col w-3/4 border-2 rounded-2xl justify-center items-center">
        <img src={data?.image} className="md:w-1/2" alt={data?.authorPic}/>      
        <div className="flex flex-col md:w-1/2 gap-y-2 my-6 font-bold">
        <p className="text-white font-serif md:text-2xl text-sm">{data?.content}</p>
        <div className="text-white">Author : {data?.author}</div>      
        <div className="text-white">Published On : {data?.published_date}</div>      
        <div className="text-white"> Type of Content : {data?.category}</div>      
        <div className="text-white">
        Tags : {data?.tags?.map((tag, k) => <span key={k} className="text-white bg-gray-500 px-2 py-1 rounded-md mx-1">{tag}</span>)}
        </div>  
        </div>      
        </div>
        
        </div>
}

    </div>
  )
}
