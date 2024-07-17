import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

export default function SideBar() {


  const [blogdata, setBlogData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        let url = `${import.meta.env.VITE_URL}/blogs`;


        const res = await fetch(url);
        const json = await res.json();
        setBlogData(json);

      } catch (e) {
        console.log("The error found: \n" + e);
      }
    }
    fetchData();

  }, [])

  const popularBlog = blogdata.slice(0, 6);
  const latestBlog = blogdata.slice(16, 20);


  return (
    <div className='flex flex-col  border-black md:w-1/3'>

      <div className='flex flex-col'>
        <h3 className='text-2xl font-bold font-serif underline underline-offset-8 ml-3 pl-3'>Latest Blogs</h3>
        <div  className='mx-2 my-3'>

          {
            latestBlog.map((element, k) =>
              <div key={k} className=' shadow-xl  border-gray-500 rounded-md py-2 px-8 my-4'>
                <div>{element.title}</div>
                <button className=' bg-violet-500 text-white px-2 py-1 rounded-md my-2 inline-flex gap-x-1 items-center '><span>read more </span><FaArrowRight className="text-white" /></button>
              </div>)
          }

        </div>
      </div>


      <div className='flex flex-col'>
        <h3 className='text-2xl font-bold font-serif underline underline-offset-8 ml-3 pl-3'>Popular Blogs</h3>
        <div className='mx-2 my-3'>

          {
            popularBlog.map((element, k) =>
              <div key={k} className=' shadow-xl border-gray-500 rounded-md  py-2 px-8 my-4'>
                <div>{element.title}</div>
                <Link className=' bg-violet-500 text-white px-2 py-1 rounded-md my-2 inline-flex gap-x-1 items-center '><span>read more </span><FaArrowRight className="text-white" /></Link>
              </div>)
          }

        </div>
      </div>
    

    </div>
  )
}
