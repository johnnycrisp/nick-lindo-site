import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

const Campaign = ({data, pageContext}) => {
    const campaign = data.campaign
    const coverImage = campaign.coverImage
    console.log('campaign', campaign)

  return (
    <Layout>
        <h1>{campaign.title}</h1>
        <div>
            <h3>The brief</h3>
            <div dangerouslySetInnerHTML={{__html: campaign.introText}}></div>
        </div>
        <div>
        <GatsbyImage alt={`Still from ${campaign.title}`} className="campaign__cover-image" image={getImage(coverImage)}/>
        </div>
    </Layout>
    
  )
}

export default Campaign

export const query = graphql`
query CampaignTitleQuery($pageId: String) {
  campaign: datoCmsCampaign(originalId: {eq: $pageId}) {
    originalId
    title
    slug
    introText
    coverImage {
        gatsbyImageData(placeholder: BLURRED)
    }
  }
}`