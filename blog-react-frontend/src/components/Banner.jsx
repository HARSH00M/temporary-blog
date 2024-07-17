
// import logo from '../assets/backlit-blogging-business-coding.jpg'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="px-4 py-32  bg-black mx-auto flex flex-col items-center">
        <div className="text-white text-center">
            <h1 className="text-4xl lg:text-7xl lg:leading-snug font-bold mb-5">Welcome to Our Blog</h1>
            <p className="lg:text-2xl lg:mx-24 font-medium">Dive into a captivating realm of thought-provoking articles, engaging stories, and insightful perspectives. BlogHere<span className="text-indigo-400 font-bold ">.in 
              </span> is not just a platform; it's a community of passionate writers and avid readers who come together to share, learn, and inspire.</p>
        </div>
        <br/>
        <Link to={'/blog'} className="cursor-pointer inline-flex gap-3 items-center text-lg px-3 py-2 font-bold lg:text-2xl text-white bg-white bg-opacity-10 rounded-sm lg:hover:scale-105 duration-150 ease-in "><span >Learn More</span> <FaArrowRight className="lg:text-lg " /></Link>
    </div>
  )
}
