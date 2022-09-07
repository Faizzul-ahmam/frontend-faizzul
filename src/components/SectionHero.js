import React from "react"

export const SectionHero = ({hero}) =>{

    return(
        <section id="hero" className='main-section align-col-mid'>
            <div className='w-80'>
                <h3>muhammad faizzul</h3>
                <h1>{hero}</h1>
                <div className='cta'>
                    <a href='#contact'>Lets talk</a> or <a href='#project'>see my works</a>
                </div>
            </div>
        </section>
    )
}