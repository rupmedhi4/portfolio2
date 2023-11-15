import React, { useEffect } from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';
import { BiMenuAltLeft } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import PortalSlice, { openModal } from '../Slices/PortalSlice';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Project from '../Project/Project';
import ContactMe from '../Contact/ContactMe';


export default function Home() {

  const dispatch = useDispatch()
  const showMenu = () => {
    dispatch(openModal())

  };

 

  return (
    <div className='flex flex-row h-screen w-screen'>
      <div className='hidden md:flex md:w-[20rem] md:bg-black md:max-w-20vw md:text-white'>
        <SideBar />
      </div>

      <div className='flex-1 w-80 max-w-80vw text-yellow-500 p-4' style={{ backgroundColor: "#210909" }}>
        <BiMenuAltLeft className='text-4xl scale-in-hor-left md:hidden' onClick={showMenu} />
        <div className="overflow-y-auto h-full m-[-1rem] mb-[-1rem] overflow-x-hidden"  >
          <MainContent />
          <AboutMe/>
          <Resume/>
          <Project/>
          <ContactMe/>
        
        </div>

      </div>
    </div>
  );
}
