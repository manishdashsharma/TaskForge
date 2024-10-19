import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForge from '../../assets/Taskforge.png';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Error Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center transform transition-all duration-300 hover:shadow-2xl">
        <img 
          src={TaskForge} 
          alt="TaskForge Logo" 
          className="mx-auto mb-6 h-16"
        />
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Something Went Wrong</h1>
        <p className="text-base text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again or contact support if the issue persists.
        </p>
        
        {/* Button */}
        <button 
          onClick={handleGoHome} 
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition-colors duration-200"
        >
          Return to Homepage
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} TaskForge. All rights reserved.
      </footer>
    </div>
  );
};

export default ErrorPage;
