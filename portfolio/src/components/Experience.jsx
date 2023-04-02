import React from 'react'

// import {HTML, JavaScript, CSS, ReactImg, GitHub, Node, Mongo, Tailwind, FireBase} from '../assets';
import {HTML, CSS} from '../assets';


const Experience = () => {
  return (
    <div name='skills' className='w-full h-100% text-gray-300'>
      {/* Container */}
      <div className='max-w-full flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-10 text-center py-4 mb-[20px]'>           
              <div className='shadow-md rounded-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='./react.png' alt="React icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md rounded-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='./tailwind.png' alt="Tail icon" />
                  <p className='my-4'>TailwindCSS</p>
              </div>
              <div className='shadow-md rounded-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='./java.png' alt="Java icon" />
                  <p className='my-4'>Java</p>
              </div>
              <div className='shadow-md rounded-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='./cpp.png' alt="HTML icon" />
                  <p className='my-4'>CPP</p>
              </div>
              <div className='shadow-md rounded-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='./py.png' alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md rounded-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-[68px] mx-auto' src='./figma.png' alt="HTML icon" />
                  <p className='my-4'>Figma</p>
              </div>
              <div className='shadow-md rounded-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='./ai.png' alt="HTML icon" />
                  <p className='my-4'>Adobe Illustrator</p>
              </div>
              <div className='shadow-md rounded-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='./ps.png' alt="HTML icon" />
                  <p className='my-4'>Adobe Photoshop</p>
              </div>
              <div className='shadow-md rounded-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='./pr.png' alt="HTML icon" />
                  <p className='my-4'>Adobe Premier Pro</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Experience
