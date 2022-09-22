import React from 'react'
import img from '../images/sample.jpg'
import Component from "../components"
import nopost from '../images/blog-no-post.png'

const Insight = ({ pageContext:{articles}}) => (
    <div className='wrap'>
        <Component.Nav/>
        <section id='article' className='page'>
            <header>
                <h2>Blogs</h2>
            </header>
                { 
                    articles.length > 0 ? 
                        <article>
                            {
                                articles.map( post =>{
                                    return(
                                        <div key={post.id}>
                                            <figure>
                                                <img src={post.cover_img?post.cover_img.formats.medium.url:img}></img>
                                            </figure>
                                            <div className='desc'>
                                                <h4>{post.title}</h4>
                                                <p>{post.content}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </article>
                        :
                        <div className='align-col-mid'><img src={nopost}/><h1>No posts yet</h1></div>
                }
        </section>
    </div>
)

export default Insight;

