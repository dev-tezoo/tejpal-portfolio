import React from 'react'

const Project3 = () => {
  return (
    <div className='h-[48vh] w-[44vw] items-center flex flex-col justify-center bg-[#343434] rounded-3xl mb-[8vh]'>
            <video className='h-[38vh] w-[38vw] mb-2' autoPlay loop muted src="/project3.mp4"></video>
            
            <div className='flex items-center justify-between w-[40vw]'>

                <div className='uppercase font-bold text-[1rem] font-[font2]'>Wassup Run Club
                </div> 

               <a className='text-3xl' href="https://responsive-wassup.vercel.app/"> <i className="ri-external-link-line"></i></a>

            </div>
            
        </div> 
  )
}

export default Project3