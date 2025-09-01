import React from 'react'
import EatSleepCode from '../components/EatSleepCode'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'

const Page6 = () => {
  return (
    <div className='h-[250vh] p-[2vh]'>
        <div className='h-[20vh] w-[50vw] ml-20 mt-10'>
            <EatSleepCode />
            <div className='h-[210vh] w-[70vw] bg-black border rounded-4xl p-10'>
                <h1 className='text-white font-[font1] text-[8rem]'>PROJECTS</h1>
                <div className='w-full h-[185vh]'>
                        <Project1 />
                        <Project2 />
                        <Project3 />
                        <h1 className='text-white font-[font2] uppercase ml-[18vw] text-[1.5rem] italic'>Visit Github Page for source code and more projects &nbsp; <i className="ri-arrow-right-long-fill"></i></h1>
                </div>
            </div>
        </div>
    </div>


  )
}

export default Page6