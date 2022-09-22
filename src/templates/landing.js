import React from 'react'
import Component from "../components"

const Landing = ({ pageContext:{landing,articles,projects}}) => (
    <div className='wrap'>
        <Component.Nav/>
        <Component.SectionHero
          hero={landing.landing_section_text}
        />
        <Component.SectionAbout
          about={landing.about_me_text}
          exp_year={landing.exp_years}
        />
        <Component.SectionProjects
          projects={projects}
        />
        
        <Component.SectionArticle
          articles={articles}
        />
        <Component.Contact/>
    </div>
)

export default Landing;

