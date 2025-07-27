import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id='about'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      {/* Section Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-center text-5xl font-Ovo'
      >
        About Me
      </motion.h1>

      {/* About Section Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        {/* User Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image
            src={assets.Saks}
            alt='user'
            className='w-full rounded-3xl'
          />
        </motion.div>

        {/* Description + Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl font-Ovo'>
            I’m a passionate Full Stack Developer with a deep love for crafting clean, functional, and user-focused digital experiences. I enjoy transforming ideas into fully working web applications using technologies like React, Node.js, and MongoDB. My focus lies in building scalable backends, responsive UIs, and intuitive user journeys. I love experimenting with new tools, improving performance, and solving real-world problems through code.
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer duration-500 ${
                  isDarkMode ? 'border-white/30' : 'border-gray-400'
                }`}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className='w-7 mt-3'
                />
                <h3 className={`my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Title */}
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`my-6 font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
          >
            Tools I Use
          </motion.h4>

          {/* Tools Icons */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='flex items-center gap-3 sm:gap-5 flex-wrap'
          >
            {toolsData.map((icon, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-xl cursor-pointer ${
                  isDarkMode ? 'border border-white/40' : 'border border-black/20'
                }`}
              >
                <Image
                  src={icon}
                  alt={`Tool ${index}`}
                  className='w-5 sm:w-7'
                  width={28}
                  height={28}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
