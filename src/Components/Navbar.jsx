import React from "react"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdHome } from "react-icons/io";
import { IoIosAlert } from "react-icons/io";
import { MdInsertComment } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdCart } from "react-icons/io";






const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleButtonToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
      <nav className='relative w-full'>
        <div className='max-w-7xl py-7 px-6 mx-auto flex items-center justify-between bg-transparent z-10'>
          <div className='logo'>
            <span className='font-bold text-2xl md:text-3xl lg:text-4xl text-[#FE9E0D]'>
              FOODIE
            </span>
          </div>
          <button
            className='md:hidden lg:hidden'
            onClick={() => setMenuOpen(true)}
          >
            <GiHamburgerMenu />
          </button>
          <div className='hidden md:flex lg:flex items-center text-[#373737] gap-10'>
            <ul className='flex gap-10 text-[#373737] text-sm md:text-base lg:text-lg font-bold'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='#About'>About</a>
              </li>
              <li>
                <a href='#Testimonials'>Testimonials</a>
              </li>
              <li>
                <a href='#Contact'>Contact</a>
              </li>
            </ul>
            <img className='size-7 lg:size-10' src='images/Vector.png' alt='' />
            <button className='font-bold py-3 px-5 rounded-full md:text-xs lg:text-lg text-[#FFFFFF] lg:text-[#373737] bg-[#FE9E0D] lg:bg-[#FFFFFF]'>
              Booking Now
            </button>
          </div>
          <div
            className={`flex flex-col items-end lg:hidden md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
          >
            <button className='p-4' onClick={() => setMenuOpen(false)}>
              ✕
            </button>
            {menuOpen && (
              <div className='flex items-start px-10 text-[#6a6a6a] gap-10 w-full'>
                <ul className="flex flex-col gap-10">
                  <li><IoMdHome className="size-6"/></li>
                  <li><IoIosAlert className="size-6"/></li>
                  <li><MdInsertComment className="size-6"/></li>
                  <li><IoIosCall className="size-6"/></li>
                  <li><IoMdCart className="size-6"/></li>
                </ul>
                <ul className='flex flex-col items-start gap-10 text-[#6a6a6a] text-base md:text-base lg:text-lg font-bold'>
                  <li>
                    <a href='/' >Home</a>
                  </li>
                  <li>
                    <a href='#About'>About</a>
                  </li>
                  <li>
                    <a href='#Testimonials'>Testimonials</a>
                  </li>
                  <li>
                    <a href='#Contact'>Contact</a>
                  </li>
                  <li>
                    <a href='#Cart'>Cart</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-40'
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}

export default Navbar
