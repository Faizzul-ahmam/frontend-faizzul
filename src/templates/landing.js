import React from 'react'
import Component from "../components"
import { Helmet } from 'react-helmet';

const Landing = ({ pageContext:{landing,articles,projects}}) => (
    <div className='wrap'>
      <Helmet htmlAttributes={{ lang: 'en' }}
        title="Homepage">
          <meta name="title" content="Faizzul Ahmam | Software Engineer | Self-taught Front-end developer" />
          <meta name="description" content="Hello, I love web design and front end development. I also do web design and using React to build Let's work together!" />
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

