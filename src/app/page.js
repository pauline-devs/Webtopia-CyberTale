'use client';
import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import Projects from "@/components/Projects";
import Cursor from "@/components/Cursor";
import GradientCursor from "@/components/GradientCursor";
import Footer from "@/components/Footer";
import Lenis from 'lenis'

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
            WEBTOPIA V.1
        </h1>
        <Cursor isActive={isActive}/>
        {/* <GradientCursor isActive={isActive}/> */}
      </div>
      <div className="intro-subtitle text-center">
        <p className="text-base p-3">
          A Cyber-Artsy microcosm 
          <br/>
          as playgroud for my Next.js, WebGL & Blockchain learnings.
        </p>
      
        <div className="h-[3vh] text-xs"></div>
        <p className="text-xs">
          Concept + website are destined to be fed
          <br/>
          & improved as my tech stack grows.
        </p>
      </div>
      <div className="h-[7vh]"></div>
      <Projects setActiveMenu={setActiveMenu}/>
      <Scene activeMenu={activeMenu}/>
      <Footer />
    </main>
  );
}
