import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {
    DropDown,
    Hamburger,
    LightMode,
    MainLogo,
    MobileSearch,
    Search
} from '../assets/icons/icons';
import {Link, NavLink} from 'react-router-dom';
import '../assets/styles/components/header.scss';

const Header = ({handler, slideHandler, searchSideEffect, blur} : any) => {


    return (
        <header className="header">
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

                                {/* <li className="market-details-list-item-wrapper"><NavLink to="/about">about</NavLink></li> */} </ul>
                        </div>
                    </nav>
                </div>
                <div className="nav-right">
                    <div className='nav-right__form-wrapper'>
                        <form action="" className="form">
                            <input type="text" className="input-text" placeholder='Search for news'
                                onChange={handler}
                                onFocus={searchSideEffect}
                                onBlur={blur}/>
                            <div className="search">
                                <Search/>
                            </div>
                        </form>
                    </div>
                    {/* <div className="nav-right__btn-wrapper">
            <button className="nav-right__suscribe">suscribe</button>
          </div> */}
                    <div className="nav-right__theme-toogle">
                        <LightMode/>
                    </div>
                    <div className="nav-right__search-icon-wrapper">
                        <MobileSearch/>
                    </div>
                    <div className="nav-right__menu-wrapper"
                        onClick={slideHandler}>
                        <Hamburger/>

                    </div>
                </div>
            </div>
            <hr className='horizontal'/>
            <div className="header-filters">

                <span className="categories">Categories: All coins<span className="dropdown"><DropDown/></span>
                </span>
                <hr className='vertical'/>
            </div>
            <hr className='horizontal'/>
            <div className='mobile-nav-right__form-wrapper'>
                <form action="" className="form">
                    <input type="text" className="input-text" placeholder='Search for news '
                        onChange={handler}
                        onFocus={searchSideEffect}/>
                    <div className="search">
                        <Search/>
                    </div>
                </form>
            </div>

        </header>
    )
}

export default Header
