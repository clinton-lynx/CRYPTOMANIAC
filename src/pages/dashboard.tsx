
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "../assets/styles/pages/homepage.scss";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Table from "../components/Table";
import Preloader from "../components/preloader";
import BlogCard from "../components/BlogCard";
import moment from "moment";

const Dashboard = () => {
  const NEWS_API_KEY: any = process.env.NEWS_API_KEY
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("");
  const [news, setNews] : any = useState([])
    const [slide, setSlide] = useState(false);
  const currentSlide = slide ? "translateX(1000px)" : "translateX(0px)";
  const bodyRide = slide ? "hidden" : "auto";
  
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
      setLoading(false)
    } catch (error: any) {
      console.log(error.response);
    }
  };

   // ON PAGE RENDERING

   useEffect(() => {
    fetchData();
        // setSlide(false);
  }, []);


  const filteredCoins = coins.filter((coin: any) =>
  coin.name.toLowerCase().includes(search.toLowerCase())
);

  const mobileNavSlide = () => {
    setSlide((prev) => !prev);
    const mobileNav = document.querySelector(".mobile-menu") as HTMLElement;
    const wrapper = document.querySelector("body") as HTMLElement;
    mobileNav.style.transform = `${currentSlide}`;
    wrapper.style.overflowY = `${bodyRide}`;

    console.log("slide werey");
    console.log(slide);
  };

  const filteredNews = news.filter((news : any) => news.name.toLowerCase().includes(search.toLowerCase()));

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
      'X-RapidAPI-Key': NEWS_API_KEY,
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };

  useEffect(() => {
      axios.request(options).then(function (response) {
          setNews(response.data.value);
      }).catch(function (error) {
          console.error(error);
      });

  }, [])
    
  return (
    <>
    <Header
          handler={handleChange}
          slideHandler={mobileNavSlide}
      />
      <div className="container-wrapper">
<ul className="mobile-menu" >
        <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/" className="mobile-menu-list-item">
              home
            </NavLink>
          </li>
          <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/dashboard" className="mobile-menu-list-item">
              cryptodashboard
            </NavLink> 
          </li>
          <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/news-listing" className="mobile-menu-list-item">
              cryptonews
            </NavLink>
          </li>
               </ul>
      <main className="main">
      <div className="mobile-ref-wrapper" >
       
         </div>
         {loading ? (
                      <Preloader /> 
                    ): (
      <div className="price__section">
        <div className="price__section-wrapper">
            <div className="assets__table-wrapper">
         
                <table className="assets__table">
                    <colgroup><col style={{width:"32px"}}></col></colgroup>
                    <thead className="assets__table-head">
                        <tr className="assets__table-row">
                            <th className="assets__tableHeading assets--firstHeading">
                                <div className="heading__contentWrapper">
                                    <label className="heading__content">
                                        #
                                    </label>
                                </div>
                            </th>
                            <th className="assets__tableHeading">
                                <div className="heading__contentWrapper">
                                    <label className="heading__content">
                                        Name
                                    </label>
                                </div>
                            </th>
                            <th className="assets__tableHeading">
                                <div className="heading__contentWrapper">
                                    <label className="heading__content">
                                        Price
                                    </label>
                                </div>
                            </th>
                            <th className="assets__tableHeading">
                                <div className="heading__contentWrapper">
                                    <label className="heading__content">
                                        Change
                                    </label>
                                </div>
                            </th>
                           
                                                   </tr>
                    </thead>
                  

                    <tbody className="assets__table-body">
                    {filteredCoins.map((coin: any) => (
                <Table
                coinCap={coin.market_cap_rank} 
                coinId = {coin.id}
                  name={coin.name}
                  logo={coin.image}
                  subtitle={coin.symbol}
                  price={`$${coin.current_price}`}
                  percent={`${coin.market_cap_change_percentage_24h}%`}
                />
              ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
           )}
            <section className="sections-wrapper">
                        <h2 className="card-listing-title">Latest crypto news</h2>
                        <div className="card-listings">
                            {
                            filteredNews.map((news : any) => (
                                <BlogCard cardUrl={
                                        news.url
                                    }
                                    source={
                                        news.provider[0].name
                                    }
                                    title={
                                        news.name
                                    }
                                    image={
                                        news.image ?. thumbnail ?. contentUrl
                                    }
                                    description={
                                        news.description
                                    }
                                    releaseTime={
                                        moment(news.datePublished, "YYYYMMDD").fromNow()
                                    }/>
                            ))
                        } </div>
                    </section>

        </main>

    <Footer/>
    </div>
    
    </>
  )
}

export default Dashboard;