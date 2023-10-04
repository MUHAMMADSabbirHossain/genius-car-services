import React from 'react';
import "./Home.css";
import Services from "../Services/Services";
import Experts from '../Experts/Experts';
import Banner from '../Banner/Banner';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;