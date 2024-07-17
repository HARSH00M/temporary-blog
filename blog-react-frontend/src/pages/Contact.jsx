import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="h-screen w-full bg-black mx-auto flex flex-col justify-center items-center">
        <div className="text-white text-center">
            <h1 className="text-4xl lg:text-7xl lg:leading-snug font-bold mb-5">Contact Section</h1>
        </div>
        <br/>
        <Link to={'/blog'} className="cursor-pointer inline-flex gap-3 items-center text-lg px-3 py-2 font-bold lg:text-2xl text-white bg-white bg-opacity-10 rounded-sm lg:hover:scale-105 duration-150 ease-in "><span >Learn More</span> <FaArrowRight className="lg:text-lg " /></Link>
    </div>
  )
}
