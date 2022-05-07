import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleItem = () => {
    const { id } = useParams();
    const stockRef = useRef('');
    const [item, setItem] = useState({});
    const { _id, name, img, description, supplierName, quantity, price } = item;

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item]);

    const handleDelivered = () => {
        let quantity = item.quantity;
        quantity -= 1;
        //console.log(quantity);
        const updateItem = { quantity };
        console.log('updateItem', updateItem);

        fetch(`http://localhost:5000/bikes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateItem),
        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data);
                alert('Delivered');
            })
    }

    const handleStock = (event) => {
        event.preventDefault();
        const newStockedItem = parseInt(stockRef.current.value);
        console.log(newStockedItem);
        let quantity = item.quantity + newStockedItem;
        console.log(quantity);

        const updateItem = { quantity };
        console.log(updateItem);

        fetch(`http://localhost:5000/bikes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateItem),
        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data);
                alert('Stock Added');
            })


    }
    return (
        <div className='bg-slate-500 flex justify-center md:pt-10 lg:h-screen'>
                <div className='pb-10 2xl:pt-20'>
                    <div className='w-3/4 mx-auto pt-10'>
                        <div className='flex items-center justify-center flex-col xl:flex-row gap-14 md:gap-10'>
                            <div>
                                <img className='w-[750px] rounded-sm hover:opacity-75' src={img} alt="" />
                            </div>
                            <div className='bg-gray-200 p-4 relative rounded-sm'>
                                <h1 className='text-2xl font-bold text-rose-600 pb-2'>{name}</h1>
                                <p className='text-gray-700 pb-1'> {item.description} </p>
                                <p className='text-xl text-slate-800 font-medium pb-1'>Price: <span className='text-rose-600 font-semibold '>{price}</span></p>
                                <h2 className='text-slate-800 text-2xl font-bold pb-1 absolute -top-8 md:top-2 right-0 pr-0 md:pr-4'>Quantity: <span className='text-rose-600'>{quantity}</span></h2>
                                <h2 className='text-gray-700 pb-1'>Supplied from {supplierName}</h2>
                                <h2 className='text-gray-700 pb-2'>Sold status: No</h2>
                                <button onClick={handleDelivered} className='w-32 block bg-gray-900 py-2 mb-3 font-medium text-white border-2 border-gray-700 rounded-sm hover:bg-stone-200 hover:text-black'>
                                    Delivered
                                </button>
                                <form onSubmit={handleStock} className='flex flex-col md:flex-row space-x-0 md:space-x-1 space-y-2 md:space-y-0 mb-1'>
                                    <input className='w-72 pl-2 py-2 border-2 rounded-sm border-gray-700' type="text" name="text" ref={stockRef} id="" placeholder='Add quantity to restock the item' />
                                    <button className='w-32 block bg-gray-900 py-2 font-medium text-white border-2 border-gray-700 rounded-sm hover:bg-stone-200 hover:text-black'>Add to stock</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
        </div>
    );
};

export default SingleItem;