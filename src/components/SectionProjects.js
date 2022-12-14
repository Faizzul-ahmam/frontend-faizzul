import React from "react"
import img from '../images/sample.jpg'
import icons from '../icons'

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
                                        <img src={project.image?project.image.formats.large.url:img} alt={project.image.alternativeText?project.image.alternativeText:"default project image"} />
                                        <div className='info'>
                                            <a href={project.url} target="_blank" rel="noopener noreferrer"><h4> {project.title}<img src={icons.link}/></h4></a>
                                            <div className ='detail'>
                                                <div>
                                                    <p>{project.desc}</p>
                                                </div>
                                                <div className='techs'>
                                                    <div>
                                                        {
                                                            project.tech_categories.map((tech,index) =>{ 
                                                                return <span className='tech' key={tech.id}>{index === 0 ? null : <span>&#9679;</span>}{tech.tech_name}</span>
                                                        })}
                                                    </div>
                                                    <div></div>
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