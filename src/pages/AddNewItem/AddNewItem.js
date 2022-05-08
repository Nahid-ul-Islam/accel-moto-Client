import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Footer from '../../Shared/Footer/Footer';

const AddNewItem = () => {

    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.image.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplier.value;
        const newItem = { name, email, img, description, price, quantity, supplierName };
        console.log(newItem);
        fetch('https://sleepy-mountain-69745.herokuapp.com/bikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                alert('Item added Successfully');
                event.target.reset();
            })
    }
    return (
        <div>
            <div>
                <h2 className='bg-slate-700 text-center text-4xl font-bold text-white py-10'>Add New Item</h2>
                <div className='bg-gray-100'>





                    <div className='bg-gray-100 flex justify-center pt-10'>
                        <form onSubmit={handleAddItem} className="w-full max-w-lg">
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full md:w-1/2 px-3  md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Model Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" id="name" type="text" placeholder="Softail Standard" required />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                        Email
                                    </label>
                                    <input className=" border-gray-500 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="email" value={user.email} readOnly required />
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                        Description
                                    </label>
                                    <textarea className=" border-gray-500 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" name="description" type="text" placeholder="Description about the Item" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                        Image URL
                                    </label>
                                    <input className="border-gray-500 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="image" name="image" type="text" placeholder="https://i.ibb.co/Hp2HXcX/02.webp" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-2">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                        Price
                                    </label>
                                    <input className="border-gray-500 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" name="price" type="text" placeholder="12,350" required />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                        Supplier
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="supplier" name="supplier" type="text" placeholder="Harley" required />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                        Quantity
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 border-gray-500 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantity" name="quantity" type="text" placeholder="116" required />
                                </div>
                            </div>
                            <div className='flex justify-center mt-7'>
                                <input className='w-32 block bg-gray-900 py-2 mb-3 font-medium text-white border-2 border-gray-700 rounded-sm hover:bg-stone-200 hover:text-black'
                                    type="submit" value="Add Item" />
                            </div>
                        </form>
                        
                    </div>



                    <Footer></Footer>
                </div>
            </div>
            
        </div>
    );
};

export default AddNewItem;