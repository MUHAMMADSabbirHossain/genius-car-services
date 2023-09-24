import React from 'react';
import sleepy from "../../../images/sleepy.jpg";

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping.</h2>
            <img className='w-100' src={sleepy} alt="" />
        </div>
    );
};

export default NotFound;