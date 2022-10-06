import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/components/blog-card.scss'

type blogCardProps = {
    source: string,
    image: string,
    title: string,
    description: string,
    releaseTime: string,
    cardUrl: string
}
const BlogCard = ({
    source,
    image,
    title,
    cardUrl,
    description,
    releaseTime
} : blogCardProps) => {
    return (
        <>
            <a target="_blank"
                href={cardUrl}
                className="card-wrapper">
                <div className="card">
                    <div className="card__type-wrapper">
                        <span className="card__type">
                            {source}</span>
                    </div>
                    <div className="card__image-wrapper"><img src={image}
                            alt="blog-post image"
                            className="card__image"/>
                    </div>
                    <div className="card__title-wrapper">
                        <h1 className="card__title">
                            {title}</h1>
                    </div>
                    <div className="card__truncated-text-wrapper">
                        <p className="card__truncated-text">
                            {description}</p>
                    </div>
                    <div className="card-bottom">
                        <span className="release-time">
                            {releaseTime}</span>
                        <div className="link-arrow-wrapper"></div>
                    </div>

                </div>
            </a>
        </>
    )
}

export default BlogCard
