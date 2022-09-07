import React from "react"
import img from '../images/sample.jpg'
import stripe from '../images/stripe.svg'

export const SectionArticle = ({articles}) =>{
    return(
        <section id='article'>
            <header>
                <h2>insight area</h2>
            </header>
            <article>
                {
                    articles.length > 0 ?  
                        articles.map((article) =>{ 
                            return(
                                <div key={article.id}>
                                    <figure>
                                        <img src={article.cover_img?article.cover_img:img}></img>
                                    </figure>
                                    <div className='desc'>
                                        <h4>{article.title}</h4>
                                        <p>{article.content}</p>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <h3>No article for now</h3>
                }

            </article>
        </section>
    )
}