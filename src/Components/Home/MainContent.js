import React, { useEffect } from 'react';
import Typed from 'typed.js';
import {AiOutlineDownCircle} from 'react-icons/ai';
import { motion } from 'framer-motion';


export default function MainContent() {
    useEffect(() => {
        // Options for Typed.js
        const options = {
            strings: ['Hello 👋', 'Im Rup Medhi', 'Front End Developer|','React Js Developer|', 'UI Developer'],
            typeSpeed: 90,
            backSpeed: 90,
            loop: true,
        };

        // Initialize Typed.js
        const typed = new Typed('.typing-element', options);

        // Clean up Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id='home'>
            <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2 }}
                className='flex flex-col items-center justify-center h-96 overflow-hidden mt-[3.5rem]'>
                <h1 className='md:text-[4rem] text-[3rem] font-extrabold text-white  flex-wrap'>Welcome </h1>
                <div >
                    <span className='typing-element text-[3rem] mt-3 font-serif '></span>
                </div>
            </motion.div>

            <motion.div   
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                 <button className='text-white font-bold text-[1.5rem] border-2 border-blue-500 pl-4 pr-4 pt-1 pb-1 flex justify-center mx-auto text-center '><a href='#contact'>Contact Me</a></button>
                 <AiOutlineDownCircle className='flex justify-center mx-auto text-center mt-[5rem] text-3xl bg-transparent border border-blue-400 rounded-full animate-bounce'/>
            </motion.div>  
        </div>
    );
}
