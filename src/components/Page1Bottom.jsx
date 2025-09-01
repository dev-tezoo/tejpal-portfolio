import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, {useEffect} from 'react'

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('#btm-git',{
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear',
    })
  })

  useGSAP(function(){
    gsap.to('#btm-linkedin',{
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear'
    })
  })

  useGSAP(function(){
    gsap.to('#btm-instagram',{
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear'
    })
  })

  useGSAP(function(){
    gsap.to('#btm-twitter',{
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear'
    })
  })


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const page3 = document.getElementById('page3');
  //     if (page3) {
  //       const rect = page3.getBoundingClientRect();
  //       if (rect.top <= window.innerHeight && rect.bottom >= 0) {
  //         // Page 3 is in view, change icon colors
  //         gsap.to('.pg-3clr i', { color: '#fff', duration: 0.2 });
  //       } else {
  //         // Page 3 not in view, revert icon colors
  //         gsap.to('.pg-3clr i', { color: '#000', duration: 0.2 });
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className='absolute flex items-center justify-between bottom-10 mx-[90px] my-[20px] w-[90vw] h-[9vh] left-0'>
        <div className='text-2xl font-bold'>
            <h1>Website Designer | Freelancing | Creative UI</h1>
        </div>
        <div id='btm-git' className='text-5xl pg-3clr right-18 fixed text-gray-800'>
            <a href="https://github.com/dev-tezoo">
                <i className="ri-github-fill"></i>
            </a>
        </div>


        <div id='btm-linkedin' className='text-5xl pg-3clr right-18 bottom-35 fixed text-gray-800'>
            <a href="https://www.linkedin.com/in/tejpalsingh26/">
                <i className="ri-linkedin-box-fill"></i>
            </a>
        </div>

        <div id='btm-instagram' className='text-5xl pg-3clr right-18 bottom-55 fixed text-gray-800'>
            <a href="https://www.instagram.com/tezzooooooo/">
                <i className="ri-instagram-fill"></i>
            </a>
        </div>

        <div id='btm-twitter' className='text-5xl pg-3clr right-18 bottom-75 fixed text-gray-800'>
            <a href="https://x.com/TezooRathore">
                <i className="ri-twitter-x-fill"></i>
            </a>
        </div>

        
    </div>
  )
}

export default Page1Bottom