import { graphql } from 'gatsby'
import React from 'react'
import CampaignHeader from '../components/CampaignHeader'
import ComponentSelector from '../components/ComponentSelector'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import Seo from '../components/Seo'


const Campaign = ({data}) => {
    const campaign = data.campaign
 

    const blocks = campaign.campaignContent[0]?.campaignBlocks

    // console.log('campaign', campaign)
    // console.log('blocks', blocks)

  return (
    <Layout>
    <Seo title={campaign.title} />
        <CampaignHeader campaign={campaign} />
        <ComponentSelector 
          components={blocks}
        />
        <Pagination campaign={campaign}/>
    </Layout>
    
  )
}

export default Campaign

export const query = graphql`
query CampaignTitleQuery($pageId: String) {
  campaign: datoCmsCampaign(originalId: {eq: $pageId}) {
    originalId
    title
    subtitle
    campaignDetails
    position
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