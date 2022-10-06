import React from 'react';
import '../assets/styles/components/preloader.scss';

const Preloader = () => {
    return (
        <>
            <div className="loading-dots">
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <h3>Loading ...</h3>
            </div>
        </>
    )
}

export default Preloader
