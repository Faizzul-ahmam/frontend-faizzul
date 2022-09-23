import React from 'react'
import Component from "../components"
import { Helmet } from 'react-helmet';

const Landing = ({ pageContext:{landing,articles,projects}}) => (
    <div className='wrap'>
      <Helmet>
        <title>Faizzul.com</title>
      </Helmet>
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

