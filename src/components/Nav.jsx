import { Link } from 'gatsby'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Cat from '../images/cat.gif'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/"><img src={Cat} alt="a spinning cat"/></Link></li>
        {/* <li><Link to="/about">About</Link></li> */}
      </ul>
    </nav>
  )
}

export default Nav