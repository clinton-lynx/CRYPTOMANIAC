import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DropDown, Hamburger, LightMode, MainLogo, MobileSearch, Search } from '../assets/icons/icons';
// import {Link} from 'react-router-dom';
import '../assets/styles/components/header.scss';

const Header = ({handler}: any) => {
 

 
  return (
 <header className="header">
  <div className="nav-wrapper">
    <div className="nav-left">
      <div className="nav-logo"><span className="crptomaniac-logo"><MainLogo /></span><h1 className="nav-logo--title">cryptomaniac</h1></div>
    <nav>
    <div className="market-details">
      <ul className="market-details-list">
        <li className="market-details-list-item-wrapper"><a href="http://">Cryptonews</a></li>
        <li className="market-details-list-item-wrapper"><a href="http://">Currency converter</a></li>
        <li className="market-details-list-item-wrapper"><a href="http://">About</a></li>
    
      </ul>
    </div>
    </nav>
    </div>
    <div className="nav-right">
    <div className='nav-right__form-wrapper'>
        <form action="" className="form">
            <input type="text" className="input-text" placeholder='Search coins' onChange={handler} />
            <div className="search">
      <Search />
    </div>
        </form>
    </div>
    <div className="nav-right__btn-wrapper">
    <button className="nav-right__suscribe">suscribe</button>
    </div>
    <div className="nav-right__theme-toogle">
      <LightMode />
    </div>
     <div className="nav-right__search-icon-wrapper">
      <MobileSearch />
    </div>
    <div className="nav-right__menu-wrapper">
      <Hamburger />
      <ul className="mobile-menu">
        <li className="mobile-menu-list-item-wrapper"><a href="" className="mobile-menu-list-item">cryptonews</a></li>
        <li className="mobile-menu-list-item-wrapper"><a href="" className="mobile-menu-list-item">currency coverter</a></li>
        <li className="mobile-menu-list-item-wrapper"><a href="" className="mobile-menu-list-item">about</a></li>
      </ul>
    </div>
    </div>
  </div>
    <hr className='horizontal' />
    <div className="header-filters">

      <span className="categories">Categories: All coins<span className="dropdown"><DropDown/></span> </span>
      <hr className='vertical'/>
    </div>
    <hr className='horizontal' />
 </header>
  )
}

export default Header