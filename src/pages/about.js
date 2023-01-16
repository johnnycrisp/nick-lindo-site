import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const About = ({data}) => {
  console.log('about' , data)
  const image = data.about.image
  const text = data.about.text
  return (
    <Layout>
    <Seo title="About" />
      <div className="about__image">
      <GatsbyImage alt="nick and seb on a sky background" image={getImage(image)} />
      </div>
      <div className="about__text" dangerouslySetInnerHTML={{__html: text}}></div>    
    </Layout>

  )
}

export default About

export const query = graphql`
query AboutQuery {
  about: datoCmsAbout {
      text
      image {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`