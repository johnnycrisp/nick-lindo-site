import { Link } from 'gatsby'
import React from 'react'

const Pagination = () => {
  return (
    <div className="pagination__wrapper">
        <div className="pagination__home">
            <Link to="/">&larr; HOME PLEASE</Link>
        </div>
        <div className="pagination__next">
            <Link to="/">ANOTHER! &rarr;</Link>
        </div>
    </div>
  )
}

export default Pagination