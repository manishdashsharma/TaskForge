
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import TaskForge from '../../../assets/Taskforge.png';
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import 'react-phone-number-input/style.css';
// import Pattern from '../../../assets/Pattern.jpg';
// import fingerprint from '../../../assets/fingerprint.png';
// import { BsArrowUpRightCircleFill } from "react-icons/bs";
// import { FiArrowLeft } from "react-icons/fi";

// const OTPInput: React.FC = () => {
//     const [otp, setOtp] = useState(Array(6).fill(''));

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//         const value = e.target.value;
//         if (/^[0-9]*$/.test(value)) {
//             let newOtp = [...otp];
//             newOtp[index] = value;
//             setOtp(newOtp);
//             if (value && index < 5) {
//                 document.getElementById(`otp-input-${index + 1}`)?.focus();
//             }
//         }
//     };

//     return (
//         <div className="flex justify-left mt-12 gap-4 md:gap-8">
//             {otp.map((digit, index) => (
//                 <input
//                     key={index}
//                     id={`otp-input-${index}`}
//                     type="text"
//                     maxLength={1}
//                     value={digit}
//                     onChange={(e) => handleChange(e, index)}
//                     className={`w-10 h-10 md:w-12 md:h-12 text-center border-2 ${digit ? 'border-black' : 'border-gray-400'} rounded-md focus:outline-none text-lg md:text-xl`}
//                 />
//             ))}
//         </div>
//     );
// };

// const ResetPassword: React.FC = () => {
//     return (
//         <div className='max-w-full min-h-screen'>
//             <div className='flex flex-col md:flex-row h-screen'>
//                 {/* Left side */}
//                 <div className='w-full md:w-1/2 h-full p-6'>
//                     <div className='flex justify-between items-center w-full'>
//                         <img src={TaskForge} alt="TaskForge" className='w-28 md:w-32' />
//                         <Link to='/app/sign-up' className='text-forge-darkGreen font-poppins underline text-sm md:text-base'>
//                             Create an account
//                         </Link>
//                     </div>

//                     <div className='flex flex-col mt-12 md:mt-[70px] md:px-12 gap-4 md:gap-5'>
//                         <div className='flex items-center gap-3'>
//                             <img src={fingerprint} alt="Fingerprint" className='object-cover h-10 w-10 md:h-12 md:w-12 rounded-lg' />
//                             <h1 className='font-syne text-3xl md:text-4xl font-bold text-forge-darkGreen'>
//                                 Password Reset
//                             </h1>
//                         </div>
//                         <p className='font-poppins tracking-tight text-sm md:text-[18px]'>
//                             We sent a code to <b>infoteam@taskforge.com</b>
//                         </p>

//                         <OTPInput />

//                         <Button className='bg-forge-darkGreen mt-4 font-poppins px-8 md:px-10 w-full text-white text-sm md:text-[15px] font-normal h-10 md:h-11 rounded-md'>
//                             Continue
//                         </Button>

//                         <div className="flex justify-center items-center flex-col">
//                             <p className='font-poppins text-xs md:text-sm'>
//                                 Didn’t receive the email?
//                                 <Link to={'/'} className='text-forge-darkGreen font-bold underline ml-1'>
//                                     Click to resend
//                                 </Link>
//                             </p>
//                         </div>

//                         <Separator className='mt-6 w-full md:w-[1020px]' />

//                         <div className="flex items-center justify-center">
//                             <div className="bg-forge-darkGreen p-1 rounded-md">
//                                 <FiArrowLeft className="text-white text-xs md:text-sm" />
//                             </div>
//                             <Link to={'/app/login'} className='ml-2 text-forge-darkGreen font-poppins font-bold underline text-xs md:text-sm'>
//                                 Back to login
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right side */}
//                 <div className='hidden md:flex w-full md:w-1/2 h-full py-2 px-4'>
//                     <div className='flex items-center justify-center w-full h-full relative'>
//                         <img src={Pattern} alt="Pattern" className='object-cover h-full w-full rounded-[30px]' />
//                         <div className='absolute w-[95%] bottom-6 bg-green-900 bg-opacity-60 h-44 md:h-52 rounded-lg'>
//                             <h3 className='font-syne font-bold text-2xl md:text-3xl text-white px-6 md:px-11 pt-6 md:pt-9 flex items-center gap-4'>
//                                 Streamline your workflow <Link to='/article'><BsArrowUpRightCircleFill className='size-12' /></Link>
//                             </h3>
//                             <p className='font-poppins text-white text-xs md:text-[18px] px-6 md:px-12'>
//                                 Logging in ensures you're always connected and up to date with your team. Let's continue making progress together!
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ResetPassword;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TaskForge from '../../../assets/Taskforge.png';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import 'react-phone-number-input/style.css';
import Pattern from '../../../assets/Pattern.jpg';
import fingerprint from '../../../assets/fingerprint.png';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import toast from 'react-hot-toast'; // Import toast for notifications

