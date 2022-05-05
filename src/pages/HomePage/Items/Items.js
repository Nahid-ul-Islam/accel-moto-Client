import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import newsImg from '../../../images/img5.webp';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return (
        <div>
            <h2 className='bg-rose-800 text-white text-center text-2xl md:text-4xl font-bold py-4'>Inventory</h2>

            <div className=' w-9/12 md:grid lg:grid-cols-3 md:grid-cols-2
            gap-4 mx-auto mt-10 md:mt-8 place-items-center'>
                {
                    items.slice(0, 6).map(item =>
                        <div className="p-5 bg-white max-w-sm rounded overflow-hidden shadow-2xl mb-16">
                            <div className='flex justify-center'>
                                <img src={item.img} alt="" srcSet="" />
                            </div>
                            <h2 className='text-2xl font-medium text-center'>{item.name}</h2>
                            <p className='text-center font-medium'>Price: {item.price}</p>
                            <p className='text-center font-medium'>Quantity: {item.quantity}</p>
                            <p className='text-center font-medium'>Supplier: {item.supplierName}</p>
                            <p className='mt-3 text-justify'>{item.description}</p>
                            <div className='text-center'>
                                <Link to='/checkout'>
                                    <button className="bg-rose-800 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded mt-5">Manage</button>
                                </Link>
                            </div>

                        </div>
                    )
                }
            </div>

            <h2 className='bg-rose-800 text-white text-center text-2xl md:text-4xl font-bold py-4'>Latest Harley Bike News</h2>
            <div className='md:grid md:grid-cols-2'>
                <div>
                    <img src={newsImg} alt="" />
                </div>
                <div className='md:mt-32 text-white'>
                    <p className='mt-4 mx-2 md-mt-0 md:mx-0 md:text-2xl'>Update the Inventory with full of new Harley Bikes. All newly released news are just one step away from here. Click the button bellow.</p>
                    <Link to='#'>
                        <button className="bg-rose-800 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded mt-5">Latest News</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Items;