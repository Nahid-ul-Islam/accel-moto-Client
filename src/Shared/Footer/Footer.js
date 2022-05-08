import React from 'react';

const Footer = () => {
    return (
        <div className='md:mt-40 bg-gray-800 text-white'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-auto pt-10 '>
                <div className='flex flex-col items-center'>
                    <div className='ml-10 md:ml-0'>
                        <h6>Information</h6>
                        <h6 className='text-sm'>About Me</h6>
                        <h6 className='text-sm'>Services</h6>
                        <h6 className='text-sm'>Blogs</h6>
                        <h6 className='text-sm'>Terms and Conditions</h6>
                        <h6 className='text-sm'>About Me</h6>
                    </div>
                </div>


                <div className='flex flex-col items-center'>
                    <div>
                        <h6 className='ml-2'>Visa Types</h6>
                        <h6 className='text-sm'>- Business Visa</h6>
                        <h6 className='text-sm'>- Student Visa</h6>
                        <h6 className='text-sm'>- Family Visa</h6>
                        <h6 className='text-sm'>- Work Visa</h6>
                        <h6 className='text-sm'>- Immigrate Visa</h6>
                    </div>
                </div>


                <div className='flex flex-col items-center'>
                    <div>
                        <h6 className='ml-2'>Country</h6>
                        <h6 className='text-sm'>- United States</h6>
                        <h6 className='text-sm'>- Austrailia</h6>
                        <h6 className='text-sm'>- United Kingdom</h6>
                        <h6 className='text-sm'>- Switzerland</h6>
                        <h6 className='text-sm'>- Singapore</h6>
                    </div>
                </div>
            </div>
            <div className='text-center pb-10'>
            <small >Copyright © 2022, Developed By Nahidul Islam</small>
            </div>
        </div>
    );
};

export default Footer;