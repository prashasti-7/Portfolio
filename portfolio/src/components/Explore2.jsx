import React from 'react'
import {useState} from 'react';
import {motion} from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds, exploreWorldsOne } from '../constants';
import ExploreCard from './ExploreCard';
import {planet2} from '../assets/index'

const Explore = () => {
    const [active, setActive] = useState('world-2');
  
    return (
      <section className={`sm:p-4 xs:p-4 px-6 py-12`} id="explore">
        {/* <div className='wrapper'>
            <header>
              <img src='./jungle1.png' className='background'></img>
              <img src='./jungle2.png' className='foreground'></img>
            </header>
        </div> */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
        >
            <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {exploreWorldsOne.map((world, index) => (
                <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
                />
            ))}
            </div>
        </motion.div>
      </section>
    );
  };
  
  export default Explore;