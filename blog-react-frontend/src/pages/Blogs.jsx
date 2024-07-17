import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogPage from "../components/BlogPage";




export default function Blogs() {
  return (
    <div >
      <div className="px-4 py-32  bg-black mx-auto flex flex-col items-center">

        <div className="text-white text-center">
            <h1 className="text-4xl lg:text-7xl lg:leading-snug font-bold mb-5">Blog Section</h1>
        </div>
        <br/>
        <Link to={'/blog'} className="cursor-pointer inline-flex gap-3 items-center text-lg px-3 py-2 font-bold lg:text-2xl text-white bg-white bg-opacity-10 rounded-sm lg:hover:scale-105 duration-150 ease-in "><span >Learn More</span> <FaArrowRight className="lg:text-lg " /></Link>
        
      </div>
        {/* all blogs container */}
        <div>
          <BlogPage/>
        </div>
    </div>
  )
}
