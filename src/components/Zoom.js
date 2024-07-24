import React from 'react'
import { zoomvideo } from '../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Zoom = () => {
  useGSAP(()=>{
    gsap.to('#zoom1',{
        opacity:1,
        y:20,
        delay:1,
        scrollTrigger:{
          trigger:'#zoom1',
          end:'top 40%',
          scrub:2,
        },
       
    })
    gsap.to('#zoom2',{
        opacity:1,
        y:20,
        duration:2,
        scrollTrigger:{
          trigger:'#zoom2',
          end:'top 40%',
          scrub:2,
        },
       
    })
    gsap.to('#zoom3',{
        opacity:1,
        y:20,
        duration:2,
        scrollTrigger:{
          trigger:'#zoom3',
          end:'top 40%',
          scrub:2,
        },
       
    })
  })
  return (
    <>
    <div className='zoom bg-black text-white  font-semibold text-[14vh] pt-[50vh]' id='zoom'>
      <h1 className='text-center'>120 mm of</h1>
      <h1 className='text-center'>pure Pro zoom</h1>
      
      <video className=' w-[80vw] mx-[10vw] mt-[20vh] ' src={zoomvideo} autoPlay muted
      >
      </video>
      <div className='flex flex-col '>
        <div className='flex flex-row mt-[14vh] '>
          <div className='text-xl w-[40vw] ml-[20vw] pr-[16vw] text-gray-400 opacity-0 ' id="zoom2">
            For iPhone 15 Pro Max, we designed a 5x Telephoto camera with the lo
            ngest optical zoom of any iPhone ever to fit in our compact Pro camera system.
          </div>

          <div className='text-[9vh] w-[40vw] opacity-0' id="zoom1" >
            <h1 className='py-0'>5x optical</h1>
              <h1 className='py-0'>zoom</h1>
                <h1 className='text-lg text-gray-400'>with the 120mm lens</h1>
          </div>
        </div>
        <div className='text-xl w-[40vw] ml-[20vw] pr-[10vw] mt-[6vh] text-gray-400 mb-[20vh] opacity-0' id="zoom3">
          <p>Now you can take sharper close‑ups from farther away — like a phenomenal photo of your friend or
             a goal in your kid’s soccer match.

          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Zoom
