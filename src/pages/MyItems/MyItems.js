import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyTabularItem from './MyTabularItem/MyTabularItem';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyItems = () => {
    const [user] =useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        const getMyItems = async() => {
            // const email = user.email;
            // fetch(`http://localhost:5000/my-bikes?email=${email}`,{
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
            //     }
            // })
            // .then( res=> res.json())
            // .then(data => setMyItems(data))
            const email = user.email;
            const url = `http://localhost:5000/my-bikes?email=${email}`;
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 ||error.response.status === 403){
                    signOut(auth);
                    navigate('/signin')
                }
            }

        }

        getMyItems();
    }, [user]);

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