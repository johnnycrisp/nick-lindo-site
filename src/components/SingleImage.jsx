import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const SingleImage = ({component}) => {
    console.log('singIMG', component)
  return (
    <div>
        <GatsbyImage alt={`Still from ${component.id}`} className="campaign__single-image" image={getImage(component.singleImage)}/>
    </div>
  )
}

export default SingleImage