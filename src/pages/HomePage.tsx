import React, { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import Header from "../components/Header";
import "../assets/styles/pages/homepage.scss";
import Footer from "../components/footer";
import { Link, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { ScrollBack, ScrollForward } from "../assets/icons/icons";
import BlogCard from "../components/BlogCard";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [trendCoins, setTrendingCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [slide, setSlide] = useState(false);
  const currentSlide = slide ? "translateX(433px)" : "translateX(0px)";
  const bodyRide = slide ? "auto" : "hidden";

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const fetchData = async () => {
    try {
      const response = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      console.log(response);
      const data = response.data;
      console.log(data);

      setCoins(data);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  const fetchTrendingData = async () => {
    try {
      const response = await axios(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      setTrendingCoins(response.data.coins);
      console.log(response.data.coins);
    } catch (error) {}
  };

  const scrollBack = () => {
    const carousel = document.querySelector(".crypto-card-wrapper")!;
    carousel.scrollLeft = carousel.scrollLeft - 300;
    console.log("clicked back");
  };
  const scrollForward = () => {
    const carousel = document.querySelector(".crypto-card-wrapper")!;
    carousel.scrollLeft = carousel.scrollLeft + 300;
    console.log("clicked foreward");
  };
  useEffect(() => {
    fetchData();
    fetchTrendingData();
  }, []);
  const filteredCoins = coins.filter((coin: any) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredCoins);
  console.log(coins);
  console.log(search);

  const mobileNavSlide = () => {
    setSlide((prev) => !prev);
    const mobileNav = document.querySelector(".mobile-menu") as HTMLElement;
    const wrapper = document.querySelector("body") as HTMLElement;
    mobileNav.style.transform = `${currentSlide}`;
    wrapper.style.overflowY = `${bodyRide}`;

    console.log("slide werey");
    console.log(slide);
  };

  // TRENDS SIDE EFFECT WHEN SEARCHING
  const searchSideEffect = () => {
    const trendSection = document.querySelector(".trends") as HTMLElement;
    trendSection.style.display = "none";
    trendSection.style.marginTop = "0px";
    console.log("now on focus");
  };

  const searchSecondSideEffect = () => {
    const trendSection = document.querySelector(".trends") as HTMLElement;
    trendSection.style.display = "block";
    trendSection.style.marginTop = "3rem";
    console.log("now on blur");
  };

  return (
    <>
      <div className="header-wrapper">
         
        <Header
          handler={handleChange}
          slideHandler={mobileNavSlide}
          searchSideEffect={searchSideEffect}
          blur={searchSecondSideEffect}
        />
      </div>
      <main className="main">
        <ul className="mobile-menu">
        <li className="mobile-menu-list-item-wrapper">
            <NavLink to="" className="mobile-menu-list-item">
              home
            </NavLink>
          </li>
          <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/news-listing" className="mobile-menu-list-item">
              cryptonews
            </NavLink>
          </li>
          <li className="mobile-menu-list-item-wrapper">
            <NavLink  to="/news-listing" className="mobile-menu-list-item">
              currency coverter
            </NavLink>
          </li>
          <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/article" className="mobile-menu-list-item">
              about
            </NavLink>
          </li>
        </ul>
        <div className="sections-wrapper">
          <section className="trends">
            <h1 className="section-title">top trends</h1>
            <div className="crypto-card-carousel">
              <div className="crypto-card-wrapper">
                {trendCoins.map((coin: any) => (
                  <CryptoCard
                  coinId={coin.item.id}
                    name={coin.item?.name}
                    logo={coin.item.large}
                    subtitle={coin.item.symbol}
                    price={`$${coin.item.price_btc.toFixed(2)}`}
                    percent={`${coin.item.market_cap_change_rank}%`}
                  />
                ))}
              </div>
              <div className="scrolls-wrapper">
                <span className="scroll-btn" onClick={scrollBack}>
                  <ScrollBack />
                </span>
                <span className="scroll-btn" onClick={scrollForward}>
                  <ScrollForward />
                </span>
              </div>
            </div>
          </section>

          <section className="trends">
            <h1 className="section-title">today`s crypto market</h1>
            <nav>
              <div className="guide__nav-wrapper">
                <ul className="guide__nav-list">
                  <li className="guide__nav-list-item">
                    <NavLink className="guide__nav-list-item-link" to="/">
                      All Coins
                    </NavLink>
                  </li>
                  <li className="guide__nav-list-item">
                    <NavLink className="guide__nav-list-item-link" to="NFTs">
                      NFTs
                    </NavLink>
                  </li>
                  <li className="guide__nav-list-item">
                    <NavLink className="guide__nav-list-item-link" to="trends">
                      Trends
                    </NavLink>
                  </li>
                  <li className="guide__nav-list-item">
                    <NavLink
                      className="guide__nav-list-item-link"
                      to="recently-added"
                    >
                      Recently Added
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="guide__nav-line"></div>
            <Outlet />
            <div className="crypto-card-wrapper--today">
              {filteredCoins.map((coin: any) => (
                <CryptoCard
                  name={coin.name}
                  logo={coin.image}
                  subtitle={coin.symbol}
                  price={`$${coin.current_price}`}
                  percent={`${coin.market_cap_change_percentage_24h}%`}
                />
              ))}
            </div>
          </section>
          <div className="bottom-section">
          <section className="sections-wrapper"> 
      <h3  className="card-listing-title">Latest crypto news</h3>
<div className="card-listings">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
     
    
      </div>
      </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
