import React from 'react'
import Component from "../components"
import { Helmet } from 'react-helmet';

const Landing = ({ pageContext:{landing,articles,projects}}) => (
    <div className='wrap'>
      <Helmet htmlAttributes={{ lang: 'en' }}
        title="Faizzul | Software Engineer | Self taught Front end developer">
          <meta name="title" content="Faizzul | Software Engineer | Self taught Front end developer" />
          <meta name="description" content="Hi, Faizzul here! I am a software engineer and self taught front end developer with 3 years of experience. Let's work together!" />
          <meta name="keywords" content="Faizzul, web design, self taught front end developer, software engineer, front end developer portfolio"/>
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

