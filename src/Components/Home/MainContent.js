import React, { useEffect } from 'react';
import Typed from 'typed.js';
import {AiOutlineDownCircle} from 'react-icons/ai';

export default function MainContent() {
    useEffect(() => {
        // Options for Typed.js
        const options = {
            strings: ['Welcome to Typed.js!', 'Type your messages here.'],
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
        <div>
            <div className='flex flex-col items-center justify-center h-96 overflow-hidden mt-[3.5rem]'>
                <h1 className='text-[4rem] font-extrabold text-white scale-in-center'>Welcome </h1>
                <div className='scale-in-center2'>
                    <span className='typing-element text-[3rem] mt-3 font-serif '></span>
                </div>
            </div> 
            <div>
                 <button className='text-white font-bold text-[1.5rem] border-2 border-blue-500 pl-4 pr-4 pt-1 pb-1 flex justify-center mx-auto text-center puff-in-center'>Contact Me</button>
                 <AiOutlineDownCircle className='flex justify-center mx-auto text-center mt-[5rem] text-3xl bg-transparent border border-blue-400 rounded-full animate-bounce'/>
            </div>  
          

        </div>
    );
}
