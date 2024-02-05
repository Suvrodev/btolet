import React from 'react';
import Rent from '../Rent/Rent/Rent';
import Marque from '../../SharedPage/Marque/Marque';
import Banner from '../../SharedPage/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Marque></Marque>
            <Banner></Banner>
            <Rent></Rent>
        </div>
    );
};

export default Home;