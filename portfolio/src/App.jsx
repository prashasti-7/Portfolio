import React from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Hero from './components/Hero';
import Explore from './components/Explore';
import Explore2 from './components/Explore2'
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import Hireme from './components/Hireme';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden scroll-smooth snap-y overflow-y-auto'>
      <div className='sm:px-16 px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <NavBar />
        </div>
      </div>

      <div className='bg-primary flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>

      <section>
        <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
          <div className='xl:max-w-[1280px] w-full'>
            <Experience />
            <Explore />
            <Explore2 />
            <About />    
            <Hireme />        
            <ContactMe />
            <Footer />
          </div>
        </div>
      </section>
    </div>
  )
};

export default App
