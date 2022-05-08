import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BecomeSupplier from '../BecomeSupplier/BecomeSupplier';


import Items from '../Items/Items';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div className='bg-slate-800'>  
            <Banner></Banner>
            <Items></Items>
            <LatestNews></LatestNews>
            <BecomeSupplier></BecomeSupplier>


            <Footer></Footer>
        </div>
    );
};

export default Home;    