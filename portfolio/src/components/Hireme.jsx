import React from 'react'
import './Hireme.css'
import '../fonts/Fontspring-DEMO-rocgroteskextrawide-extrabold.otf'

const Hireme = () => {
  return (
    <div >
        <h1 className={`flex justify-center text-[48px] text-white ss:text-[64px] pt-20`}>
        Let's get in touch!
        </h1>
        <p className='flex justify-center text-white text-center'>lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem <br></br> ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
        <button className='bg-white text-white m-[10px]'>
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
        <a href="#">Hover this link</a>
    </div>
  )
}

export default Hireme
