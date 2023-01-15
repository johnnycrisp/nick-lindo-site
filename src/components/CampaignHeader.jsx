import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const CampaignHeader = ({campaign}) => {
    const coverImage = campaign.coverImage
    console.log('first', campaign.title.length)
  return (
    <div className="campaign__wrapper">
        <h1>{campaign.title}</h1>
        <div className="campaign__subtitle">
            <h2>Don't get sidetracked.</h2>
        </div>
    
        <GatsbyImage alt={`Still from ${campaign.title}`} className="campaign__cover-image" image={getImage(coverImage)}/>
        <div className="campaign__intro">
            <div className="brief">
                <h3>The Campaign</h3>
                <div className="intro__text" dangerouslySetInnerHTML={{__html: campaign.introText}}></div>
            </div>
            <div className="details">
                <h3>Some Details</h3>
                <ul className="intro__text">
                    <li>Director: Jeff Low</li>
                    <li>Photography: Jeff Low</li>
                    <li>Year: 2022</li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default CampaignHeader