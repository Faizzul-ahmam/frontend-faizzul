import React from 'react'

const Article = ({ pageContext:{article}}) => (
    <main>
        <section>
            <header>
                <h1>{article.title}</h1>
            </header>
            <article>
                <p>{article.content}</p>
            </article>
        </section>
    </main>
)

export default Article;

