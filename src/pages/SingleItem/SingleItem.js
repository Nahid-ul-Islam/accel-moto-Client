import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { _id, name, img, description, supplierName, quantity, price } = item;

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item]);

    const handleDelivered = () =>  {
        let quantity = item.quantity;
        quantity-=1;
        //console.log(quantity);
        const updateItem = {quantity};
        console.log('updateItem',updateItem);
        
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
    return (
        <div className='flex justify-center md:mt-10'>
            <div>
                <h2 className='text-center font-bold text-2xl md:mb-4'>Details of "{name}"</h2>
                <div className="p-5 bg-white max-w-lg rounded overflow-hidden shadow-2xl mb-16">
                    <div className='flex justify-center'>
                        <img src={img} alt="" srcSet="" />
                    </div>
                    <h2 className='text-2xl font-medium text-center'>{name}</h2>
                    <p className='text-center font-medium'>Price: {price}</p>
                    <p className='text-center font-medium'>Quantity: {quantity}</p>
                    <p className='text-center font-medium'>Supplier: {supplierName}</p>
                    <p className='mt-3 text-justify'>{description}</p>
                    <div className='text-center'>
                    
                            <button 
                            onClick={handleDelivered}
                            className="bg-rose-800 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded mt-5">Delivered</button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;