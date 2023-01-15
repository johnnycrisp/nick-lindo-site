import React from 'react'

const TextSection = ({component}) => {
    console.log(component)
  return (
    <div className="campaign__text-section">
     {component.subtitle && <h3>{component.subtitle}</h3>}
     <div dangerouslySetInnerHTML={{__html: component.text}}>
    </div>
    </div>
   
  )
}

export default TextSection