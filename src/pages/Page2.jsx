import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page2 = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from(".rotate-text", {
      transform: "rotateX(-80deg)",
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: ".rotate-text",
        start: "top 60%",
        end: "bottom -300%",
        scrub: 2,
      }
    })
  })


  return (
    
    <div id='section-2' className='w-[80vw] flex flex-col items-center justify-center'>
        <div className='rotate-text pl-12 w-[80vw] flex flex-col items-center justify-center'>
          <h1 className='text-[40vw] text-black font-[font1] uppercase leading-[35vw]'>Frontend</h1>
        </div>
        <div className='rotate-text pl-12 w-[80vw] flex flex-col items-center justify-center'>
          <h1 className='text-[40vw] text-black font-[font1] uppercase leading-[35vw]'>Magic</h1>
        </div>
        <div className='rotate-text pl-12 w-[80vw] flex flex-col items-center justify-center'>
          <h1 className='text-[40vw] text-black font-[font1] uppercase leading-[35vw]'>is the</h1>
        </div>
        <div className='rotate-text pl-12 w-[80vw] flex flex-col items-center justify-center'>
          <h1 className='text-[40vw] text-black font-[font1] uppercase leading-[35vw]'>Art</h1>
        </div>
        <div className='rotate-text pl-12 w-[80vw] flex flex-col items-center justify-center'>
          <h1 className='text-[40vw] text-black font-[font1] uppercase leading-[35vw]'>Users</h1>
        </div>
        <div className='rotate-text pl-12 w-[80vw] flex flex-col items-center justify-center'>
          <h1 className='text-[40vw] text-black font-[font1]  uppercase leading-[35vw]'>can feel</h1>
        </div>
    </div>
  )
}

export default Page2