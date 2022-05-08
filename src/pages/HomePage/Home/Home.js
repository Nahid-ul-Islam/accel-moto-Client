import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ExtraSectionOne from '../ExtraSectionOne/ExtraSectionOne';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div className='bg-slate-800'>  
            <Banner></Banner>
            <Items></Items>
            <ExtraSectionOne></ExtraSectionOne>


            <Footer></Footer>
        </div>
    );
};

export default Home;    