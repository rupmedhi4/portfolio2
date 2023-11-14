import React from 'react'

export default function Resume() {
    return (
        <>
            <h1 className='text-center text-5xl font-bold pt-8 text-white'>Resume</h1>
            <div className='flex flex-center mt-[3rem] flex-wrap md:justify-evenly  '>
                <div className='flex flex-wrap justify-center  md:max-w-[50%]  md:justify-center  md:ml-[3rem] gap-5 rounded-full '>
                    <img src="./css.png" alt="css image" className='rounded-full' />
                    <img src="./firebase.png" alt="firebase image" className='rounded-full' />
                    <img src="./js.png" alt="js image" className='rounded-full' />
                    <img src="./next.jpg" alt="next image" className='rounded-full' />
                    <img src="./react.png" alt="react image" className='rounded-full w-[13rem] md:w-[15rem]' />
                    <img src="./tailwind.png" alt="tailwind image" className='rounded-full  w-[11rem] md:w-[14rem]' />
                </div>
                <div >
                    <h2 className='md:ml-[8rem] mt-9 text-white text-3xl font-bold pl-9 md:pr-32 text-center '>My Skills</h2>
                    <ul className='pt-8 font-bold text-white space-y-12 flex justify-center flex-col '>
                        <li>
                            <div className='flex justify-evenly'>
                                <span className='pl-6'>JavaScript</span>
                                <span >65%</span>
                            </div>
                            <div className='flex'>
                                <div className='h-3 md:w-[170%] w-[35%]  bg-blue-800 ml-[3.5rem] rounded-l-full'></div>
                                <div className='h-3 md:w-[18rem] w-[5rem] bg-white rounded-r-md'></div>

                            </div>
                        </li>
                        <li>
                            <div className='flex justify-evenly'>
                                <span className='pl-6'>React Js</span>
                                <span >75%</span>
                            </div>
                            <div className='flex'>
                                <div className='h-3 md:w-[300%] w-[45%] bg-blue-800 ml-[3.5rem] rounded-l-full'></div>
                                <div className='h-3 md:w-[18rem] w-[3.5rem] bg-white rounded-r-md'></div>

                            </div>
                        </li>
                        <li>
                            <div className='flex justify-evenly'>
                                <span className='pl-6'>HTML</span>
                                <span >80%</span>
                            </div>
                            <div className='flex'>
                                <div className='h-3 md:w-[400%] w-[50%] bg-blue-800 ml-[3.5rem] rounded-l-full'></div>
                                <div className='h-3 md:w-[18rem] w-[3rem] bg-white rounded-r-md'></div>

                            </div>
                        </li>
                        <li>
                            <div className='flex justify-evenly'>
                                <span className='pl-6' >CSS</span>
                                <span >65%</span>
                            </div>
                            <div className='flex'>
                                <div className='h-3 md:w-[170%] w-[35%]  bg-blue-800 ml-[3.5rem] rounded-l-full'></div>
                                <div className='h-3 md:w-[18rem] w-[5.5rem] bg-white rounded-r-md'></div>

                            </div>
                        </li>
                        <li>
                            <div className='flex justify-evenly'>
                                <span className='pl-6'>Firebase</span>
                                <span >75%</span>
                            </div>
                            <div className='flex'>
                                <div className='h-3 md:w-[300%] w-[45%] bg-blue-800 ml-[3.5rem] rounded-l-full'></div>
                                <div className='h-3 md:w-[18rem] w-[4rem] bg-white rounded-r-md'></div>

                            </div>
                        </li>
                        <li>
                            <div className='flex justify-evenly'>
                                <span className='pl-6'>Tailwind CSS</span>
                                <span >65%</span>
                            </div>
                            <div className='flex'>
                                <div className='h-3 md:w-[300%] w-[35%] bg-blue-800 ml-[3.5rem] rounded-l-full'></div>
                                <div className='h-3 md:w-[18rem] w-[6rem] bg-white rounded-r-md'></div>

                            </div>
                        </li>
                        <li>
                            
                            <div className='flex'>
                                <div className=' w-[15rem] max-w-4rem  bg-white rounded-r-md'></div>

                            </div>
                        </li>

                    </ul>
                    <div className='text-center pt-5'>
              <button className='bg-blue-700 rounded-full text-white  p-4 md:pl-16 md:pr-16 pr-20 pl-20 mb-4 font-bold text-center ml-4'>Download CV</button>
          </div>
                </div>
            </div>
        </>
    )
}
