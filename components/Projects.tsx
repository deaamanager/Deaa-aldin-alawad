import React from 'react';
import ProjectsBackground from './ProjectsBackground';
import Image from 'next/image';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import { motion } from 'framer-motion';
import Link from 'next/link';





type Props = {
  projects: Project[];
}






function SliderCard({projects}: Props) {
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(0);

  const handlePrevClick = () => {
   
      
      setSelectedCardIndex( selectedCardIndex === 0 ? projects.length - 1 : selectedCardIndex - 1);
      
    
  };

  const handleNextClick = () => {
    
   setSelectedCardIndex((selectedCardIndex + 1) % projects.length );
   
    
  };

  return (
    <div className=" snap-x  snap-mandatory touch-pan-x overflow-scroll ">
      <div
        className="flex transition-all ease-out duration-300   "
        style={{ transform: `translateX(-${selectedCardIndex * 100}%)` }}  
      >
        {projects?.map((project, i) => (
          <div
            key={project?._type}
            className="snap-start w-full  px-4 my-24  flex-shrink-0 flex items-center justify-center flex-col space-y-5 "
          >
            <motion.div
            initial={{
              y: -200,
              opacity: 0,
            }}
              transition={{ duration: 1, }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >  
            <Image 
            src={urlFor(project?.image).url()}
            width={200}
            height={200}
            alt="My projects"
            className="h-32 mt-2"   />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-400" >{project?.title}</h2>
           
           
            <p className="text-gray-500 text-center font-bold">{project?.summary}</p>

            <div className='grid gap-8 items-end justify-center pt-16'>
                <div className="relative group ">
                    <div className="absolute -inset-0.5   opacity-75 bg-gradient-to-r from-[#4b9ae3] to-[#fff]  rounded-xl blur-xl
                         group-hover:opacity-100 transition duration-1000 group-hover:duration-200 overflow-hidden btnCard"></div>
                 
                   <button  className=' relative divide-x divide-gray-600 px-4 py-4 bg-black rounded-xl leading-none flex items-center'>
                        <span className='flex justify-center  items-start space-x-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-blue-600 w-8 h-8 -rotate-6 text-center ">
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                <path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zM12 10.5a.75.75 0 01.75.75v4.94l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72v-4.94a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                            </svg>

                        </span>
                        <span className='text-gray-100 px-2  '>Labs Release 2023.01</span>
                        <span className='text-indigo-400 px-3 group-hover:text-gray-100 transition duration-200'> See Whats new </span>
                    </button>
                  
                </div>
            </div>

          </div>
        ))}
      </div>
      {(selectedCardIndex && projects.length) > 0 && (
        <button
          className="absolute   left-0 transform opacity-50 -translate-y-1/2 bg-[#4b9ae3]/50 hover:bg-[#4b9ae3]/80 text-white px-4 py-2 rounded-full focus:outline-none"
          onClick={handlePrevClick}
        >
          Previous
        </button>
      )}
      {(selectedCardIndex && projects.length ) - 1 && (
        <button
          className="absolute right-0 transform opacity-50 -translate-y-1/2 bg-[#4b9ae3]/50 hover:bg-[#4b9ae3]/80 text-white px-4 py-2 rounded-full focus:outline-none"
          onClick={handleNextClick}
        >
         <span className='z-10'> Next</span>
        </button>
      )}
     
    </div>
  
  );
}






function Projects({ projects}: Props) {
 
  return (
    <div className='relative h-screen w-full bg-black flex flex-col justify-center items-center'>
      <ProjectsBackground />

      <div className='absolute top-[10rem] w-full h-full'>
   
       <SliderCard projects={projects} />
      </div>

    </div>
  )
}

export default Projects;