const OTPInput: React.FC<{ onChange: (otp: string) => void }> = ({ onChange }) => {
    const [otp, setOtp] = useState(Array(6).fill(''));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/^[0-9]*$/.test(value)) {
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            onChange(newOtp.join('')); // Call onChange to update OTP in the parent
            if (value && index < 5) {
                document.getElementById(`otp-input-${index + 1}`)?.focus();
            }
        }
    };

    return (
        <div className="flex justify-left mt-12 gap-4 md:gap-8">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    className={`w-10 h-10 md:w-12 md:h-12 text-center border-2 ${digit ? 'border-black' : 'border-gray-400'} rounded-md focus:outline-none text-lg md:text-xl`}
                />
            ))}
        </div>
    );
};

const ResetPassword: React.FC = () => {
    const [otp, setOtp] = useState('');

    const handleContinue = async () => {
        // Simulating an API call with a timeout
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 1-second delay
        if (otp === '000000') {
            toast.success('OTP verified successfully!'); // Show success notification
            // Add logic to navigate to the next step or page
        } else {
            toast.error('Invalid OTP. Please try again.'); // Show error notification
        }
    };

    return (
        <div className='max-w-full min-h-screen'>
            <div className='flex flex-col md:flex-row h-screen'>
                {/* Left side */}
                <div className='w-full md:w-1/2 h-full p-6'>
                    <div className='flex justify-between items-center w-full'>
                        <img src={TaskForge} alt="TaskForge" className='w-28 md:w-32' />
                        <Link to='/app/sign-up' className='text-forge-darkGreen font-poppins underline text-sm md:text-base'>
                            Create an account
                        </Link>
                    </div>

                    <div className='flex flex-col mt-12 md:mt-[70px] md:px-12 gap-4 md:gap-5'>
                        <div className='flex items-center gap-3'>
                            <img src={fingerprint} alt="Fingerprint" className='object-cover h-10 w-10 md:h-12 md:w-12 rounded-lg' />
                            <h1 className='font-syne text-3xl md:text-4xl font-bold text-forge-darkGreen'>
                                Password Reset
                            </h1>
                        </div>
                        <p className='font-poppins tracking-tight text-sm md:text-[18px]'>
                            We sent a code to <b>infoteam@taskforge.com</b>
                        </p>

                        <OTPInput onChange={setOtp} /> {/* Pass setOtp to OTPInput */}

                        <Button
                            onClick={handleContinue} // Call handleContinue on button click
                            className='bg-forge-darkGreen mt-4 font-poppins px-8 md:px-10 w-full text-white text-sm md:text-[15px] font-normal h-10 md:h-11 rounded-md'>
                            Continue
                        </Button>

                        <div className="flex justify-center items-center flex-col">
                            <p className='font-poppins text-xs md:text-sm'>
                                Didn’t receive the email?
                                <Link to={'/'} className='text-forge-darkGreen font-bold underline ml-1'>
                                    Click to resend
                                </Link>
                            </p>
                        </div>

                        <Separator className='mt-6 w-full md:w-[1020px]' />

                        <div className="flex items-center justify-center">
                            <div className="bg-forge-darkGreen p-1 rounded-md">
                                <FiArrowLeft className="text-white text-xs md:text-sm" />
                            </div>
                            <Link to={'/app/sign-in'} className='ml-2 text-forge-darkGreen font-poppins font-bold underline text-xs md:text-sm'>
                                Back to login
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className='hidden md:flex w-full md:w-1/2 h-full py-2 px-4'>
                    <div className='flex items-center justify-center w-full h-full relative'>
                        <img src={Pattern} alt="Pattern" className='object-cover h-full w-full rounded-[30px]' />
                        <div className='absolute w-[95%] bottom-6 bg-green-900 bg-opacity-60 h-44 md:h-52 rounded-lg'>
                            <h3 className='font-syne font-bold text-2xl md:text-3xl text-white px-6 md:px-11 pt-6 md:pt-9 flex items-center gap-4'>
                                Streamline your workflow <Link to='/article'><BsArrowUpRightCircleFill className='size-12' /></Link>
                            </h3>
                            <p className='font-poppins text-white text-xs md:text-[18px] px-6 md:px-12'>
                                Logging in ensures you're always connected and up to date with your team. Let's continue making progress together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
