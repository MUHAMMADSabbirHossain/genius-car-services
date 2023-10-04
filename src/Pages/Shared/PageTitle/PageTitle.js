import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title, children }) => {
    return (
        <div>
            <Helmet><title>{title} - Genius car services</title></Helmet>
            {
                children
            }
        </div>

    );
};

export default PageTitle;