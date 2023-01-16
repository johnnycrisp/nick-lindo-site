import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'

const Pagination = ({campaign}) => {

    const allCampaigns = useStaticQuery(graphql`
    query CampaignsQuery {
      campaigns: allDatoCmsCampaign {
        nodes {
          title
          slug
          position
        }
      }
    }
  `)

  const pages = allCampaigns.campaigns.nodes;

  console.log('pagination', pages)
  console.log('pag-campaign', campaign)

  const currentPage = campaign.position
  const nextPage = currentPage + 1


  // console.log('nextPage', nextPage)
  // console.log('pagesLength', pages.length)
  // console.log('currentPage', currentPage)

  const getNextPage = () => {

    let nextPageSlug = '0'

      if(nextPage <= pages.length){
        return (
          nextPageSlug = pages.filter(page => page.position === nextPage)[0].slug
        ) } else {
          return (
            nextPageSlug = 0
            )
        }
      }
  

  console.log('ok', getNextPage())
  
  

  return (
    <div className="pagination__wrapper">
        <div className="pagination__home">
            <Link to="/">&larr; HOME PLEASE</Link>
        </div>
        {/* <Link to="/" onClick={setNextPage(nextPage + 1)}></Link> */}
        {getNextPage() !== 0 ? <div className="pagination__next">
            <Link to={`/${getNextPage()}`}>ANOTHER! &rarr;</Link>
        </div> : ''}
    </div>
  )
}

export default Pagination