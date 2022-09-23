import React from 'react'
import Component from "../components"
import { Helmet } from 'react-helmet';

const Article = ({ pageContext:{article}}) => (
    <div className='wrap'>
        <Helmet
            title={article.title}
        />
        <Component.Nav isSecondary={false}/>
        <title>{article.title}</title>
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

