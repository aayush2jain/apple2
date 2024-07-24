
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroVideo } from '../utils';
gsap.registerPlugin(useGSAP);
const Homepage = () => {
      useGSAP(()=>{
          const video = document.getElementById('video');
    gsap.to(video, {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        onEnter: () => video.play(),
        onEnterBack: () => video.play(),

      }
    });
    gsap.to('#he',{
      opacity:1,
      delay:1.5,
      translateX:10,
      scrollTrigger:{
        trigger:'#he',
      }
    })
    gsap.to('#h2,#h3',{
      opacity:1,
      delay:1.5,
      translateY:-20
    })
      gsap.to('#h3',{
      opacity:1,
      delay:1.5,
      y:0,
      stagger:1
    })
  },[])
  return (

      <>
          <div className='navbar h-[7vh] w-full px-[8vw] flex flex-row text-gray-300 bg-black gap-[3vw]  text-sm justify-center items-center '>
    <i className="fa-brands fa-apple text-xl hover:cursor-pointer"></i>
    <p className='hover:text-white hover:cursor-pointer'>Store</p>
    <p className='hover:text-white hover:cursor-pointer'>Mac</p>
    <p className='hover:text-white hover:cursor-pointer'>Iphone</p>
    <p className='hover:text-white hover:cursor-pointer'>Ipad</p>
    <p className='hover:text-white hover:cursor-pointer'>Watch
    </p>
    <p className='hover:text-white hover:cursor-pointer'>Airpods</p>
    <p className='hover:text-white hover:cursor-pointer'>TV & Home</p>
    <p className='hover:text-white hover:cursor-pointer'>Vision</p>
    <p className='hover:text-white hover:cursor-pointer'>Entertaintment</p>
    <p className='hover:text-white hover:cursor-pointer'>Acessories</p>
    <p className='hover:text-white hover:cursor-pointer'>Support</p>
    <i className="fa-solid fa-magnifying-glass text-xl hover:cursor-pointer"></i>
    <i className="fa-solid fa-bag-shopping text-xl hover:cursor-pointer"></i>
    </div>
    <div id="landing page" className='h-[90vh] bg-black w-full'>
    <h1 className='text-gray-400 pt-[10vh] px-[42vw] text-3xl absolute opacity-0' id='he'>iPhone 15 Pro</h1>
    <video className=' h-[80vh] m-0 p-0' autoPlay muted id="video" src={heroVideo}></video>
     <div id="h2"className='absolute bottom-10 text-white opacity-0'>
      <button className='bg-blue-600 rounded-full w-[6vw] z-20 mx-[47vw] h-[8vh] text-white font-medium text-xl my-0 py-0'>Buy</button>
      <p className='mx-[27vw] mt-[5vh] text-2xl font-semibold' id="h3">From $999 or $41.62/mo. for 24 mo.1

Get the highlights.
</p>
    </div>
    </div>
      </>
 
  )
}

export default Homepage
