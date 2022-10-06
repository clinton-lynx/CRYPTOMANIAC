import axios from 'axios';
import React, {useEffect, useState} from 'react'
import CryptoCard from './CryptoCard';

const RecentlyAdded = () => {

    const [coins, setCoins] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            console.log(response);
            const data = response.data;
            console.log(data);

            setCoins(data);
        } catch (error : any) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div>RecentlyAdded</div>
            <div className="crypto-card-wrapper--today">


                {
                coins.map((coin : any) => (
                    <CryptoCard name={
                            coin.name
                        }
                        logo={
                            coin.image
                        }
                        subtitle={
                            coin.symbol
                        }
                        price={
                            `$${
                                coin.current_price
                            }`
                        }
                        percent={
                            `${
                                coin.market_cap_change_percentage_24h
                            }%&&&`
                        }/>
                ))
            } </div>

        </>
    )
}

export default RecentlyAdded
