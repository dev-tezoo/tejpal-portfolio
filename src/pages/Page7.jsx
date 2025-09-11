import React from 'react'

const Page7 = () => {
  return (
    <div className='h-[50vh] p-5'>
      <div id='footer' className='bg-black h-[90%] w-[90%] rounded-4xl relative p-10 text-white'>
        <div className="footer-moving-txt absolute h-[24vh] w-[20vh]">
          <img id='foot-anime' className='h-[20vh] w-[20vh] rounded-full' src="/public/footer-img.png" alt="" />
        </div>
        <div className='add-txt absolute bottom-[35px]'> <i class="ri-map-pin-line"></i> &nbsp; Jodhpur, Rajasthan, India</div>

        <div className='mail-txt absolute left-[37vw] text-[2rem]'> <i className="ri-mail-fill"></i> &nbsp; dev.tezoo@gmail.com</div>

        <div className='btm-txt absolute right-[35px] bottom-[35px]'>&copy; 2025 Tejpal Singh</div>

        <div></div>
      </div>
    </div>
  )
}

export default Page7