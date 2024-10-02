import React from 'react';
import TaskForge from '../../assets/Taskforge.png';
import SignUp from '../../assets/SignUp.jpg';
import GoogleIcon from '../../assets/Google.png';
import GithubIcon from '../../assets/githubicono.png';
const Signup: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='nav p-1'>
        <img src={TaskForge} alt="Task Forge" className='w-52 p-2' />
      </div>
      <div className='flex flex-col lg:flex-row'>
        
      <div className='flex flex-col justify-center items-start w-full lg:w-1/2 p-8'>
       
        <h2 className='font-bold font-syne text-3xl text-green-900 mb-2'>Get Started</h2>
        <p className='font-poppins text-gray-600 mb-8'>Organize. Collaborate. Achieve.</p>

        {/* Social Sign-Up Buttons */}
        <div className='flex space-x-4 mb-6'>
          <button className='flex items-center justify-center bg-white border border-gray-300 rounded-lg px-4 py-2'>
            <img src={GoogleIcon} alt="Google" className='w-6 h-6 mr-2' />
            Sign up with Google
          </button>
          <button className='flex items-center justify-center bg-white border border-gray-300 rounded-lg px-4 py-2'>
            <img src={GithubIcon} alt="Github" className='w-6 h-6 mr-2' />
            Sign up with Github
          </button>
        </div>

        {/* Form */}
        <form className='w-full max-w-sm'>
          <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input className='w-full px-3 py-2 border border-gray-300 rounded-lg' placeholder='Enter your name' />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input className='w-full px-3 py-2 border border-gray-300 rounded-lg' placeholder='e.g. example@gmail.com' />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700'>Password</label>
            <input type='password' className='w-full px-3 py-2 border border-gray-300 rounded-lg' placeholder='Create a password' />
          </div>
          <button className='w-full bg-green-900 text-white py-2 rounded-lg'>Sign Up</button>
        </form>

        <p className='text-gray-600 mt-4'>
          Already have an account? <a href='#' className='text-green-900'>Log in</a>
        </p>
      </div>

        {/* Image section - hidden on small screens */}
        <div className='hidden lg:flex justify-center items-center w-full lg:w-1/2 h-[88vh] p-2 relative'>
      {/* Image */}
      <img src={SignUp} alt="Sign Up" className='object-cover w-full h-full rounded-xl' />
      
      {/* Text Overlay */}
      <div className='absolute bottom-6 left-6 bg-green-900 bg-opacity-45 text-white p-6 rounded-lg me-5'>
        <h3 className='text-2xl font-bold mb-2'>Streamline your workflow</h3>
        <p className='text-sm mb-4'>
          Whether you're leading a team or working solo, we provide all the tools you need to stay on track, collaborate with others, and achieve your goals.
        </p>
        <a href='#' className='inline-flex items-center text-white font-bold'>
          <span className='mr-2'>Learn More</span>
          <svg className='w-6 h-6' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M9 18l6-6-6-6'></path>
          </svg>
        </a>
      </div>
    </div>

      </div>
    </div>
  );
}

export default Signup;
