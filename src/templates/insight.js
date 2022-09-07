import React from 'react'
import img from '../images/sample.jpg'
import Component from "../components"

const Insight = ({ pageContext:{articles}}) => (
    <div className='wrap'>
        <Component.Nav/>
        <section id='article' className='page'>
            <header>
                <h2>Insight</h2>
            </header>
            <article>
                {
                    articles.map(post =>(
                        <div key={post.id}>
                            <figure>
                                <img src={post.cover_img?post.cover_img:img}></img>
                            </figure>
                            <div className='desc'>
                                <h4>{post.title}</h4>
                                <p>{post.content}</p>
                            </div>
                        </div>
                    ))
                }
            </article>
        </section>
    </div>
)

export default Insight;

