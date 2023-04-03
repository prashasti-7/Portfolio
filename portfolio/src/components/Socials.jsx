import React,{useEffect, useRef, useState} from 'react'
import {gsap, Power3} from 'gsap';
import {behance, github, linkedin, email} from '../assets/index'

const Skills = () => {
  let circleGreen = useRef(null)
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  let circleYellow = useRef(null);

  const [state, setState] = useState('NULL');
  
  if(state==='RED'){
    gsap.to('.circleRed', {duration: 0.8, width:50, height:50, ease:"power3.easeOut"})
  }
  else if(state==='RED_OUT'){
    gsap.to('.circleRed', {duration: 0.8, width:30, height:30, ease:"power3.easeOut"})
  }
  else if(state==='BLUE'){
    gsap.to('.circleBlue', {duration: 0.8, width:50, height:50, ease:"power3.easeOut"})
  }
  else if(state==='BLUE_OUT'){
    gsap.to('.circleBlue', {duration: 0.8, width:30, height:30, ease:"power3.easeOut"})
  }
  else if(state==='YELLOW'){
    gsap.to('.circleYellow', {duration: 0.8, width:50, height:50, ease:"power3.easeOut"})
  }
  else if(state==='YELLOW_OUT'){
    gsap.to('.circleYellow', {duration: 0.8, width:30, height:30, ease:"power3.easeOut"})
  }
  else if(state==='GREEN'){
    gsap.to('.circleGreen', {duration: 0.8, width:50, height:50, ease:"power3.easeOut"})
  }
  else if(state==='GREEN_OUT'){
    gsap.to('.circleGreen', {duration: 0.8, width:30, height:30, ease:"power3.easeOut"})
  }

  useEffect(() => {
    gsap.to(".circleRed", {duration: 0.8, x:40, ease: "power3.inOut"})
    gsap.to(".circleBlue", {duration: 0.8, x:40, ease: "power3.inOut", delay: 0.2})
    gsap.to(".circleYellow", {duration: 0.8, x:40, ease: "power3.inOut", delay: 0.4})
    gsap.to(".circleGreen", {duration: 0.8, x:40, ease: "power3.inOut", delay: 0.6})    
  },[])

  return (
    <div className='App text-center '>
      <header className='App-header '>
        <div className='circle-container flex md:flex-row flex-col '>
          <img src={github} ref={el => circleRed = el} className={`circleRed w-[33px] h-[33px] m-[25px] cursor-pointer sm:{w-[25px] h-[25px]}`} onMouseEnter={() => setState("RED")} onMouseLeave={() => setState("RED_OUT")}>
          </img>
          <img src={linkedin} ref={el => circleBlue = el} className='circleBlue w-[30px] h-[30px] m-[26px] cursor-pointer' onMouseEnter={() => setState("BLUE")} onMouseLeave={() => setState("BLUE_OUT")}></img>
          <img src={behance} ref={el => circleYellow = el} className='circleYellow w-[35px] h-[35px] m-[25px] cursor-pointer' onMouseEnter={() => setState("YELLOW")} onMouseLeave={() => setState("YELLOW_OUT")}></img>
          <img src={email} ref={el => circleGreen = el} className='circleGreen w-[30px] h-[30px] rounded-[100%] m-[25px] cursor-pointer' onMouseEnter={() => setState("GREEN")} onMouseLeave={() => setState("GREEN_OUT")}></img>
          <div className='flex m-auto w-[50%] text-right right-0 pl-[400px]'>
          <p className='text-white font-medium text-[14px]'>Made with 💗 by Prashasti</p>
        </div> 
        </div>
      </header>
    </div>
  )
}

export default Skills
