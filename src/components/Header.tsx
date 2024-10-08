import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {
    DarkMode,
    DropDown,
    Hamburger,
    LightMode,
    MainLogo,
    MobileSearch,
    Search
} from '../assets/icons/icons';
import millify from 'millify';
import {Link, NavLink} from 'react-router-dom';
import '../assets/styles/components/header.scss';
import Preloader from './preloader';
import { useTheme } from '../App';
import ToggleTheme from './ToggleTheme';

const Header = ({handler, slideHandler, searchSideEffect, blur} : any) => {

    const [stats, setStats] : any = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios("https://api.coingecko.com/api/v3/global");
            console.log(response);
            const data = response.data;
            console.log(data);
            setStats(data);
            setLoading(false)
        } catch (error : any) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])
const {theme, toggleTheme} = useTheme();

    return (
        <header className={`header ${theme}`}>
            <div className="nav-wrapper">
                <div className="nav-left">
                    <Link to='/' className="nav-logo">
                        <span className="crptomaniac-logo"><MainLogo/></span>
                        <h1 className="nav-logo--title">cryptomaniac</h1>
                    </Link>
                    <nav>
                        <div className="market-details">
                            <ul className="market-details-list">
                                <li className="market-details-list-item-wrapper">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="market-details-list-item-wrapper">
                                    <NavLink to="/dashboard">
                                        Cryptodashboard
                                    </NavLink>
                                </li>
                                <li className="market-details-list-item-wrapper">
                                    <NavLink to="/news-listing">Cryptonews</NavLink>
                                </li>
                                {/* <li className="market-details-list-item-wrapper"><NavLink to="/article">Currency converter</NavLink></li> */}
                                {/* <li className="market-details-list-item-wrapper"><NavLink to="/about">about</NavLink></li> */} </ul>
                        </div>
                    </nav>
                    <div className="">
                     {/* <ToggleTheme /> */}
                    </div>
                </div>
                <div className="nav-right">
                    <div className='nav-right__form-wrapper'>
                        <form action="" className="form">
                            <input type="text" className="input-text" placeholder='Search coins'
                                onChange={handler}
                                onFocus={searchSideEffect}
                                onBlur={blur}/>
                            <div className="search">
                                <Search/>
                            </div>
                        </form>
                    </div>

                    <button className="nav-right__theme-toggle" onClick={toggleTheme}>
    {theme === "light" ? <DarkMode /> : <LightMode />}
</button>
                    <div className="nav-right__search-icon-wrapper">
                        <MobileSearch/>
                    </div>
                    <div className="nav-right__menu-wrapper"
                        onClick={slideHandler}>
                        <Hamburger/>

                    </div>
                </div>
            </div>
            <hr className='horizontal'/> {
            loading ? (
                <Preloader/>) : (
                <div className="market-details--menu">
                    <ul className="market-details-list--menu">
                        <li className="market-details-list-item-wrapper">coins:
                            <span className="global-stats-value">
                                {
                                millify(stats.data ?. active_cryptocurrencies)
                            }</span>
                        </li>
                        <li className="market-details-list-item-wrapper">market cap:
                            <span className="global-stats-value">${
                                millify(stats.data ?. total_market_cap ?. usd)
                            }</span>
                        </li>
                        <li className="market-details-list-item-wrapper">total volume:
                            <span className="global-stats-value">${
                                millify(stats.data ?. total_volume.usd)
                            }</span>
                        </li>
                        <li className="market-details-list-item-wrapper">24H market cap:
                            <span className="global-stats-value">
                                {
                                millify(stats.data ?. market_cap_percentage ?. btc)
                            }%</span>
                        </li>
                    </ul>
                </div>
            )
        }
            <hr className='horizontal'/>
            <div className="header-filters">

                <span className="categories">Categories: All coins<span className="dropdown"><DropDown/></span>
                </span>
                <hr className='vertical'/>
            </div>
            <hr className='horizontal'/>
            <div className='mobile-nav-right__form-wrapper'>
                <form action="" className="form">
                    <input type="text" className="input-text" placeholder='Search coins'
                        onChange={handler}
                        onFocus={searchSideEffect}
                        onBlur={blur}/>
                    <div className="search">
                        <Search/>
                    </div>
                </form>
            </div>

        </header>
    )
}

export default Header
