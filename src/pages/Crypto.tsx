import React, { useEffect, useState } from "react";
import axios from 'axios';
import Header from "../components/ArticleHeader";
import Chart from "../components/chart";
import "../assets/styles/pages/coin.scss";
import Footer from "../components/footer";
import { Link, NavLink, useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import millify from "millify";
import HTMLReactParser from 'html-react-parser';
import { Line } from 'react-chartjs-2';
import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import moment from "moment";
// import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);





const Crypto = () => {
  
  const [coinDetails, setCoinDetails]: any = useState([]);
  const [chartData, setChartData]: any = useState([]);
  const [news, setNews]: any = useState([])
  const [search, setSearch] = useState("");


//NAV CODE 

const [slide, setSlide] = useState(false);
const currentSlide = slide ? "translateX(1000px)" : "translateX(0px)";
const bodyRide = slide ? "hidden" : "auto";

const mobileNavSlide = () => {
  setSlide((prev) => !prev);
  const mobileNav = document.querySelector(".mobile-menu") as HTMLElement;
  const wrapper = document.querySelector("body") as HTMLElement;
  mobileNav.style.transform = `${currentSlide}`;
  wrapper.style.overflowY = `${bodyRide}`;

  console.log("slide werey");
  console.log(slide);
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

const optionsChart = {
  Legend: {
    labels:{
    fontColor: '#fff'

    }
  },
  responsive : true
}


  const data = {
    labels: chartData.map((value:any) => moment(value.x).format('MMM DD')),
      datasets: [{
      label: 'price to usd',
      data:  chartData.map((value:any) => value.y ),
      fill: true,
      backgroundColor: 'rgba(17, 153, 250, 0.05)',
      // borderColor: 'rgba(17, 153, 250, 0.05)'
      borderColor: 'rgba(4,217,255,1.00) '
    }
    ],

  }

  const params = useParams();
  const coin = params.coin;


  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}`
      );
      console.log(response);
      const data = response.data;
      console.log(data);
      setCoinDetails(data);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  const fetchMArketChart = async () => {
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`
      );
      console.log(response);
      const data = response.data;
      console.log(data);
      const dataObj = data.prices?.map((value: any) => ({
        x: value[0],
        y: value[1].toFixed(2)
      }))
      console.log(dataObj);

      setChartData(dataObj);
      // setChartData('hh')
    } catch (error: any) {
      console.log(error.response);
    }
  };



  useEffect(() => {
    fetchData();
    fetchMArketChart();


  }, [])

  console.log(coinDetails);
  console.log(chartData);
  const coinDetailsDev = coinDetails


  return (
    <>
        <Header
          slideHandler={mobileNavSlide}
        />
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
        <div className="coin-wrapper">
          <div className="coin-chart-section">
            <div className="coin-name-wrapper">
              <div className="coin-logo-wrapper">
                <img src={coinDetailsDev.image?.small} alt="coin-logo" />
              </div>
              <h3 className="coin-name">{coinDetails.name}</h3>
              <span className="coin-symbol">{coinDetails.symbol}</span>
            </div>

            <div className="coin-chart-wrapper">
              <div className="coin-price-wrapper">
                <h2 className="coin-price">${millify(coinDetailsDev.market_data?.current_price.usd, {
                  precision: 2
                })}</h2>
                <span className="coin-price-per">{millify(coinDetailsDev.market_data?.price_change_percentage_24h, {
                  precision: 2
                })}% <span className="time">[24H]</span> </span>
                <div className="chart-wrapper">
                  <span className="chart-title">{coinDetails.name} price chart</span>
                </div>
                <div className="coin-chart-image">
                      <Line data={data} options={optionsChart} />
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coin__bottom-cointainer">

          <section className="about-coin-container">
            <h2 className="section-title">about {coinDetails.name}</h2>
            <h3 className="coin__title">what is {coinDetails.name}</h3>
            <p className="coin__description">{parse(`${coinDetails.description?.en}`)}</p>
          </section>
          <div className="coin-info-wrapper">
            <section className="coin__info">
              <h2 className="section-title"> {coinDetails.name} price stats</h2>
              <h5 className="section__description"> {coinDetails.name} current price</h5>
              <ul className="coin__info-list">
                <li className="coin__info-list-item"><span className="coin__info-list-item-left"> price </span><span className="coin__info-list-item-right">${coinDetails.market_data?.current_price.usd}</span></li>
                <li className="coin__info-list-item"><span className="coin__info-list-item-left">24H Low / 24H High</span><span className="coin__info-list-item-right">${millify(coinDetails.market_data?.low_24h?.usd)} / ${millify(coinDetails.market_data?.high_24h?.usd)}</span></li>
                <li className="coin__info-list-item"><span className="coin__info-list-item-left">price change % 24H</span><span className="coin__info-list-item-right">{millify(coinDetails.market_data?.price_change_percentage_24h, {
                  precision: 3
                })}%  </span></li>
                <li className="coin__info-list-item"><span className="coin__info-list-item-left">Trading volume</span><span className="coin__info-list-item-right">${millify(coinDetails.market_data?.total_volume?.usd, {
                  precision: 2
                })}</span></li>
                <li className="coin__info-list-item"><span className="coin__info-list-item-left">market cap rank</span><span className="coin__info-list-item-right">#{coinDetails.market_data?.market_cap_rank}</span></li>
                <li className="coin__info-list-item"><span className="coin__info-list-item-left">market cap</span><span className="coin__info-list-item-right"></span>${millify(coinDetails.market_data?.market_cap?.usd)}</li>

              </ul>
            </section>
            <section className="coin__info">
              <h2 className="section-title"> {coinDetails.name} info</h2>
              <h5 className="section__description"> {coinDetails.name} references</h5>
              <ul className="coin__info-list">
                <li className="coin__info-list-item"><span className="coin__info-list-item-left"> website </span><span className="coin__info-list-item-right"><a target="_blank" href={coinDetails.links?.homepage[0]} className="coin__info-list-item-right-crumb">{coinDetails.name}.org</a></span></li>


                <li className="coin__info-list-item"><span className="coin__info-list-item-left">blockchain sites</span><span className="coin__info-list-item-right"><a target="_blank" href={coinDetails.links?.blockchain_site[0]} className="coin__info-list-item-right-crumb">mintscan</a><a target="_blank" href={coinDetails.links?.blockchain_site[2]} className="coin__info-list-item-right-crumb">etherscan</a> </span></li>
                <li className="coin__info-list-item"><span className="coin__info-list-item-left">communities</span><span className="coin__info-list-item-right"><a target="_blank" href={coinDetails.links?.chat_url[0]} className="coin__info-list-item-right-crumb">discord</a><span className="coin__info-list-item-right-crumb">github</span><span className="coin__info-list-item-right-crumb">reddit</span></span></li>
                <li className="coin__info-list-item"><span className="coin__info-list-item-left">source code</span><span className="coin__info-list-item-right"><a target="_blank" href={coinDetails.links?.repos_url?.bitbucket[0]} className="coin__info-list-item-right-crumb">github</a><a target="_blank" href={coinDetails.links?.repos_url?.github[0]} className="coin__info-list-item-right-crumb">github</a></span></li>
                <li className="coin__info-list-item"><span className="coin__info-list-item-left">tags</span><span className="coin__info-list-item-right"><span className="coin__info-list-item-right-crumb">cryptocurrency</span></span></li>
              </ul>
            </section>
          </div>
        </div>

        <section className="sections-wrapper">
          <h2 className="card-listing-title">Latest crypto news</h2>
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
      </main>
      <Footer />
    </>
  );
};

export default Crypto;
