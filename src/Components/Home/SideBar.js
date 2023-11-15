import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import './Animation.css'
import { motion } from 'framer-motion';


export default function SideBar() {
  return (
    <div className='md:flex md:flex-col md:items-center md:mt-9'>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className='w-25 flex md:w-70 h-100 rounded-full overflow-hidden rounded-l-xl-full border-2 bg-blue-500 shadow-lg shadow-blue-500/50 slide-in-top'>
        <img className='w-full h-full object-cover' src="images.jpg" alt="logo image" />
      </motion.div>
      <tt className='slide-in-top mt-4 font-bold text-xl pl-4 md:font-bold md:text-2xl' >Rup Jyoti Medhi</tt>


      <ul className=' text-center mt-4 cursor-pointer transition ease-in-out delay-150 transform hover:scale-110 '>
        <motion.li
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className='mt-4 font-serif text-xl md:text-3xl text-blue-800 slide-in-left1'> <a href='#home'>Home</a></motion.li>

        <motion.li initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className='mt-4 font-serif font-bold transition ease-in-out delay-100 hover:scale-110 hover:text-blue-800 slide-in-right1'> <a href='#aboutme'>About Me</a></motion.li>

        <motion.li
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className='mt-4 font-serif font-bold transition ease-in-out delay-100 hover:scale-110 hover:text-blue-800 slide-in-left2'> <a href='#skills'>Skills</a></motion.li>

        <motion.li
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className='mt-4 font-serif font-bold transition ease-in-out delay-100 hover:scale-110 hover:text-blue-800 slide-in-right2'> <a href='#project'>Projects</a></motion.li>

        <motion.li
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className='mt-4 font-serif font-bold transition ease-in-out delay-100 hover:scale-110 hover:text-blue-800 slide-in-left3'> <a href='#contact'>Contact</a></motion.li>
      </ul>

      <motion.ul
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex justify-between gap-9 mt-9 text-xl cursor-pointer slide-in-blurred-bottom pb-9'>
        <li><a href="https://github.com/rupmedhi4" target='blank'><BsGithub /></a></li>
        <li> <a href="https://www.linkedin.com/in/rup-jyoti-medhi-516b62265/" target='blank'><BsLinkedin /></a> </li>
        <li> <a href="https://www.instagram.com/rup_medhi24/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target='blank'> <GrInstagram /></a></li>
        <li> <a href="#"><BsFacebook /></a> </li>
      </motion.ul>

    </div>
  );
}
