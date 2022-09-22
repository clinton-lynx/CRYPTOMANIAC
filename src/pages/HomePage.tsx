import { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import Header from "../components/Header";
import "../assets/styles/pages/homepage.scss";
import Footer from "../components/footer";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { ScrollBack, ScrollForward } from "../assets/icons/icons";
import BlogCard from "../components/BlogCard";
import millify from "millify";
import moment from "moment";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [trendCoins, setTrendingCoins] = useState([]);
  const [news, setNews]: any = useState([])

  const [search, setSearch] = useState("");
  const [slide, setSlide] = useState(false);
  const currentSlide = slide ? "translateX(1000px)" : "translateX(0px)";
  const bodyRide = slide ? "hidden" : "auto";

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const fetchData = async () => {
    try {
      const response = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
      );
      console.log(response);
      const data = response.data;
      console.log(data);

      setCoins(data);
    } catch (error: any) {
      console.log(error.response);
    }
  };




  const filteredNews = news.filter((news: any) =>
    news.name.toLowerCase().includes(search.toLowerCase())
  );


  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {
      q: 'crypto',
      count: '4',
      freshness: 'Day',
      textFormat: 'Raw',
      safeSearch: 'Off'
    },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '31068d680cmshd80b954efa430c5p1d7b8bjsn34ff62722862',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      // console.log(response.data);
      setNews(response.data.value);
    }).catch(function (error) {
      console.error(error);
    });

  }, [])


  const fetchTrendingData = async () => {
    try {
      const response = await axios(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      setTrendingCoins(response.data.coins);
      console.log(response.data.coins);
    } catch (error) { }
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

  // ON PAGE RENDERING

  useEffect(() => {
    fetchData();
    fetchTrendingData();
    // setSlide(false);
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
            <NavLink to="/dashboard" className="mobile-menu-list-item">
              Cryptodashboard
            </NavLink>
          </li>
          <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/news-listing" className="mobile-menu-list-item">
              cryptonews
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
                    percent={`#${coin.item.market_cap_rank}`}
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
            <div className="coin-listing-wrapper">
              <h1 className="section-title">today's crypto market</h1>
              <div className="coin-listing__toogle">toogle view</div>
            </div>
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
                  coinId={coin.id}
                  name={coin.name}
                  logo={coin.image}
                  subtitle={coin.symbol}
                  price={`$${millify(coin.current_price, {
                    precision: 2
                  })}`}
                  percent={`${millify(coin.market_cap_change_percentage_24h, {
                    precision: 3
                  })}%`}
                />
              ))}
            </div>
          </section>
          <div className="bottom-section">
            <section className="sections-wrapper">
              <h1 className="card-listing-title">Latest crypto news</h1>
              <div className="card-listings">
                {filteredNews.map((news: any) => (
                  <BlogCard
                    cardUrl={news.url}
                    source={news.provider[0].name}
                    title={news.name}
                    image={news.image?.thumbnail?.contentUrl}
                    description={news.description}
                    releaseTime={moment(news.datePublished,"YYYYMMDD").fromNow()} 

                  />
                ))}

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
