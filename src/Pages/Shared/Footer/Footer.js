import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright &copy; {(new Date().getFullYear())}</small></p>
        </footer>
    );
};

export default Footer;