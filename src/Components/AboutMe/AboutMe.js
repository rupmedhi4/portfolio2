
import React from 'react';

export default function AboutMe() {
  return (
    <div className='bg-white p-0 m-0'>
      <h1 className='font-extrabold text-black text-center font text-5xl font-serif p-[3rem]'>About Me</h1>

      <div className='flex md:justify-between justify-center flex-wrap md:p-5 md:pl-14'>
        <div className='md:max-w-[50%] max-w-[50%] pb-4 text-justify ' >
          <h2 className='font-bold text-2xl text-black'>I'm <span className='text-yellow-500'> Rup Jyoti Medhi</span>, a Web Enthusiast</h2>
          <p className='pt-9 text-slate-900 font-serif'>I love playing music, reading comics and playing games. I am currently pursuing BTech degree in VIT Vellore. I am 20 years old.I love exploring new technologies.</p>

          <p className='pt-4 text-slate-900 font-serif'>I am currently looking for jobs. I am also a discord bot developer. I worked on reactJs, NextJs, TypeScript, Java and many more. I am also looking to collaborate in open-source projects.</p>

        </div>

        <div className='pl-4 w-[16rem] md:w-[28rem]'>
          <img src="./gif.gif" alt="" className='rounded-full rounded-t-md rounded-tr-full'/>
          <div className='text-center pt-5'>
              <button className='bg-blue-700 rounded-full text-white mb-4 p-4 pl-8 pr-8 font-bold'>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}
