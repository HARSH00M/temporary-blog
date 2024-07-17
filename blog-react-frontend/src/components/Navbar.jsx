import { NavLink } from "react-router-dom"
import { FaDribbbleSquare, FaInstagram, FaLinkedin, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
    const navItems = [
        // {path: '/', link: 'Home'},
        { path: '/', link: 'Home' },
        { path: '/services', link: 'Service' },
        { path: '/about', link: 'About' },
        { path: '/blogs', link: 'Blog' },
        { path: '/contact', link: 'Contact' }
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <header className="top-0 right-0 left-0 block sticky">
            <nav className="bg-black flex flex-row gap-20 py-4 px-6 items-center justify-between">

                <div className="text-2xl text-white font-bold font-serif">BlogHere<span className="text-indigo-400">.in</span>
                </div>

                {/* large device navigation bar */}
                <ul className="text-white text-xl lg:flex gap-10 hidden">
                    {
                        navItems.map(({ path, link }) =>
                            <li key={path}>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                     } to={path}>{link}</NavLink>
                            </li>
                        )
                    }
                </ul>

                {/* menu icons  */}
                <div className="text-white text-2xl font-bold lg:flex gap-4 hidden items-center ">
                    <a href="#" className="hover:text-violet-500"><FaDribbbleSquare /></a>
                    <a href="#" className="hover:text-violet-500"><FaInstagram /></a>
                    <a href="#" className="hover:text-violet-500"><FaLinkedin /></a>
                    <button className="cursor-pointer text-lg px-3 py-1 lg:hover:scale-105 duration-150 ease-in bg-violet-500 rounded-sm">Login</button>
                </div>

                {/* mobile view toggler*/}
                <button onClick={toggleMenu} className="text-white hover:text-indigo-400 text-3xl lg:hidden">
                    {isMenuOpen ? <FaXmark className="w-5 h-6" /> : <FaBars className="w-5 h-5" />}
                </button>

            </nav>

            {/* actual mobile view */}

            <ul className={`text-black text-xl p-10 ${isMenuOpen ? "visible transition-all ease-in delay-500 duration-500 bg-white" : "hidden"} `}>
                {
                    navItems.map(({ path, link }) =>
                        <li key={path}>
                            <NavLink onClick={toggleMenu} className="hover:text-indigo-400" to={path}>{link}</NavLink>
                        </li>
                    )
                }
            </ul>
        </header>
    )
}