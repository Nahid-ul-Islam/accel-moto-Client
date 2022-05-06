import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const {_id, img, name, description, price, quantity, supplierName} = item;
    return (
        <div>
            <div className="p-5 bg-white max-w-sm rounded overflow-hidden shadow-2xl mb-16">
                <div className='flex justify-center'>
                    <img src={img} alt="" srcSet="" />
                </div>
                <h2 className='text-2xl font-medium text-center'>{name}</h2>
                <p className='text-center font-medium'>Price: {price}</p>
                <p className='text-center font-medium'>Quantity: {quantity}</p>
                <p className='text-center font-medium'>Supplier: {supplierName}</p>
                <p className='mt-3 text-justify'>{description}</p>
                <div className='text-center'>
                    <Link to={`/bikes/${_id}`}>
                        <button className="bg-rose-800 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded mt-5">Update</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Item;