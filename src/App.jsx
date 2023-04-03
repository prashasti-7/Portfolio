import React from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import Hireme from './components/Hireme';
import New from './components/New';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Socials from './components/Socials';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden scroll-smooth p-10 snap-y overflow-y-auto'>
     <Router basename={process.env.PUBLIC_URL}>
      <div className='smoother-wrapper sm:px-16 px-6 flex justify-center items-center'>
          <div className='smooth-content xl:max-w-[1280px] w-full'>
            <NavBar />
          </div>
        </div>

        <div className='bg-primary flex justify-center items-start'>
          <div className='xl:max-w-[1280px] w-full'>
            {/* <Routes>
              <Route path='/' element={<Hero />} />
            </Routes> */}
            <Hero />
          </div>
        </div>

        <section>
          <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
            <div className='xl:max-w-[1280px] w-full'>
              {/* <Routes>
                <Route path='/experience' element={<Experience />} />
                <Route path='/new' element={<New />} />
                <Route path='/about' element={<About />} />
                <Route path='/hireme' element={<Hireme />} />
                <Route path='/contact' element={<ContactMe />} />
                <Route path='/footer' element={<Footer />} />
              </Routes> */}
              <New />
              <Experience />
              <About />
              <Hireme />            
              <ContactMe />
              <Socials />                
            </div>
          </div>
        </section>
     </Router>
    </div>
  )
};

export default App
