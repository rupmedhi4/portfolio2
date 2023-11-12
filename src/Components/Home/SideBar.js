import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import './Animation.css'

export default function SideBar() {
  return (
    <div className='md:flex md:flex-col md:items-center md:mt-9'>

      <div className='w-25 flex md:w-60 h-100 rounded-full overflow-hidden rounded-l-xl-full border-2 bg-blue-500 shadow-lg shadow-blue-500/50 slide-in-top'>
        <img className='w-full h-full object-cover' src="images.jpg" alt="logo image" />
      </div>

      <tt className='slide-in-top mt-4 font-bold text-2xl  md:font-bold md:text-3xl' >Rup Jyoti Medhi</tt>

      <ul className=' text-center mt-4 cursor-pointer transition ease-in-out delay-150 transform hover:scale-110'>
        <li className='mt-4 font-serif text-xl text-blue-800 slide-in-left1'>Home</li>

        <li className='mt-4 font-serif font-bold transition ease-in-out delay-100 hover:scale-110 hover:text-blue-800 slide-in-right1'>About Me</li>

        <li className='mt-4 font-serif font-bold transition ease-in-out delay-100 hover:scale-110 hover:text-blue-800 slide-in-left2'>Skills</li>

        <li className='mt-4 font-serif font-bold transition ease-in-out delay-100 hover:scale-110 hover:text-blue-800 slide-in-right2'>Resume</li>

        <li className='mt-4 font-serif font-bold transition ease-in-out delay-100 hover:scale-110 hover:text-blue-800 slide-in-left3'>Contact</li>
      </ul>
      <ul className='flex justify-between gap-9 mt-9 text-2xl cursor-pointer slide-in-blurred-bottom'>
        <li><BsGithub /></li>
        <li><GrInstagram /></li>
        <li><BsLinkedin /></li>
        <li><BsFacebook /></li>
      </ul>
    </div>
  );
}
