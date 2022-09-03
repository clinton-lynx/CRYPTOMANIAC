import React from 'react'
import BlogCard from '../components/BlogCard'
import Header from '../components/BlogHeader'
import Footer from '../components/footer'
import '../assets/styles/pages/news-listing.scss'

const NewsListing = () => {
  return (
    <>
      <Header/>
      <main className="main">
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