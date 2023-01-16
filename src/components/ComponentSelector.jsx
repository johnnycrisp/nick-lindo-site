import * as React from "react"
import ImageGallery from "./ImageGallery"
import SingleImage from "./SingleImage"
import TextSection from "./TextSection"
import VideoFrame from "./VideoFrame"

export default function ComponentSelector({ components }) {
    // console.log('components', components)

  return (
    <div className="campaign__components-wrapper">
      {components?.map(component => {
        switch (component?.internal.type) {
          case "DatoCmsSingleVideo":
            return (
              <VideoFrame 
                key={component.id}
                component={component}
              />
            )
         case "DatoCmsTextSection":
            return (
              <TextSection key={component.id} component={component} />
            )
          case "DatoCmsSingleImage":
            return (
              <SingleImage key={component.id} component={component} />
            )
          case "DatoCmsImageGallery":
            return (
              <ImageGallery key={component.id} component={component} />
            )
        
          default:
            break
        }
      })}
    </div>
  )
}