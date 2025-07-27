"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  return (
    <motion.div
      className='mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='text-center'>
        <motion.a
          href="/"
          className="mr-14 cursor-pointer select-none group"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-3xl font-extrabold tracking-tight font-sans transition-colors duration-300 
            ${isDarkMode ? 'text-white group-hover:text-gray-300' : 'text-gray-900 group-hover:text-gray-600'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Saksham
            </span>
            <span className="text-primary ml-1 text-4xl leading-none">.</span>
          </h1>
        </motion.a>

        <motion.div
          className='flex flex-wrap justify-center items-center gap-6 mb-4 text-sm'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              icon: isDarkMode ? assets.mail_icon_dark : assets.mail_icon,
              label: 'sakshamsuryawansh194@gmail.com',
              href: 'mailto:sakshamsuryawansh194@gmail.com'
            },
            {
              icon: assets.insta,
              label: 'Instagram',
              href: 'https://www.instagram.com/_saksham._21/'
            },
            {
              icon: assets.linkedin,
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/saksham-suryawanshi-377269221/'
            },
            {
              icon: assets.github,
              label: 'GitHub',
              href: 'https://github.com/sakshamsuryawanshi21'
            },
            {
              icon: assets.tweet,
              label: 'Tweet',
              href: ''
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className='flex items-center gap-2'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image src={item.icon} alt='' className='w-6' />
              <a href={item.href} target='_blank' rel='noopener noreferrer'>
                {item.label}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Saksham Suryawanshi. All rights reserved.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
