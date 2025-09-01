
import { m } from 'framer-motion';
import React, { useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {

useEffect(() => {
  const menu = document.getElementById('menu-icon');
  const banner = document.getElementById('menu-banner');
  menu.addEventListener('click', () => {
    banner.classList.toggle('opacity-100');
    setTimeout(() => {
      banner.classList.toggle('opacity-0');
    }, 300);
  });

  return () => {
    if (menu) {
        menu.replaceWith(menu.cloneNode(true));
      }
  }
}, [])




  return (
    <div className=' fixed flex items-center justify-end w-full z-10 py-20 px-20'>
      <button id='top-btn' className='bg-[#02090F] px-4 py-2 hover:bg-white hover:scale-110 mr-2 transition-all duration-300 hover:text-black  rounded-full text-white text-xl '>Resume <i className="ri-download-fill"></i></button>

      <i id='menu-icon' className="ri-menu-line text-4xl ml-3 hover:scale-120 transition-all duration-300 text-gray-500 hover:transform hover:rotate-90"></i>

      <div id='menu-banner' className='menu-banner opacity-0 h-[15vh] flex items-center text-center justify-center bg-amber-700 w-[17vw] absolute -bottom-10 right-15 rounded-2xl font-bold font-[font2] text-2xl'>You lazy Clicker! <br /> Just Scroll <i className="ri-home-fill absolute text-2xl text-amber-700 h-[20px] w-[20px] -top-6 right-8"></i></div>

    </div>
  )
}

export default Header