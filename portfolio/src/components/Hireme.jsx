import React from 'react'
import './Hireme.css'

const Hireme = () => {
  return (
    <div className='flex h-[50vh]'>
      <div className={`face h-[300px] w-[300px] 
                    bg-white rounded-full flex 
                    justify-center items-center
                    before: content-''
      `}>
            <div className='eyes'>
                <div className='eye relative top-0 flex w-[17px] h-[17px] block m-[20px]'></div>
                <div className='eye relative top-0 flex w-[17px] h-[17px] block m-[20px]'></div>
            </div>
      </div>
    </div>
  )
}

export default Hireme
