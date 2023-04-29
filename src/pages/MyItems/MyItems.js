import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyTabularItem from './MyTabularItem/MyTabularItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            fetch(`https://accel-moto.onrender.com/my-bikes?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setMyItems(data)
                    setSpinner(false)
                })


            //jwt
            // const email = user.email;
            // const url = `https://accel-moto.onrender.com/my-bikes?email=${email}`;
            // const {data} = await axios.get(url, {
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
            //     }
            // });
            // setMyItems(data);

        }

        getMyItems();
    }, [user, myItems]);

    return (
        <div className='bg-slate-700'>
            <h2 className='text-center text-4xl font-bold text-white pt-12 pb-5'>My Items</h2>
            <h3 className='text-center text-2xl font-semibold text-white pt-5 pb-11'>Added {myItems.length} items</h3>
            <div className='bg-gray-100 pt-10'>
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
                spinner ?
                    <div className='my-10'>
                        <div className="flex justify-center items-center">
                            < div className="animate-spin rounded-full h-16 w-16 lg:h-32 lg:w-32 border-b-2 border-white"></div>
                        </div>
                        <h4 className='text-center text-xl fond-semibold text-white mt-5'>Loading...</h4>
                    </div>
                    :
                    <div className='bg-gray-100 h-screen'>
                        {
                            myItems.map(item => <MyTabularItem
                                key={item._id}
                                item={item}
                            ></MyTabularItem>)
                        }
                    </div>
            }
            <div className='h-10 bg-gray-100'></div>
        </div>
    );
};

export default MyItems;