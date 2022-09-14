import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import Header from '../components/ArticleHeader'
import Footer from '../components/footer'
import '../assets/styles/pages/article.scss'

const Article = () => {
  return (
    <>
    <Header />
    <main className="main">
    <div className="sections-wrapper">
      <h1 className="article-title">Bitcoin is dead</h1>
      <div className="article-image-wrapper"><img src="https://s41256.pcdn.co/wp-content/uploads/2022/08/220705-RemoteWorking_1_Blog-979x514.jpg.webp" alt="" className="article-image" /></div>
    <div className="article-wrapper">
      <p className="article">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus accusantium dignissimos magni natus sint necessitatibus quae corporis, deserunt et doloribus architecto quia molestias explicabo quas omnis quibusdam minima neque repellat.
      Et alias excepturi provident officia ut voluptatem quidem iure, aspernatur soluta quasi harum deserunt veritatis ipsam cumque porro. Ullam sunt quis nulla fugit? Nobis quas tempore dolorum error optio sequi?
      Ipsum pariatur hic iure accusantium, cumque commodi quas ullam obcaecati nobis magni ipsa nemo perspiciatis, mollitia atque vitae quia. Ea rerum a vero accusantium, id perspiciatis totam cumque vitae voluptatem!
      Eligendi minima molestiae expedita esse! Laborum sapiente voluptatibus autem aspernatur. Temporibus eum nisi voluptatibus, laboriosam doloribus recusandae, alias sapiente reiciendis illo ipsa ratione natus omnis aliquid laudantium molestias repellendus dignissimos.
      Blanditiis, sit numquam? Ad saepe quibusdam laudantium nobis, doloribus, voluptatem error at mollitia nostrum laborum praesentium modi ipsam temporibus! Harum ratione fuga illum error repudiandae libero ullam deserunt ducimus voluptatum.
      Voluptate optio iure earum ullam unde culpa non dolor quis impedit cupiditate. Veritatis placeat unde, hic doloribus voluptas velit nesciunt porro facilis tempora necessitatibus modi ullam delectus, veniam omnis tenetur?
      Ut officiis ab, quo dolor reiciendis cum excepturi perspiciatis omnis fugit accusamus repudiandae porro, vel obcaecati doloribus eveniet culpa. Veniam nesciunt error architecto explicabo amet maxime officia itaque autem debitis!
      Cum adipisci, veniam perspiciatis nisi suscipit est nemo maiores ut natus velit esse assumenda accusamus unde ipsam id. Enim quos temporibus quisquam rem dolores sed repellat odio minus adipisci libero?
      
      </p>
    </div>

    <section className="more-article">
      <div className="more-article-heading">

      <h2 className="section-title">
        more articles like this one
      </h2>
      <span ><Link to='/'  className="all-articles">check all articles</Link></span>
      </div>
      <div className="card-listings">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
     
    
      </div>
    </section>
    </div>
    </main>
    <Footer />
    </>
  )
}

export default Article