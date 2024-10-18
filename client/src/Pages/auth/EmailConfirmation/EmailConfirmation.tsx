import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForge from '../../../assets/Taskforge.png';

const EmailConfirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-4 w-full sm:w-3/4 lg:w-1/2 text-center">
    
        <img src={TaskForge} alt="Task Forge" className="w-40 sm:w-52" />

        <h2 className="font-bold font-syne text-xl sm:text-2xl lg:text-3xl text-gray-800 tracking-tight">
          Kindly check your registered email
        </h2>

        <p className="font-poppins text-sm sm:text-base text-gray-600 tracking-tight">
          We have sent a confirmation email. Please follow the instructions to verify your account.
        </p>

        <div className="mt-4 flex justify-start">
          <button
            onClick={() => navigate('/app/sign-in')}
            className="font-poppins text-sm font-medium text-forge-darkGreen hover:underline underline decoration-forge-darkGreen"
          >
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
