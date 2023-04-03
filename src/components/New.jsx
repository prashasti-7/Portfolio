import React from 'react'
import './New.css';

const New = () => {
  return (
    <div>
        <h1 className='text-[48px] text-white ss:text-[64px]'>Projects</h1>
        <div class="wrapper">
        <div class="image-wrapper">
        <img src='./safar.png' /></div>
        <div class="header-wrapper">
            <h1 className='hello'>Safar App</h1>
            <button href='' className='hello text-left'>See Project</button>
        </div>
        </div>
        <div class="wrapper">
        <div class="image-wrapper">
        <img class="book-design-image" src="./trove.png" /></div>
        <div class="header-wrapper">
            <h1 className='hello'>Trove WebApp</h1>
            <button href='' className='hello text-left'>See Project</button>
        </div>
        </div>
        <div class="wrapper">
        <div class="image-wrapper">
        <img class="book-design-image" src="./coWIN.png" /></div>
        <div class="header-wrapper">
            <h1 className='hello'>CoWIN Website</h1>
            <button href='' className='hello text-left'>See Project</button>
        </div>
        </div>
    </div>
  )
}

export default New
