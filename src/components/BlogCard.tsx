import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/blog-card.scss'

const BlogCard = () => {
  return (
    <>
    <Link to="/" className="card-wrapper">
        <div className="card">
            <div className="card__type-wrapper">
                <span className="card__type">bbc</span>
            </div>
                <div className="card__image-wrapper"><img src="https://s41256.pcdn.co/wp-content/uploads/2022/08/220705-RemoteWorking_1_Blog-979x514.jpg.webp" alt="blog-post image" className="card__image" />
                </div>
            <div className="card__title-wrapper">
              <h1 className="card__title">bitcoin is dead</h1>
            </div>
            <div className="card__truncated-text-wrapper">
              <p className="card__truncated-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis repellat nulla voluptate tempore nemo assumenda sequi illum nam, .</p>
            </div>
            <div className="card-bottom">
              <span className="release-time">5 hours ago</span>
            <div className="link-arrow-wrapper"></div>
            </div>

        </div>
    </Link>
    </>
  )
}

export default BlogCard
