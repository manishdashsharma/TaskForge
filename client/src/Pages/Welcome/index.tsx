import React from 'react';
import TaskForge from '../../assets/Taskforge.png';


function Welcome( ) { 
  return (
    <div className='min-h-screen flex flex-col justify-center items-center max-w-full'>
      <div className='flex items-center justify-center flex-col gap-3 w-[50%] px-24 text-center'>
      <img src={TaskForge} alt="Task Forge" className='w-52' />
      <h2 className='font-bold font-syne text-2xl text-gray-800 tracking-tight '>Welcome to all-in-one open source project management platform</h2>
      <p className='font-poppins tracking-tight  text-gray-600'>Enjoy the best of all with one-time payment</p>
      </div>
    </div>
  );
}

export default Welcome;
