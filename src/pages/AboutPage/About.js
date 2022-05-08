import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../images/img4.avif';
import Footer from '../../Shared/Footer/Footer';

const About = () => {
    return (
        <div className='bg-slate-800'>
            <div className='mb-24 pt-16'>
                <div className='md:grid md:grid-cols-2 lg:gap-16 md:gap-12 lg:mx-24 md:mx-6'>
                    <div className='flex items-center border rounded'>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='mx-2 md:mx-0 2xl:mt-16 text-white md:text-left'>
                        <h2 className='text-center text-white text-2xl md:text-4xl font-bold py-9 '>Keep up with ACCEL MOTO</h2>
                        <p className='text-justify  mt-4 mx-2 md-mt-0 md:mx-0 lg:text-xl xl:text-2xl'>We turn ambitions into reality by igniting the potential of merchants in retail, hospitality and golf. Forget business as usual—we give owners the tools they need to challenge the status quo. From local neighborhoods to thriving metropolitan cities, we're on a mission to create strong, vibrant and diverse main streets everywhere. We're building communities through commerce. Our suppliers are at the cutting edge of retail, hospitality and golf. Read how they use innovation and passion to level up their business.</p>

                        <div className='flex justify-center md:justify-start'>
                            <Link to='#'>
                                <button className=" bg-rose-800 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded mt-5">Read the Stories</button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;