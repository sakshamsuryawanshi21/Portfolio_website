import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      id='work'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      {/* Heading Section */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-center text-5xl font-Ovo'
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I design and build modern, responsive full-stack web applications that deliver seamless user experiences.
        From intuitive UI/UX designs to robust backend systems, each project reflects clean code and real-world impact.
      </motion.p>

      {/* Work Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
  {workData.map((project, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.02 }}
      className='group aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer'
      style={{ backgroundImage: `url(${project.bgImage.src})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`w-10/12 absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
        rounded-md transition-all duration-500 group-hover:bottom-7 ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}
      >
        <div>
          <h2 className='font-semibold'>{project.title}</h2>
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {project.description}
          </p>
        </div>
        
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className={`border rounded-full w-9 aspect-square flex items-center justify-center transition group-hover:bg-lime-300 ${
            isDarkMode ? 'border-white' : 'border-black'
          }`}
        >
          <Image src={assets.send_icon} alt='send icon' className='w-5' />
        </a>
        
      </motion.div>
    </motion.div>
  ))}
</div>

    </motion.div>
  )
}

export default Work
