import React from 'react';
import { motion } from 'framer-motion';


const AboutMe = () => {

  return (
    <div className='bg-white p-0 m-0' id='aboutme'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='font-extrabold text-black text-center font text-5xl font-serif p-[3rem]'
      >
        About Me
      </motion.div>

      <div className='flex md:justify-between justify-center flex-wrap md:p-5 md:pl-14'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}
          className='md:max-w-[50%] max-w-[50%] pb-4 text-justify '>
          <h2 className='font-bold text-2xl text-black'>
            I'm <span className='text-yellow-500'> Rup Jyoti Medhi</span>, a  <span className='text-sky-900 text-bold'>Front-End developer</span>
          </h2>
          <p className='pt-9 text-slate-900 font-serif'>
            
            Hello! I'm a Front-End developer based in India, passionate about crafting engaging and responsive websites. My focus is on creating inclusive digital experiences for users across different devices. Beyond coding, I'm fascinated by scalable distribution systems and dedicated to writing clean, maintainable code. 
          </p>

          <motion.p
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            className='pt-4 text-slate-900 font-serif'>
            In addition to my technical pursuits, I am driven by the belief that user-friendly designs and accessible interfaces are key to enhancing the overall web experience. Let's embark on this exciting journey together and build something extraordinary that leaves a lasting impact in the digital realm!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 3 }}
          className='pl-4 w-[16rem] md:w-[28rem]'>
          <img src="./gif.gif" alt="" className='rounded-full rounded-t-md rounded-tr-full' />
          <div className='text-center pt-5'>
            <a  href='https://drive.google.com/file/d/1nnfgMrTfeju2MTrsa7cB81o10nyDURL5/view?usp=sharing' target='_blank' className='bg-blue-700 rounded-full text-white mb-4 p-4 pl-8 pr-8 font-bold'>Download CV</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
