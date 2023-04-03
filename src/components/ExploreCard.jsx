import {motion} from 'framer-motion';
import { fadeIn } from '../utils/motion';
import React from 'react'
import {planet2, planet3, star} from '../assets/index'

const ExploreCard = ({ id, img, title, index, active, handleClick }) => (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[200px] h-[550px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      {/* <p>{title}</p> */}
      <script>
          function log_console() {
              console.log
                  (img)
          }
      </script>
      {/* <img src='./planet-04.png' alt=''></img> */}
      {/* <img
        src={img}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[10px]"
      /> */}
      {active !==id ? <img
        src={'./mesh.svg'}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[10px] bg-[rgba(0,0,0,0.5)]"
      />: <img
      src={img}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[10px]"
    />}
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 pb-8 pl-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[10px]">
          <div
            className={`flex justify-center items-center w-[60px] h-[60px] rounded-[10px] glassmorphism`}
          >
            <img
              src={star}
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <h2 className="font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
          <p className="font-normal text-[16px] leading-[20.16px] text-white">
            Click to know more!  
          </p>
        </div>
      )}
    </motion.div>
  );
  
  export default ExploreCard;