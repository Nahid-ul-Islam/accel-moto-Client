import React from 'react';
import useLoadItems from '../../../hooks/useLoadItems';

const MyTabularItem = ({ item }) => {
    const { _id, name, img, price, quantity, supplierName } = item;
    const [items, setItems] = useLoadItems();

    const handleDeleteMyItem = (id) => {
        const del = window.confirm('Are you sure you want to delete this Item?');
        if (del) {
            fetch(`https://sleepy-mountain-69745.herokuapp.com/bikes/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }

    return (
        <div>
            <div className="bg-gray-100">
                <div className="">
                    <div className='w-full md:w-3/4 2xl:w-1/2 mx-auto'>
                        <div className='flex bg-white'>
                            <div className='w-2/12 border-[1px] md:border-2 border-gray-100'>
                                <img className='w-20 mx-auto' src={img} alt="" />
                            </div>
                            <div className='w-2/12 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>{name} </p>
                            </div>
                            <div className='w-2/12 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>${price} </p>
                            </div>
                            <div className='w-2/12 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>{quantity} </p>
                            </div>
                            <div className='w-2/12 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>{supplierName} </p>
                            </div>
                            <div className='w-2/12 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <button type="button" data-modal-toggle="popup-modal" onClick={() => handleDeleteMyItem(_id)} className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-rose-800 bg-rose-400 rounded-lg bg-opacity-50 hover:bg-rose-500'>Delete</button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyTabularItem;