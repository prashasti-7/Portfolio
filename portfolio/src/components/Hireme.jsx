import React, { useRef, useEffect, useState } from 'react'
import './Hireme.css'
import '../fonts/Fontspring-DEMO-rocgroteskextrawide-extrabold.otf'
import { events } from '@react-three/fiber'

const Hireme = () => {
  const ref = useRef(null);
  useEffect(() => {
    const element = document.querySelector('body').addEventListener('mousemove', eyeball);
    console.log(element);
  })

  function eyeball(event){
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye) {
      let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
      let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (radian * (180 / Math.PI) * -1) + 0;
      eye.style.transform = "rotate(" + rot*20 + "deg)";
    });
  }

  return (
    <div >
        <h1 className={`flex justify-center text-[48px] text-white ss:text-[64px] pt-20`}>
        Let's get in touch!
        </h1>
        <p className='flex justify-center text-white text-center'>lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem <br></br> ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
        <div className='container'>
          <button className='bg-[#FFF] m-[10px] font-medium my-6 mx-auto py-3 text-white m-[10px] align-center justify-center'>
            <span className="span-mother text-black">
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>n</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
            </span>
            <span className="span-mother2 text-black">
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>n</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
            </span>
          </button>
        </div>
        <div className='face'>
          <div className='eyes'>
            <div ref={ref} className='eye'></div>
            <div ref={ref} className='eye'></div>
          </div>
        </div>
    </div>
  )
}

export default Hireme
