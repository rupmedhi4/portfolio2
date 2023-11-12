import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import SideBar from '../Home/SideBar';
import '../Home/Animation.css';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../Slices/PortalSlice';

export default function Modal() {
  const dispatch = useDispatch();
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);

    // Add a delay to give time for the closing animation to play
    setTimeout(() => {
      dispatch(openModal());
    }, 500); // The same duration as the animation in milliseconds
  };

  return createPortal(
    <div className={`fixed top-0 left-0 w-60 h-full flex items-center justify-center bg-white p-3 ${isClosing ? 'scale-out-hor-left' : 'scale-in-hor-left'
      } md:hidden`}>

        <button className="absolute top-0 right-0 m-2 border-rediou text-xl font-extrabold rounded-l-xl rounded-r-xl pl-3 pr-3 pb-1 text-center bg-yellow-500 text-black"
          onClick={closeMenu}>close</button>

      <SideBar />
    </div>,
    document.getElementById('root2')
  );
}
