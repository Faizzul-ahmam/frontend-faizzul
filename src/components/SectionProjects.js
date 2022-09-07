import React from "react"
import img from '../images/sample.jpg'
import icons from '../icons'

const data = ['Vue','React','SCSS']
export const SectionProjects = ({projects}) =>{

    return(
        <section id='project'>
           <header>
               <h2>featured works</h2>
           </header>
           <article>
               {
                    projects.length > 0 ?
                        projects.map((project) =>{ 
                                return(
                                    <div className='project' key={project.id}>
                                        <img src={project.image?project.image.formats.large.url:img}></img>
                                        <div className='info'>
                                            <h4>{project.title}</h4>
                                            <div className ='detail'>
                                                <div>
                                                    <p>{project.desc}</p>
                                                </div>
                                                {/* <img src={icons.github}/> */}
                                                <div className='techs'>
                                                    {
                                                        project.tech_categories.map((tech,index) =>{ 
                                                            return <span className='tech' key={tech.id}>{index === 0 ? null : <span>&#9679;</span>}{tech.tech_name}</span>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        :<h3>No Project for now</h3>
               }
           </article>
        </section>
    )
}