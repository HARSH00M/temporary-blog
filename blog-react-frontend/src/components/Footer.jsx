import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-slate-800 flex md:flex-row flex-col justify-evenly py-16 text-white">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-y-5 justify-items-center  md:space-x-6">
        <ul>

          <li className="font-bold pb-2">Category</li>
          <li className="text-slate-400">News</li>
          <li className="text-slate-400">World</li>
          <li className="text-slate-400">Game</li>
          <li className="text-slate-400">Reference</li>
        </ul>
        <ul>
          <li className="font-bold pb-2">Apples</li>
          <li className="text-slate-400">WEB</li>
          <li className="text-slate-400">eCommerce</li>
          <li className="text-slate-400">Business</li>
          <li className="text-slate-400">Entertainment</li>
          <li className="text-slate-400">Porfolio</li>
        </ul>
        <ul>
          <li className="font-bold pb-2" >Cherry</li>
          <li className="text-slate-400">Media</li>
          <li className="text-slate-400">Brochure</li>
          <li className="text-slate-400">Non-profit</li>
          <li className="text-slate-400">Education</li>
          <li className="text-slate-400">Projects</li>
        </ul>
        <ul>
          <li className="font-bold pb-2">Business</li>
          <li className="text-slate-400">Infoprenuer</li>
          <li className="text-slate-400">Personal</li>
          <li className="text-slate-400">Wiki</li>
          <li className="text-slate-400">Forum</li>
          <li className="text-slate-400">Projects</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3 py-4 text-lg font-bold items-center ">
        <label className="">Enter your Email for Stay updated </label>
        <div className="inline-flex ">
          
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
          
          <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-violet-400 rounded-lg border border-white hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-white ">

            <span className="">Subscribe</span>
          </button>
        </div>
        <div>
          <p className="text-sm font-normal inline-flex items-center gap-2"><span><FaRegCopyright /></span>Copyright 2024 | All right reserved.</p>
          
          </div>
      </div>


    </div>
  )
}
