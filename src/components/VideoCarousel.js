import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { highlightsSlides } from '../constants';

const VideoCarousel = () => {
    useGSAP(()=>{
    gsap.to('#he',{
      opacity:1,
      delay:1.5,
      translateX:10
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
  const videoRefs = useRef([]);
  const [current, setCurrent] = useState(1);

  const slideRight = () => {
    setCurrent(prev => (prev === highlightsSlides.length ? 1 : prev + 1));
  };
  useEffect(() => {
    const video = videoRefs.current[current - 1];
    const timer = setTimeout(slideRight, 5000);

    if (video) {
      video.play();
    }

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <>
     <div className='highligt '>
   <div className='h-[40vh] w-full bg-zinc-900  flex flex-row py-[25vh]  gap-[20vw] '>
   <h1 className=' text-6xl pl-[5vw] text-gray-400 font-medium opacity-0' id='h3'>Get The Highlights.</h1>
   <div className='text-blue-400 flex flex-row text-3xl gap-[3vw] pt-[3vh]'>
    <div className="flex flex-row gap-2 opacity-0" id="h3">
<h1>Watch the film</h1>
<i className="fa-solid fa-play text-lg pt-1"></i>
    </div>
    <div className='flex flex-row gap-2 opacity-0' id='h3'>
  <h1>Watch the event</h1>
  <i className="fa-solid fa-chevron-right text-lg pt-1 "></i>
  </div>
   </div>
    </div>
</div>
    <div className='carousel  flex bg-zinc-900 h-[100vh] relative'>
      <div className='carousel_wrapper relative h-[100vh] w-[90vw] mx-[5vw] bg-zinc-900'>
        {highlightsSlides.map((list, index) => (
          <div
            key={list.id}
            className={list.id === current ? 'carousel_card flex absolute carousel_card-active' : 'carousel_card'}
          >
            <video className='card_video'
              src={list.video}
              ref={el => (videoRefs.current[index] = el)}
              muted
            ></video>
    
            <div className='absolute text-white font-semibold z-10 text-3xl pt-[6vh] pl-[4vw]'>
             {list.textLists.map((data)=>{
              return(
              <h1>{data}</h1>
              )
            })}
            </div>
          </div>
        ))}

        <div className="carousel_pagination">
          {highlightsSlides.map((list) => (
            <div
              key={list.id}
              className={list.id === current ? "pagination_dot pagination_dot-active" : "pagination_dot"}
              onClick={() => setCurrent(list.id)}
            ></div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default VideoCarousel;