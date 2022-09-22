import React from 'react'
import Component from "../components"

const Article = ({ pageContext:{article}}) => (
    <div className='wrap'>
        <Component.Nav isSecondary={false}/>
        <title>{article.title}</title>
        {/* <div className='blog-img' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0,0.3), rgba(100, 255, 218, 0.7)), url('${article.cover_img.formats.medium.url}')`}} ></div> */}
        <div className='blog-img' style={{backgroundImage:`linear-gradient(#000000, #0000004d, #64ffdab3), url('${article.cover_img.formats.large.url}')`}} ></div>
        <section>
            <header>
                <h1 className='article-title'>{article.title}</h1>
            </header>
            <article>
                <p>{article.content}</p>
            </article>
        </section>
    </div>
)

export default Article;

