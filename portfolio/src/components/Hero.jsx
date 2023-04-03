// import React,{useRef, useEffect} from 'react'
// import {gsap} from 'gsap';
// import { discount, robot } from '../assets'
// import {motion} from 'framer-motion';
// import {moon, mountainbg, stars, mountainfront} from '../assets';
// import { useState } from "react";
// import './Hero.css'
// // import { Canvas } from "@react-three/fiber";
// // import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

// function Hero({timeline}){
//   return (
//     // <section id='home' className={'flex md:flex-row flex-col sm:py-4 py-6 h-[100vh]	'}>
//     //   <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
//     //     <div className='flex flex-row justify-between item-center w-full '>
//     //       <h2 className='flex-1 text-white'>
//     //         hello, i'm
//     //       </h2>
//     //     </div>
//     //     <div className='flex flex-row justify-between item-center w-full'>
//     //       <h1 className='flex-1 font-RocGrotesk font-semibold ss:text-[72px] text-[52px] text-[#7EFF5E] ss:leading-[100px] leading-[75px]'>
//     //         PRASHASTI GUPTA
//     //       </h1>
//     //     </div>
//     //     {/* <div>
//     //       <img src={robot} alt = 'kya' className='w-[100%] h=[100%] relative z-[5]' ></img>
//     //     </div> */}
//     //   </div>
//     // </section>

//     <section id='home' className='h-[100vh] w-[1400px] flex justify-between'>
//       <div className='flex flex-2 justify-center flex-col gap-[10px]'>
//         <h3 className='flex items-center text-white'>Hello I am </h3>
//           <h1 className='text-[74px] text-white'>PRASHASTI GUPTA</h1>
//           <p className='text-white'>I like designing and developing!</p>

//       </div>
//     </section>

//   );
// }

// export default Hero;



import React, {useEffect, useState} from 'react';
import Typed from 'react-typed';
import smoke from '../../public/smoke-143172.mp3'

const Hero = () => {
    //const [isPlaying, setIsPlaying] = useState(false);
    const [value, setValue] = useState(0);

    useEffect(() => {
      play()
    }, [value]);
    function play(){
      new Audio(smoke).play()
    }
  return (
    <div id='main' className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#FFF] font-bold'>
          Hello! I am 
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-[64px] md:py-1 text-[#DC2064]'>
          PRASHASTI GUPTA
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-4xl text-xl font-bold py-4'>
            I am a 
          </p>
          <Typed
          className='md:text-3xl sm:text-4xl text-[30px] md:pl-4 pl-2'
            strings={['Designer', 'Developer']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>I specialize in UI/UX and branding design based in India. I like to use my skills to help bring a change in the world</p>
        {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> */}
        <button className='bg-[#DC2064] m-[10px] font-medium my-6 mx-auto py-3 text-white m-[10px]' onClick={() => setValue(value+1)}>
            <span class="span-mother">
                <span>L</span>
                <span>e</span>
                <span>t</span>
                <span>s</span>
                <span>G</span>
                <span>o</span>
            </span>
            <span class="span-mother2">
                <span>L</span>
                <span>e</span>
                <span>t</span>
                <span>s</span>
                <span>G</span>
                <span>o</span>
            </span>
          </button>
          {/* <Sound url={Smoke}
            playStuts={
              isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
            }
            playFromPosition={300}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
            /> */}
      </div>
    </div>
  );
};

export default Hero;