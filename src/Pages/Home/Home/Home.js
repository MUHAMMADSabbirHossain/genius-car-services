import React from 'react';
import "./Home.css";
import Services from "../Services/Services";
import Experts from '../Experts/Experts';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;