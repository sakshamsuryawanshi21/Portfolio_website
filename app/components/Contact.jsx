"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "e9be5d11-2a20-4608-bb3b-51ae95db13f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[12%] py-10 scroll-mt-20  bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-center text-5xl font-Ovo'
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Got a dream project or just want to say hi? I’d be thrilled to hear from you — let’s turn your ideas into something beautiful, together. 💖
      </motion.p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
  {["name", "email"].map((field, index) => (
    <motion.input
      key={field}
      type={field === "email" ? "email" : "text"}
      name={field}
      placeholder={`Enter your ${field}`}
      required
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex-1 p-3 outline-none rounded-md 
        ${isDarkMode
          ? 'bg-gray-900 border-white placeholder-gray-400'
          : 'bg-white border-gray-400 placeholder-gray-500'} 
        border-[0.5px]`}
    />
  ))}
</div>


        <motion.textarea
  rows="6"
  name="message"
  placeholder="Enter your message"
  required
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className={`w-full p-4 outline-none rounded-md mb-6 
    ${isDarkMode ? 'bg-gray-900 border-white placeholder-gray-400' : 'bg-white border-gray-400 placeholder-gray-500'} 
    border-[0.5px]`}
></motion.textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
        >
          Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.button>

        <p className='mt-4 text-center'>{result}</p>
      </form>
    </motion.div>
  );
};

export default Contact;
