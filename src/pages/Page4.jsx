import React from 'react'
import HorizontalText from '../components/HorizontalText'

const Page4 = () => {
    return (
        <div className='h-screen w-[100%] py-[18vh] relative'>
            <HorizontalText />

            <div className='h-[60vh] w-[80vw] ml-[5vw] px-10 bg-black text-white font-[font2] rounded-4xl flex items-start justify-between'>
                <div className='text-[8rem] ml-10 font-[font1]'>SKILLS</div>
                <div className='flex flex-col p-[5vw] mr-[5vw] text-2xl gap-5'>

                    <div> <i className="ri-html5-fill"></i> HTML &nbsp; &nbsp; <i className="ri-css3-fill"></i> CSS &nbsp; &nbsp; <i className="ri-javascript-fill"></i> JavaScript </div>

                    <div> <i className="ri-reactjs-fill"></i> React &nbsp; &nbsp; <i className="ri-tailwind-css-fill"></i> Tailwind CSS &nbsp; &nbsp; <i className="ri-nextjs-fill"></i> Next.js  &nbsp; &nbsp; GSAP </div>

                    <div> <i className="ri-github-fill"></i> GitHub &nbsp; &nbsp; <i className="ri-code-block"></i> VScode </div>

                    <div><i className="ri-open-arm-fill"></i> Leadership  &nbsp; &nbsp; <i className="ri-triangular-flag-fill"></i> Responsibility  &nbsp; &nbsp; <i className="ri-layout-masonry-fill"> </i> Management</div>

                    <div> <i className="ri-shield-star-fill"></i> Problem Solving</div>

                </div>
            </div>

        </div>
    )
}

export default Page4