import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TabularItem from './TabularItem/TabularItem';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const handleAddNewItem = () => {
        navigate('/add-new-item');
    }

    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [items]);
    return (
        <div className='bg-slate-700'>
            <h2 className='text-center text-4xl font-bold text-white py-10'>Manage Inventroy</h2>
            <div className='flex justify-center'>
                <button onClick={handleAddNewItem} className='w-56 hover:bg-gray-200 py-2 hover:text-gray-900 border-2 border-gray-700 rounded-sm bg-stone-200 text-black mb-10'>
                    Add New Item
                </button>
            </div>
            <h1 className="text-2xl pt-6 pb-6 text-center bg-gray-100">All items</h1>
            <div className='bg-gray-100'>
                <div className='w-full md:w-3/4 2xl:w-1/2 mx-auto'>
                    <div className='flex bg-gray-200 flex-wrap'>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Image</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Name</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Price</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Quantity</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Supplier</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Delete</p>
                    </div>
                </div>
            </div>
            {
                items.map(item => <TabularItem
                    key={item._id}
                    item={item}
                ></TabularItem>)
            }
            <div className='h-10 bg-gray-100'></div>
        </div>
    );
};

export default ManageItems;