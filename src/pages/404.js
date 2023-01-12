import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div>
        <p>Page not found</p>
        <Link to="/">Go home</Link>
      
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
