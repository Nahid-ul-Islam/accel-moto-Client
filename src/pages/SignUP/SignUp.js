import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    let errorElement;
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        console.log(email, password);
    }
    if (loading) {
        return <div className='my-10'>
        <div className="flex justify-center items-center">
            < div className="animate-spin rounded-full h-16 w-16 lg:h-32 lg:w-32 border-b-2 border-black"></div>
        </div>
        <h4 className='text-center text-xl fond-semibold text-black mt-5'>Loading...</h4>
    </div>
    }

    if (error) {
        errorElement = <p className='text-red-600'>Error: {error?.message}</p>
    }

    if(user) {
        navigate('/home');
    }

    return (
        <div className='pt-32 h-screen bg-gray-100'>
            <div className='flex justify-center'>
            <h2 className='w-[450px] py-4 text-white text-center text-3xl bg-slate-800'>SignUp</h2>
            </div>
            <div className="w-full max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-rose-500 w-full hover:bg-rose-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <input className='w-full' type="submit" value="SignUp" />
                        </button>
                    </div>
                    <div className='text-center mt-5'>
                        <Link to='/signin' className="inline-block align-baseline font-bold text-red-500 hover:text-red-700">
                            Already have an account
                        </Link>
                    </div>
                    {errorElement}
                </form>
            </div>
        </div>
    );
};

export default SignUp;