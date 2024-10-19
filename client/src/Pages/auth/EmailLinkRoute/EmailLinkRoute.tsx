import React,{ useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Confirmationapi } from '@/services/api.services';
import TaskForge from '../../../assets/Taskforge.png';
const EmailLinkRoute : React.FC = () => {
  const { token } = useParams(); // Extract token from the URL
  const location = useLocation(); // Extract the query string
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search); // Extract code from the query string
    const code = searchParams.get('code');
    console.log(token, "token");
    console.log(code, "code");

    // Call the confirmation API
    const confirmUser = async () => {
      try {
        const response = await Confirmationapi({ token, code }); // Call your API function

        if (response.success) {
          // Redirect to home page on success
          navigate('/');
        } else {
          // Redirect to error page on failure
          navigate('/error');
        }
      } catch (error) {
        // Redirect to error page on any error
        navigate('/error');
      }
    };

    confirmUser();
  }, [token, location.search, navigate]);

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-center'>
    {/* Logo */}
    <div className="mb-6">
      <img src={TaskForge} alt="TaskForge Logo" className="mx-auto h-16" />
    </div>

    {/* Confirmation Card */}
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-sm w-full transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-semibold text-center mb-4 text-blue-600">Confirming Your Account...</h1>
        <p className="text-center text-gray-700 mb-6">Please wait while we confirm your account. This may take a few moments.</p>

        {/* Loader */}
        <div className="flex justify-center">
          <div className="loader"></div>
        </div>
      </div>
    </div>

    {/* Optional Footer */}
    <footer className="mt-8 text-center text-gray-600">
      &copy; {new Date().getFullYear()} TaskForge. All Rights Reserved.
    </footer>

    <style jsx>{`
      .loader {
        border: 8px solid rgba(0, 0, 0, 0.1);
        border-left-color: #3b82f6; /* Tailwind blue-600 */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);
};
export default EmailLinkRoute;
