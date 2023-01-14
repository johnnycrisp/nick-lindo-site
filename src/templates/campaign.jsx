import { graphql } from 'gatsby'
import React from 'react'
import CampaignHeader from '../components/CampaignHeader'
import ComponentSelector from '../components/ComponentSelector'
import Layout from '../components/Layout'
import VideoFrame from '../components/VideoFrame'

const Campaign = ({data}) => {
    const campaign = data.campaign
    console.log('campaign', campaign)

    const blocks = campaign.campaignContent[0].campaignBlocks

    console.log('blocks', blocks)

  return (
    <Layout>
        <CampaignHeader campaign={campaign} />
        {/* <VideoFrame 
        videoSrcURL="https://www.youtube.com/embed/hv6yOfyLbLc?controls=0" 
        videoTitle="Official Music Video on YouTube"/> */}
        <ComponentSelector 
          components={blocks}
        />
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
    campaignContent {
      campaignBlocks {
        ... on DatoCmsTextSection {
          id
          text
          subtitle
          title
          internal {
            type
          }
        }
        ... on DatoCmsSingleVideo {
          id
          internal {
            type
          }
          videoLink {
            url
            title
          }
        }
        ... on DatoCmsImageGallery {
          id
          internal {
            type
          }
          images {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        ... on DatoCmsSingleImage {
          id
          internal {
            type
          }
          singleImage {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}`