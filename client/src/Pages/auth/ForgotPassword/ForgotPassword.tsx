import React, { useState } from 'react';
import TaskForge from '../../../assets/Taskforge.png';
import ForgotImg from '../../../assets/Forgot.jpg';
import FingerprintIcon from '../../../assets/Fingerprint.png'; // Path to your Fingerprint icon

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        // Add functionality to handle password reset
        console.log('Reset instructions sent to:', email);
    };

    return (
        <div className="max-w-full min-h-screen">
            <div className="flex flex-col md:flex-row h-screen">
                {/* Left side (Forgot Password Form) */}
                <div className="w-full md:w-1/2 h-full p-6 relative bg-gray-50">
                    {' '}
                    {/* Add background */}
                    <img
                        src={TaskForge}
                        alt=""
                        className="w-32 mb-6"
                    />{' '}
                    {/* Added margin */}
                    {/* Create Account Link */}
                    <div className="absolute top-6 right-6">
                        <a
                            href="#"
                            className="font-poppins text-sm font-medium text-black hover:underline">
                            Create an account
                        </a>
                    </div>
                    {/* TaskForge Fingerprint Icon */}
                    <div className="ms-14 mt-16 p-5">
                        {' '}
                        {/* Added padding to the container */}
                        <div className="flex justify-start mb-6">
                            <img
                                src={FingerprintIcon}
                                alt="Fingerprint Icon"
                                className="h-16 w-16"
                            />
                        </div>
                        {/* Forgot Password Heading */}
                        <h1 className="font-syne text4-xl md:text-5xl font-bold text-forge-darkGreen mb-2 text-left">Forgot Password?</h1>
                        <p className="font-poppins tracking-tight text-[22px] md:text-[24px] font-normal mb-6 text-left">
                            No worries, we'll send you reset instructions
                        </p>
                        {/* Email Input */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="block text-left font-bold text-gray-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="e.g. example@gmail.com"
                                className="p-2 border border-gray-300 rounded-lg mb-4"
                                style={{ width: '75%' }} // Adjust percentage or pixel value as needed
                            />

                            {/* Reset Password Button */}
                            <button
                                onClick={handleResetPassword}
                                className="w-3/4 bg-forge-darkGreen text-white py-2 rounded-lg hover:bg-forge-green transition duration-200">
                                Reset Password
                            </button>
                        </div>
                        {/* Back to Login Link */}
                        <div className="mt-4 flex justify-start ml-[50px] md:ml-[100px] lg:ml-[150px] xl:ml-[180px] mr-2">
                            <a
                                href="#"
                                className=" font-poppins text-sm font-medium text-forge-darkGreen hover:underline underline decoration-forge-darkGreen">
                                Back to login
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="hidden md:flex w-full md:w-1/2 h-full py-2 px-4">
                    <div className="flex items-center justify-center w-full h-full relative">
                        <img
                            src={ForgotImg}
                            alt=""
                            className="object-cover h-full w-full rounded-[30px]"
                        />
                        <div className="absolute w-[90%] bottom-6 bg-green-900 bg-opacity-70 h-52 rounded-lg">
                            <h3 className="font-syne font-bold text-3xl text-white px-11 pt-9 flex items-center gap-4 mb-2">
                                Streamline your <br /> workflow
                            </h3>
                            <p className="font-poppins text-white font-normal tracking-tight text-[18px] px-12">
                                Logging in ensures you're always connected and up to date with your team. Let's continue making progress together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ForgotPassword;