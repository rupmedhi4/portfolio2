import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { PiCopyrightFill } from 'react-icons/pi'


export default function ContactMe() {
  return (
    <div className='w-[100%] '>
      <h1 className='text-center  font-bold text-6xl pt-9 text-white'>Contact</h1>
      <div className='flex justify-around flex-wrap gap-4 mt-8'>
        <div className='md:max-w-[50%] text-center flex flex-col justify-center '>
          <h2 className='mb-8 text-white font-bold text-3xl'>Get in Touch</h2>
          <div className='flex flex-col gap-4 md:w-[30vw] w-[80vw]'>
            <input type="text" placeholder='Name' className='rounded-md p-2 bg-slate-600 ' />
            <input type="text" placeholder='Email' className='rounded-md p-2 bg-slate-600' />
            <textarea className='h-[9rem] rounded-md p-2 text-slate-400 bg-slate-600'>Description</textarea>
          </div>
          <div className='flex justify-center'>
          <button className=' mt-4 text-white bg-sky-600 p-2 w-36 font-bold rounded-md '>Send Message</button>

          </div>
        

        </div>
        <div className='md:max-w-[50%] flex flex-col justify-center'>
          <img src="contact2.gif" alt="contact gif" />
          <div>
            <span className=' flex justify-center text-white font-bold text-3xl mt-2'>Follow Me</span>
            <div>
              <ul className='flex justify-center text-white gap-9 mt-4 text-xl cursor-pointer rounded-full '>
                <li><BsGithub /></li>
                <li><GrInstagram /></li>
                <li><BsLinkedin /></li>
                <li><BsFacebook /></li>
              </ul>
            </div>
            <div className='flex justify-center mt-6 text-yellow-300 pb-6'>
              <i>Copyright</i>
              <PiCopyrightFill className='h-[1.5rem] w-[2rem]' />
              <i>2023 Rup Medhi</i>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
