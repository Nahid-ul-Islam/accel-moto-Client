import React from 'react';
import { Link } from 'react-router-dom';
import newsImg from '../../../images/img5.webp';

const ExtraSectionOne = () => {
    return (
        <div>
            <h2 className='bg-rose-800 text-white text-center text-2xl md:text-4xl font-bold py-9 mb-16'>Latest Harley Bike News</h2>
            <div className='md:grid md:grid-cols-2 lg:gap-16 md:gap-12 lg:mx-24 md:mx-6'>
                <div>
                    <img src={newsImg} alt="" />
                </div>
                <div className='xl:mt-16 text-white text-center md:text-left'>
                    <p className='mt-4 mx-2 md-mt-0 md:mx-0 lg:text-xl xl:text-2xl'>Update the Inventory with full of new Harley Bikes. All newly released news are just one step away from here. Click the button bellow.</p>
                    <Link to='#'>
                        <button className="bg-rose-800 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded mt-5">Latest News</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionOne;