import React, { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import Header from "../components/Header";
import SearchMobile from "../components/SearchMobile";
import "../assets/styles/pages/homepage.scss";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { ScrollBack, ScrollForward } from "../assets/icons/icons";
// import { scrollForward } from "../assets/icons/icons";
// import { scrollBack } from "../assets/icons/icons";
const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [trendCoins, setTrendingCoins] =useState([]);
  const [search, setSearch] = useState("");
// console.log(search);

   const handleChange = (e: any) => {
    setSearch(e.target.value)
  } 
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

  const fetchTrendingData = async () =>{
    try {
      const response = await axios('https://api.coingecko.com/api/v3/search/trending')
      setTrendingCoins(response.data.coins);
      console.log(response.data.coins);
      
    } catch (error) {
      
    }
  }

  const scrollBack = () =>{
    const carousel =  document.querySelector('.crypto-card-wrapper')!
    carousel.scrollLeft = carousel.scrollLeft - 300;
    console.log('clicked back');
    
  }
  const scrollForward = () =>{
    const carousel =  document.querySelector('.crypto-card-wrapper')!
    carousel.scrollLeft = carousel.scrollLeft + 300;
    console.log('clicked foreward');
  }
  useEffect(() => {
    fetchData();
    fetchTrendingData();
  }, []);
  const filteredCoins = coins.filter((coin : any) => 
      coin.name.toLowerCase().includes(search.toLowerCase())
  )
  console.log(filteredCoins);
  console.log(coins);
  console.log(search);
  
  
  
  // const filteredCoins = coins.filter(coin =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // )
  // const fetchData = async () => {
  //   try{
  //     const response = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
  //     console.log(response);

  //     const data = response.data;
  //     console.log(data);

  //   }catch (error:any){
  //     // console.log(error.response);
  //     }
  // };
  // useEffect(()=> {
  //   fetchData()
  // },[]);
  // const filteredCoins= data;
  return (
    <>
      <div className="">
        <Header handler={handleChange} />
      </div>
      <main className="main">
        <div className="sections-wrapper">
          <section className="trends">
            <h1 className="section-title">top trends</h1>
            <div className="crypto-card-carousel">
            <div className="crypto-card-wrapper">
              {trendCoins.map((coin  : any )=>(
                <CryptoCard 
                name={coin.item?.name}
                logo={coin.item.large}
                subtitle={coin.item.symbol}
                price={`$${coin.item.price_btc.toFixed(2)}`}
                percent={`${coin.item.market_cap_change_rank}%`}
                />
              ))}
            
              {/* {/* <CryptoCard />
              <CryptoCard />
              <CryptoCard />
              <CryptoCard />
              <CryptoCard />
              <CryptoCard /> */}
          
            </div>
            <div className="scrolls-wrapper">
              <span className="scroll-btn" onClick={scrollBack}><ScrollBack /></span>
              <span className="scroll-btn" onClick={scrollForward}><ScrollForward /></span>
            </div>
            </div>
          </section>

          <section className="trends">
            <h1 className="section-title">today`s crypto market</h1>
            <nav>
              <div className="guide__nav-wrapper">
                <ul className="guide__nav-list">
                  <li className="guide__nav-list-item">
                    <Link
                      className="guide__nav-list-item-link active"
                      to="/lklek"
                    >
                      Defi
                    </Link>
                  </li>
                  <li className="guide__nav-list-item">
                    <Link className="guide__nav-list-item-link" to="/">
                      NFTS
                    </Link>
                  </li>
                  <li className="guide__nav-list-item">
                    <Link className="guide__nav-list-item-link" to="/jjjjj">
                      Coins
                    </Link>
                  </li>
                  <li className="guide__nav-list-item">
                    <Link className="guide__nav-list-item-link" to="/jjjj">
                      most viewed
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="guide__nav-line"></div>
            <div className="crypto-card-wrapper--today">
              {/* {filteredCoins.map((prev):any =>{
            {/* <CryptoCard name={prev?.name}
          price={prev.price}
          subtitle={prev.subtitle}
          logo={prev.image}
          percent={'12%'}
           />
          */}
              {filteredCoins.map((coin: any) => (
                <CryptoCard
                  name={coin.name}
                  logo={coin.image}
                  subtitle={coin.symbol}
                  price={`$${coin.current_price}`}
                  percent={`${coin.market_cap_change_percentage_24h}%`}
                />
              ))}

              {/* <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} />
           <CryptoCard name={'bitcoin'} subtitle={'bitcoin'} price={'$29903'} percent={'342%'} /> */}
              {/* <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard /> 
           <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard /> 
           <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard /> 
           <CryptoCard />
          <CryptoCard />  */}
            </div>
          </section>
          <div className="bottom-section">
            <section className="currency-converter">
              <h1 className="section-currency">currency converter</h1>
              <form action="" className="converter-form">
                <div className="first-currency">
                  <label htmlFor="input1">amount</label>
                  <input className="input" type="text" name="input1" required />
                </div>
                <div className="arrow-sign-wrapper">
                  <img
                    src="https://crypto.com/price/icons/swap-vertical.svg"
                    alt="arrow sign"
                  />
                </div>
                <div className="second-currency">
                  <label htmlFor="input2">currency</label>
                  <input className="input" type="text" name="input2" required />
                </div>
              </form>
              <div className="result-wrapper">
                <p className="result-currency">1= 0.03usd</p>
              </div>
            </section>
            <section className="news-feed">
              <h1 className="section-currency">Cryptomaniac NewsFeed</h1>
              <ul className="news-feed-list">
                <li className="news-feed-wrapper">
                  <Link to="/">ljfkjflsfsljf</Link>
                </li>
                <li className="news-feed-wrapper">
                  <Link to="/">jflsfjlsfjslf</Link>
                </li>
                <li className="news-feed-wrapper">
                  <Link to="/">k;sk;sfk</Link>
                </li>
                <li className="news-feed-wrapper">
                  <Link to="/">jflsfjlsfjlsfj</Link>
                </li>
                <li className="news-feed-wrapper">
                  <Link to="/">lsjdldfjouoeuowuols</Link>
                </li>
                <li className="news-feed-wrapper">
                  <Link to="/">lsjdldfjouoeuowuols</Link>
                </li>
                <li className="news-feed-wrapper">
                  <Link to="/">lsjdldfjouoeuowuols</Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      {/* <SearchMobile /> */}
    </>
  );
};

export default HomePage;

// function asvnc() {
//   throw new Error('Function not implemented.')
// }
// function fetchData() {
//   throw new Error('Function not implemented.')
// }
