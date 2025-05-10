'use client';
import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import Projects from "@/components/Projects";
import Cursor from "@/components/Cursor";
import GradientCursor from "@/components/GradientCursor";
import Footer from "@/components/Footer";
import Lenis from 'lenis';

export default function Home() {

  const [activeMenu, setActiveMenu] = useState(null)
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
    <main>
      <div className="h-[10vh]"></div>
      <div className="cursor-title text-center">
        <h1 onMouseOver={() => {setIsActive(true)}} 
            onMouseLeave={() => {setIsActive(false)}} 
            className="font-extrabold text-[4.5vw] text-center">
            CYBERTALES
            <br/>
            ~
            <br/>
            A WEBTOPIA
        </h1>
        <Cursor isActive={isActive}/>
        {/* <GradientCursor isActive={isActive}/> */}
      </div>
      <div className="intro-subtitle text-center">
      <p className="text-[0.85rem] w-[500px] px-[30px] mt-5 text-center mx-auto text-[#BCE4F2]">
        This is the digital rough of a Cyber-Artsy microcosm,
        envisioned as a playground for my next WebGL x storytelling explorations.
      </p>
      
        <div className="h-[3vh] text-xs"></div>
        <p className="text-xs text-center">
          Built to grow and improve alongside
          <br/>
          my evolving tech stack.
        </p>
      </div>
      <div className="h-[7vh]"></div>
      <Projects setActiveMenu={setActiveMenu}/>
      <Scene activeMenu={activeMenu}/>
      <Footer />
    </main>
  );
}
