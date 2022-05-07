import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyTabularItem from './MyTabularItem/MyTabularItem';

const MyItems = () => {
    const [user] =useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect( () => {
        const getMyItems = () => {
            const email = user.email;
            fetch(`http://localhost:5000/my-bikes?email=${email}`)
            .then( res=> res.json())
            .then(data => setMyItems(data))
        }

        getMyItems();
    }, [user, myItems]);

    return (
        <div className='bg-slate-700'>
            <h2 className='text-center text-4xl font-bold text-white py-10'>My Items</h2>
            <h1 className="text-2xl pt-6 pb-6 text-center bg-gray-100">All items</h1>
            <div className='bg-gray-100'>
                <div className='w-full md:w-3/4 2xl:w-1/2 mx-auto'>
                    <div className='flex bg-gray-200 flex-wrap'>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Image</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Model</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Price</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Quantity</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Supplier</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Remove</p>
                    </div>
                </div>
            </div>
            {
                myItems.map(item => <MyTabularItem
                    key={item._id}
                    item={item}
                ></MyTabularItem>)
            }
            <div className='h-10 bg-gray-100'></div>
        </div>
    );
};

export default MyItems;