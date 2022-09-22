import { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
import Header from '../components/BlogHeader'
import Footer from '../components/footer'
import '../assets/styles/pages/news-listing.scss'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

const NewsListing = () => {
  const [slide, setSlide] = useState(false)
  const [search, setSearch] = useState("");
  const currentSlide = slide ? "translateX(433px)" : "translateX(0px)";
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
const [news, setNews] : any = useState([])

const handleChange = (e: any) => {
  setSearch(e.target.value);
};
 

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/search',
  params: {
    q: 'crypto',
    count: '100',
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

useEffect(()=>{
  axios.request(options).then(function (response) {
    // console.log(response.data);
     setNews(response.data.value);
  }).catch(function (error) {
    console.error(error);
  });

}, [])

console.log(news);


const filteredNews =  news.filter((news: any) =>
    news.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
     <Header
        handler={handleChange}
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
            <NavLink to="/dashboard" className="mobile-menu-list-item">
              cryptodashboard
            </NavLink> 
          </li>
          <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/news-listing" className="mobile-menu-list-item">
              cryptonews
            </NavLink>
          </li>
          {/* <li className="mobile-menu-list-item-wrapper">
            <NavLink to="/about" className="mobile-menu-list-item">
              about       
            </NavLink>
          </li> */}
        </ul>
         </div>
        <section className="sections-wrapper"> 
      <h3  className="card-listing-title">browse our blog</h3>
      <div className="card-listings">
          {filteredNews.map((news :any)  =>(
            <BlogCard 
               cardUrl={news.url}
               source={news.provider[0].name} 
               title={news.name} 
               image={news.image?.thumbnail?.contentUrl} 
               description={news.description} 
               releaseTime={moment(news.datePublished,"YYYYMMDD").fromNow()} 
               /> 
          ))}

      {/* <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard /> */}
    
      </div>
      </section>
      </main>
      <Footer />
    </>
  )
}

export default NewsListing