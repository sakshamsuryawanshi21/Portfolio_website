
"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll,setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = ()=>{
        sideMenuRef.current.style.transform='translateX(-16rem)'
    } 
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform='translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                 setIsScroll(true);
            }else{
 setIsScroll(false);
            }
        })
    })

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
       <nav
  className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
    flex items-center justify-between z-50 transition-all duration-300



    ${isScroll ? "backdrop-blur-lg shadow-sm" : ""}`}
>

            <a href="/" className="mr-14 cursor-pointer select-none group">
  <h1 className={`text-3xl font-extrabold tracking-tight font-sans transition-colors duration-300 
    ${isDarkMode ? 'text-white group-hover:text-gray-300' : 'text-gray-900 group-hover:text-gray-600'}`}>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      Saksham
    </span>
    <span className="text-primary ml-1 text-4xl leading-none">.</span>
  </h1>
</a>


        <ul ref={sideMenuRef} className={`hidden md:flex cursor-pointer items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
  <li><a href="#top">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#work">My Work</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#contact">Contact me</a></li>
</ul>

        <div className='flex items-center gap-4'>

            <button onClick={()=>setIsDarkMode(prev=>!prev)}>
                <Image src={isDarkMode ? assets.sun_icon: assets.moon_icon} alt= '' className='w-6'/>
            </button>
            <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 ${
    isDarkMode ? 'border-white/50' : 'border-black'
  }`}
>Contact<Image src={isDarkMode ? assets.arrow_icon_dark: assets.arrow_icon} alt='' className='w-3'/></a>
            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={isDarkMode ?assets.menu_white :assets.menu_black} alt= '' className='w-6'/>
            </button>
        </div>


       {/* ---------------Mobile menu */}  
<ul
  ref={sideMenuRef}
  className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0
  top-0 bottom-0 w-64 z-50 h-screen transition duration-500 translate-x-64
  ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
>


 <div className='absolute right-6 top-6' onClick={closeMenu}>
    <Image src={isDarkMode? assets.close_white : assets.close_black} alt='' className='w-5 cursor pointer'/>
 </div>

  <li><a className='' onClick={closeMenu} href="#top">Home</a></li>
  <li><a className='' onClick={closeMenu} href="#work">My Work</a></li>
  <li><a className='' onClick={closeMenu} href="#about">About</a></li>
  <li><a className='' onClick={closeMenu} href="#services">Services</a></li>
  <li><a className='' onClick={closeMenu} href="#contact">Contact</a></li>
</ul>

        </nav> 
        </>
  )
}

export default Navbar