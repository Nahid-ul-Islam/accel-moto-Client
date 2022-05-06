import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

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
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>   
                    )
                }
            </div>

            
        </div>
    );
};

export default Items;