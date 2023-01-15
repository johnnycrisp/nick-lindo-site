import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const ImageGallery = ({component}) => {
    console.log('imgGallery', component)
  return (
    <div className="image__gallery">
        {component.images.map((image) => {
            return (
                <GatsbyImage alt="image" image={getImage(image)} />
            )
        })}
    </div>
  )
}

export default ImageGallery