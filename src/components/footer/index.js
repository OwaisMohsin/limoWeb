import React from 'react';

import headerLogo from '../../assets/icons/headerLogo.png'


const Footer = () => {

    return (
        <div className='bg-white'>


            <div className=' bg-blue-600   py-1'>
            </div>

            <div className='flex justify-between flex-col md:flex-row px-[6%] md:px-8 lg:px-16 xl:px-20 py-8 '>
                <div className='w-full md:w-1/4'>
                    <img className='h-8 w-auto mx-auto md:mx-0' src={headerLogo} alt='Logo' />
                    <p className='text-xs text-center md:text-left text-slate-600 md:text-sm mt-4'>
                        <span>Our vision is to provide convenience </span>
                        <br />
                        <span>and help increase your sales business.</span>
                    </p>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='mt-4 md:mt-0 md:w-full mr-8'>
                        <p className='font-semibold text-xs md:text-sm'>About</p>
                        <p className='text-xs text-slate-700 md:text-sm mt-2'>How it works</p>
                        <p className='text-xs text-slate-700 md:text-sm mt-2'>Featured</p>
                        <p className='text-xs text-slate-700 md:text-sm mt-2'>Partnership</p>
                    </div>
                    <div className='mt-4 md:mt-0 md:w-full mr-8'>
                        <p className='font-semibold text-xs md:text-sm'>Events</p>
                        <p className='text-xs text-slate-700 md:text-sm mt-2'>Blogs</p>
                        <p className='text-xs text-slate-700 md:text-sm mt-2'>Invite a friend</p>
                    </div>
                    <div className='mt-4 md:mt-0 md:w-full'>
                        <p className='font-semibold text-xs md:text-sm'>Social</p>
                        <p className='text-xs text-slate-700 md:text-sm mt-2'>Instagram</p>
                        <p className='text-xs text-slate-700 md:text-sm mt-2'>Twitter</p>
                        <p className='text-xs text-slate-700 md:text-sm mt-2'>Facebook</p>
                    </div>
                </div>

            </div>
            <div className='flex border-t-2 border-slate-300 mb-8 mx-[4%] h-1'>
            </div>

            <div className='flex justify-between px-[4%] mb-4' >
                <p className='font-semibold text-xs md:text-sm'>©2022 mdotlimo. All rights reserved</p>
                <div className='flex' >
                    <span className='font-semibold text-xs md:text-sm'>Privacy & Policy</span>
                    <span className='font-semibold text-xs md:text-sm ml-8'>Terms & Condition</span>
                </div>
            </div>

            <div className=' bg-blue-600   py-1'>
            </div>
        </div>
    );
}

export default Footer;
