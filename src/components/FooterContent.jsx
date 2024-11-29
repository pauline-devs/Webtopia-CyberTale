import React from 'react'
import { useEffect, useState } from "react";
import Cursor from "@/components/Cursor";
import Lenis from 'lenis';

export default function FooterContent() {
  const [isActive, setIsActive] = useState(false);
    
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className='bg-[#E0EADC] text-[#0a0908] py-8 px-5 md:px-12 h-full w-full flex items-end justify-between gap-2'>
        <h1 className='text-[14vw] leading-[0.8]'
            onMouseOver={() => {setIsActive(true)}} 
            onMouseLeave={() => {setIsActive(false)}} 
        >
          WEBTOPIA CYBERTALE
        </h1>
        <Cursor isActive={isActive}/>
        <a className='mb-2 md:mb-2.5 lg:mb-3 text-xs md:text-base' 
           href='https://beacons.ai/d.kutz' 
           target='_blank' 
           rel='noopener noreferrer'>
            @drummykutz
        </a>
    </div>
  )
}