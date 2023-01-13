import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"


const Index = ({data}) => {
  console.log(data.campaigns)

  const campaigns = data.campaigns.nodes
  return (
    <Layout>
      <div className="home__links">
        {campaigns.map((campaign)=> {
        return (
        <Link to={campaign.slug}>{campaign.title},</Link>
        )
      })}
     
        <Link to="/about">About.</Link> 
        </div>
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
    }
  }
}
`
  