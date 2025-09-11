import React, { useRef } from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'

const Page1 = () => {

   
    

  return (
    <div id='page1' className='h-screen px-4 py-4 bg-white'>
        <div className='text-white shadow-xl shadow-gray-600 h-full w-full bg-[url(./assets/pgg-1.jpeg)] bg-cover bg-center rounded-[50px]'>
            <h1 className='name text-4xl px-20 py-12 font-[Poppins] font-bold'>| Tejpal singh</h1>
            <TiltText />
            <Page1Bottom />
        </div>
    </div>
  )
}

export default Page1