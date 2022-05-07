import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useLoadItems from '../../../hooks/useLoadItems';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useLoadItems();
    
    return (
        <div>
            <h2 className='bg-rose-900 text-white text-center text-2xl md:text-4xl font-bold py-10'>Inventory</h2>

            <div className=' w-9/12 md:grid lg:grid-cols-3 md:grid-cols-2
            gap-4 mx-auto mt-16 md:mt-24 place-items-center'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>   
                    )
                }
            </div>
            
            <div className='text-center mb-16'>
                <Link to='/manage-item'>
                    <button className='bg-rose-800 hover:bg-rose-600 text-white text-center md:text-xl px-5 font-bold py-4 rounded'>
                        Manage Inventory
                    </button>
                </Link>
            </div>
            
        </div>
    );
};

export default Items;