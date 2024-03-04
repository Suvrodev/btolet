import React from 'react';
import Rent from '../Rent/Rent/Rent';
import Marque from '../../SharedPage/Marque/Marque';
import Banner from '../../SharedPage/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Marque></Marque>
            <div className='h-[360px] flex gap-2 items-center justify-start '>
                <div className='w-[60%] h-[360px]'>
                    <Banner></Banner>
                </div>
                 <div className='w-[40%]    '>
                   <div className='bg-green-500 h-[360px] rounded-lg  flex items-center justify-center '>
                       <h1> Google Ads</h1>
                   </div>
                 </div>
            </div>
            <Rent></Rent>
        </div>
    );
};

export default Home;