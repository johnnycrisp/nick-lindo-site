import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"


const Index = ({data}) => {

  const campaigns = data.campaigns.nodes
  campaigns.sort((a,b) => a.position - b.position)
  console.log(campaigns)
  return (
    <Layout className="index">
    <Seo title="Home" />
      <ul className="home__links">
        {campaigns.map((campaign)=> {
        return (
        <li>
          <Link to={campaign.slug}>{campaign.title},</Link>
        </li>
        )
      })}
     
        <Link to="/about">About.</Link> 
        </ul>
    </Layout>
  )
}

export default Index

export const query = graphql`
query MyQuery {
  campaigns: allDatoCmsCampaign {
    nodes {
      title
      slug
      position
    }
  }
}
`
  