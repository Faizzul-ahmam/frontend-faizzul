import React from "react"
import potrait from '../images/potrait.png'
import icons from '../icons'
import Resume from '../files/Resume.pdf'
export const SectionAbout = ({about,exp_year}) =>{

    return(
        <section id='about'>
           <header>
               <h2>about myself</h2>
           </header>
           <article>
                <figure>
                    <img src={potrait}/>
                </figure>
                <div className='info'>
                    <div className='exp'>
                        <div><h4>{exp_year}</h4><h3>years of experience</h3></div>
                        <div><h4>2</h4><h3>projects</h3></div>
                    </div>
                    <p>{about}</p>
                    <div className='social'>
                        <a href='https://www.linkedin.com/in/faizzul' target='_blank'><img src={icons.linkedin}/></a>
                        <a href='https://github.com/Faizzul-ahmam' target='_blank'><img src={icons.github}/></a>
                    </div>
                    <a href={Resume} target='_blank'>
                        <button className='btn'>Download my resume</button>
                    </a>
                </div>
           </article>
        </section>
    )
}