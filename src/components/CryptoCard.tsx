import React from 'react'
import {Link} from 'react-router-dom';
import '../assets/styles/components/cryptocard.scss';


const CryptoCard = ({
    name,
    price,
    logo,
    coinId,
    subtitle,
    percent
} : any) => {
    return (
        <>
            <Link to={
                    `/all-coins/${coinId}`
                }
                className="crypto-card">
                <div className="crypto-card__left">
                    <div className="crypto-icon-wrapper">
                        <img src={logo}
                            alt="coin-icon"
                            className="crypto-icon"/>
                    </div>
                    <div className="crypto-name-wrapper">
                        <p className="crypto-name">
                            {name}</p>
                        <span className="crypto-subtitle">
                            {subtitle}</span>
                    </div>
                    <div className="crypto-price-wrapper">
                        <p className="crypto-price">
                            {price} </p>
                    </div>
                </div>
                <div className="crypto-card__right">
                    <div className="crypto-card__chart"></div>
                    <div className="crypto-card__percent">
                        {percent} </div>
                </div>
            </Link>
        </>
    )
}

export default CryptoCard;
