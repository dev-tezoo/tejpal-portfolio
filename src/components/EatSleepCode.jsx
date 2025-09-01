import React from 'react'

const EatSleepCode = () => {
    return (
        <div className='flex items-center justify-center gap-15'>
            <div className='flex flex-col items-center justify-center font-bold'>
                <div className='text-[4.6rem]'><i className="ri-restaurant-fill"></i></div>
                <div className='text-2xl font-[font2]'>EAT</div>
            </div>

            <div className='flex flex-col items-center justify-center font-bold'>
                <div className='text-[4.6rem]'><i className="ri-hotel-bed-fill"></i></div>
                <div className='text-2xl font-[font2]'>SLEEP</div>
            </div>

            <div className='flex flex-col items-center justify-center font-bold'>
                <div className='text-[4.6rem]'><i className="ri-code-s-slash-line"></i></div>
                <div className='text-2xl font-[font2]'>CODE</div>
            </div>


        </div>
    )
}

export default EatSleepCode