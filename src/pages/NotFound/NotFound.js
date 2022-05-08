import React from 'react';
import pageNotFound from '../../images/NotFound/pageNotFound.jpg';

const NotFound = () => {
    return (
        <div className=' flex justify-center mt-40 lg:mt-24' >
            <img className='lg:w-2/6' src={pageNotFound} alt="" />
        </div>
    );
};

export default NotFound;