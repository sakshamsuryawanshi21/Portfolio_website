import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = ({isDarkMode}) => {
  return (
    <motion.div
      id='services'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      {/* Section Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-center text-5xl font-Ovo'
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I specialize in building responsive full-stack web applications with intuitive UI/UX.
        From backend APIs to sleek frontends, I deliver reliable, scalable digital solutions.
      </motion.p>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'
      >
        {serviceData.map(({ icon, title, description}, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-md duration-500'
          >
            <Image src={icon} alt='' className='w-10' />
<h3 className={`text-lg my-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{title}</h3>
            <p className= {`text-lg my-4 ${isDarkMode ? "text-gray-300" : "text-gray-600 text-sm text-gray-600 leading-5"}`}>{description}</p>
           
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
