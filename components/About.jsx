import React from 'react';
import AboutBackground from './AboutBackground';
import AboutDics from './AboutDics';
import AboutLaptop from './AboutLaptop';

function About({pageInfo}) {
  return (
    <div className=' relative h-screen w-full  flex-col  text-white flex justify-center items-center'>

     <AboutBackground />

     <div className=' absolute -top-[10rem]  flex  md:flex-row flex-col justify-center items-center h-full w-full my-10 '>
     <AboutLaptop />
     <AboutDics pageInfo={pageInfo} />
     </div>
    </div>
  )
}

export default About;