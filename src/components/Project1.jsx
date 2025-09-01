import React from 'react'

const Project1 = () => {
    return (
        <div className='h-[48vh] w-[44vw] items-center flex flex-col justify-center bg-amber-700 rounded-3xl mb-[8vh]'>
            <video className='h-[40vh] w-[38vw] mb-2' autoPlay loop muted src="/project1.mp4"></video>
            
            <div className='flex items-center justify-between w-[40vw]'>

                <div className='uppercase font-bold text-[1rem] font-[font2]'>SunDown Studio Clone
                </div> 

               <a className='text-3xl' href="https://sundown-clone-sherians.vercel.app/"> <i className="ri-external-link-line"></i></a>

            </div>
            
        </div>
    )
}

export default Project1