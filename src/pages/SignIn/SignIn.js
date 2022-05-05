import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../images/img2.avif';
import './SignIn.css';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const SignIn = () => {
    let errorElement;
    const emailRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate('/home');
    }
    if (loading || sending) {
        return <div className='text-center mt-10'>loading...</div>
    }
    if (error) {

        errorElement = <p className='text-red-600'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    const forgetPassword = async () => {
        const email = emailRef.current.value;
        console.log('email', email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        }
        else {
            toast("Please enter your email");
        }
    }



    return (
        <div className='flex justify-between h-screen my-auto items-center bg-slate-500'>
            <div className='hidden lg:block mx-5 poster '>
                <img src={img} alt="" />
            </div>
            <div className=''>
                <h2 className='text-center text-3xl bg-slate-800 pb-4 pt-2 text-white'>Sign In</h2>
                <div className=" max-w-md mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" ref={emailRef} name='email' type="email" placeholder="email" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******************" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-rose-500 w-full hover:bg-rose-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                <input className='w-full' type="submit" value='Sign In' />
                            </button>
                        </div>
                        <div className='flex justify-between mt-5'>
                            <button onClick={forgetPassword}
                                className="inline-block align-baseline  text-blue-600 hover:text-blue-800" href="#">
                                Forgot Password?
                            </button>
                            <p>Don't have an account?</p>
                            <Link to='/signup' className="inline-block align-baseline font-bold text-red-500 hover:text-red-700">
                                Register?
                            </Link>
                        </div>
                        <SocialLogin></SocialLogin>
                        {errorElement}
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignIn;