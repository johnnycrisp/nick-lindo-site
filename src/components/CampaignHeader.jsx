import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const CampaignHeader = ({campaign}) => {
    const coverImage = campaign.coverImage
  return (
    <div className="campaign__wrapper">
        <h1>{campaign.title}</h1>
        <h2>Don't get sidetracked.</h2>
        <GatsbyImage alt={`Still from ${campaign.title}`} className="campaign__cover-image" image={getImage(coverImage)}/>
        <div className="campaign__intro">
            <h3>The brief</h3>
            <div className="intro__text" dangerouslySetInnerHTML={{__html: campaign.introText}}></div>
        </div>
    </div>
  )
}

export default CampaignHeader