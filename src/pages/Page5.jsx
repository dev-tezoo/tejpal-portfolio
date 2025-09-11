import React from 'react'

const Page5 = () => {
    return (
        <div className='h-[120vh] p-[2vh]'>
            <div className='pg5-kala-box bg-black text-white
             h-[116vh] rounded-4xl p-10 '>


                <div id='pg5-left' className=' text-[8rem] font-[font1] uppercase'>Services</div>


                <div id='pg5-right' className='w-[50vw] h-[70vh]  font-[font2] flex gap-10 flex-col justify-center items-start ml-[5vw]'>

                    <div id='1' className='flex gap-5 items-center'>
                        <div className='w-[40px] h-[40px] flex items-center justify-center rounded bg-gray-900'>1</div>
                        <div>
                            <h3 className='h3 text-[1.6rem]'>UX Design</h3>
                            <p className='p text-gray-300 text-[1rem]'>Restructuring user flows and creating new wireframes, we can work together to create a seamless and enjoyable experience for your users.</p>
                        </div>
                    </div>

                    <div id='2' className='flex gap-5 items-center'>
                        <div className='w-[40px] h-[40px] flex items-center justify-center rounded bg-gray-900'>2</div>
                        <div>
                            <h3 className='h3 text-[1.6rem]'>UI Design</h3>
                            <p className='p text-gray-300 text-[1rem]'>User Interface (UI) help create a visually stunning and engaging experience for your users, resulting in greater appreciation for your product or services.</p>
                        </div>
                    </div>


                    <div id='3' className='flex gap-5 items-center'>
                        <div className='w-[40px] h-[40px] flex items-center justify-center rounded bg-gray-900'>3</div>
                        <div>
                            <h3 className='h3 text-[1.6rem]'>Web Design</h3>
                            <p className='p text-gray-300 text-[1rem]'>Web Design can be considered a powerful marketing tool. I specialize in designing websites that effectively generates leads for your company, helping to drive growth and success.</p>
                        </div>
                    </div>


                    <div id='4' className='flex gap-5 items-center'>
                        <div className='w-[40px] h-[40px] flex items-center justify-center rounded bg-gray-900'>4</div>
                        <div>
                            <h3 className='h3 text-[1.6rem]'>Frontend Development</h3>
                            <p className='p text-gray-300 text-[1rem]'>I specialize in creating custom web designs and then bringing them to life using HTML, CSS & JavaScript (React/Typescript)</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Page5

// bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#000000]  to-[#e4e6e6]