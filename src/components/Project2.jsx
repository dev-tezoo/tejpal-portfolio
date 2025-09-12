import React from 'react'

const Project2 = () => {
  return (
      <div className='h-[48vh] w-[44vw] items-center flex flex-col justify-center bg-white ml-[20vw] rounded-3xl mb-[8vh]'>
            <video className='h-[38vh] w-[38vw] mb-2' autoPlay loop muted src="/project2.mp4"></video>
            
            <div className='flex items-center justify-between w-[40vw]'>

                <div className='uppercase font-bold text-[1rem] font-[font2]'>Form Validation Project
                </div> 

               <a className='text-3xl' href="https://kodbud-task4-form-validation.vercel.app/"> <i className="ri-external-link-line"></i></a>

            </div>
            
        </div> 
  )
}

export default Project2