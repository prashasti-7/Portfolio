import React,{Suspense} from 'react'
import { discount, robot } from '../assets'
import {motion} from 'framer-motion';
import {moon, mountainbg, stars, mountainfront} from '../assets';
import { useState } from "react";
import './Hero.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function Hero(){
  return (
    // <section id='home' className={'flex md:flex-row flex-col sm:py-4 py-6 h-[100vh]	'}>
    //   <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
    //     <div className='flex flex-row justify-between item-center w-full '>
    //       <h2 className='flex-1 text-white'>
    //         hello, i'm
    //       </h2>
    //     </div>
    //     <div className='flex flex-row justify-between item-center w-full'>
    //       <h1 className='flex-1 font-RocGrotesk font-semibold ss:text-[72px] text-[52px] text-[#7EFF5E] ss:leading-[100px] leading-[75px]'>
    //         PRASHASTI GUPTA
    //       </h1>
    //     </div>
    //     {/* <div>
    //       <img src={robot} alt = 'kya' className='w-[100%] h=[100%] relative z-[5]' ></img>
    //     </div> */}
    //   </div>
    // </section>

    <section id='home' className='h-[100vh] w-[1400px] flex justify-between'>
      <div className='flex flex-2 justify-center flex-col gap-[10px]'>
        <h3 className='flex items-center text-white'>Hello I am </h3>
        <h1 className='text-[74px] text-white'>PRASHASTI GUPTA</h1>
        <p className='text-white'>I like designing and developing!</p>
        <button className='bg-[#DC2064] text-white m-[10px]'>
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
     </div>
      <div className='flex-5 relative'>

      </div>
    </section>

  );
}

export default Hero;
