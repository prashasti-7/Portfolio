import React from 'react'
import {useState} from 'react';
import {motion} from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds, exploreWorldsOne } from '../constants';
import ExploreCard from './ExploreCard';

const Explore = () => {
    const [active, setActive] = useState('world-1');
  
    return (
      <section className={`sm:p-4 xs:p-4 px-6 py-12`} id="explore">
        <h1 className='text-[48px] text-white ss:text-[64px]'>Projects</h1>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
        >
            <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            <br></br>
            {exploreWorlds.map((world, index) => (
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