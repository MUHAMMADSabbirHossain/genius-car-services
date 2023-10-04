import React, { useEffect, useState } from 'react';
import "./Services.css";
import repair1 from "../../../images/repair1.jpg"
import Service from '../Home/Service/Service';

/* const services = [
    { id: 1, name: "oil change", price: 100, description: "https://i.ibb.co/2nfJ1ct/muscular-car-service-worker-repairing-vehicle.jpg", img: repair1 },
    { id: 1, name: "oil change", price: 100, description: "https://i.ibb.co/kB9tGFT/erik-mclean-3u-Hl-GFnz-PDU-unsplash-min.png", img: repair1 }
] */

const Services = () => {

    const [serivces, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);




    return (
        <div id='services' className='container'>
            <h1 className='text-primary text-center mt-5'> Our Services </h1>
            <div className='services-container'>
                {
                    serivces.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;