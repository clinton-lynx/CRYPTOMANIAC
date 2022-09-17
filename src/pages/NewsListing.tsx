import React, { useEffect, useRef, useState } from 'react'

import BlogCard from '../components/BlogCard'
import Header from '../components/BlogHeader'
import Footer from '../components/footer'
import '../assets/styles/pages/news-listing.scss'
import { NavLink } from 'react-router-dom'

const NewsListing = () => {
  const [slide, setSlide] = useState(false)
  const currentSlide = slide ? "translateX(433px)" : "translateX(0px)";
  const bodyRide = slide ? "auto" : "hidden";
   const mobileNavSlide = () => {
    setSlide((prev) => !prev);
    const mobileNav = document.querySelector(".mobile-menu") as HTMLElement;
    const wrapper = document.querySelector("body") as HTMLElement;
    mobileNav.style.transform = `${currentSlide}`;
    wrapper.style.overflowY = `${bodyRide}`;

    console.log("slide werey");
    console.log(slide);
  };


  return (
    <>
     <Header
        
          slideHandler={mobileNavSlide}
          
        />
      <main className="main">
         <div className="mobile-ref-wrapper" >
        <ul className="mobile-menu" >
        <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/" className="mobile-menu-list-item">
              home
            </NavLink>
          </li>
          <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/news-listing" className="mobile-menu-list-item">
              cryptonews
            </NavLink>
          </li>

          <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/about" className="mobile-menu-list-item">
              about




          
            </NavLink>
          </li>
        </ul>
         </div>
        <section className="sections-wrapper"> 
      <h3  className="card-listing-title">browse our blog</h3>
<div className="card-listings">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    
      </div>
      </section>
      </main>
      <Footer />
    </>
  )
}

export default NewsListing