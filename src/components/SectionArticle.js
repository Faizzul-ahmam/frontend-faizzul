import React from "react"
import img from '../images/sample.jpg'
import nopost from '../images/blog-no-post.png'


export const SectionArticle = ({articles}) =>{
    return(
        <section id='article'>
            <header>
                <h2>blogs</h2>
            </header>
                {
                    articles.length > 0 ?
                        <article>
                            {
                                articles.map((article) =>{
                                    return(
                                        <div key={article.id}>
                                            <figure>
                                                <img src={article.cover_img?article.cover_img.formats.medium.url:img}></img>
                                            </figure>
                                            <div className='desc'>
                                                <h4>{article.title}</h4>
                                                <p>{article.content}</p>
                                                <a href={"blogs/" + article.blob}>Read more..</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </article>
                    :
                    <div className="align-col-mid"><img src={nopost}/><h1>No posts yet</h1></div>
                }

        </section>
    )
}