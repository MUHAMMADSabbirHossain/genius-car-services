import React from 'react';
import "./Service.css";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();
    const nevigateToServiceDetail = id => {
        // console.log(id);
        navigate(`/service/${id}`);
    };

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => nevigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;