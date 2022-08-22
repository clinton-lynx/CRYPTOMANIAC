import React from 'react'
import { Hamburger, LightMode } from '../assets/icons/icons';
// import {Link} from 'react-router-dom';
import '../assets/styles/components/header.scss';

const Header = () => {
  return (
 <header className="header">
  <div className="nav-wrapper">
    <div className="nav-left">
      <div className="nav-logo"><h1>cryptomaniac</h1></div>
    <nav>
    <div className="market-details">
      <ul className="market-details-list">
        <li className="market-details-list-item-wrapper"><a href="http://">coins: <span className="coins-figure">20,13245</span></a></li>
        <li className="market-details-list-item-wrapper"><a href="http://">Market Cap: <span className="coins-figure"  >20,13245</span></a></li>
        <li className="market-details-list-item-wrapper"><a href="http://">24 Hour Change: <span className="coins-figure">20,13245</span></a></li>
        <li className="market-details-list-item-wrapper"><a href="http://">Dominance: <span className="coins-figure">20,13245</span></a></li>
      </ul>
    </div>
    </nav>
    </div>
    <div className="nav-right">
    <div className='nav-right__form-wrapper'>
        <form action="" className="form">
            <input type="text" className="input-text" />
            <span className="plus">+</span>
        </form>
    </div>
    <div className="nav-right__btn-wrapper">
    <button className="nav-right__suscribe">suscribe</button>
    </div>
    <div className="nav-right__theme-toogle">
      <LightMode />
    </div>
    <div className="nav-right__menu-wrapper">
      <Hamburger />
    </div>
    </div>
  </div>
 </header>
  )
}

export default Header