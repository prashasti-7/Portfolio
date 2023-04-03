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