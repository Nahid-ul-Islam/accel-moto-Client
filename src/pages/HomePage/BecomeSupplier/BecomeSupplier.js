import React from 'react';
import { Link } from 'react-router-dom';
import supplierImage from '../../../images/extrasectiontwoimg.jpg';

const BecomeSupplier = () => {
    return (
        <div className='lg:mb-16'>
            <h2 className='bg-rose-800 text-white text-center text-2xl md:text-4xl font-bold py-9 mb-16'>Become A Supplier</h2>


            <div className='md:grid md:grid-cols-2 lg:gap-16 md:gap-12 lg:mx-10 xl:mx-24 md:mx-6'>
                <div className='order-1'>
                    <img src={supplierImage} alt="" />
                </div>
                <div className='xl:mt-16 text-white text-center md:text-left'>
                    <p className='mt-4 mx-2 md-mt-0 md:mx-0 lg:text-xl xl:text-2xl'>Our purpose at ACCEL MOTO is to fulfill dreams of personal freedom. For over a century, we have committed to this goal and it remains the foundation for everything we do. However, it's our family of ACCEL MOTO suppliers who ultimately make these dreams come true. Becoming a Supplier of ACCEL MOTO is one of the most unique business opportunities. Be a supplier and meke the dreams true with us.</p>
                    <Link to='#'>
                        <button className="bg-rose-800 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded mt-5">Be A Supplier</button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default BecomeSupplier;