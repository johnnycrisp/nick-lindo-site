/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 @type {import('gatsby').GatsbyNode['createPages']}
 */

 const path = require(`path`)


 
//  async function turnPagesIntoPages({ graphql, actions }) {
//    // 1. Get a template for this page
//    const pageTemplate = path.resolve('./src/templates/generic-page.jsx');
//    // 2. Query all pages
//    const { data } = await graphql(`
//      query {
//    pages: allDatoCmsPage {
//      nodes {
//        title
//        slug
//        originalId
//      }
//    }
//  }
//    `);
//    // 3. Loop over each page and create a page
 
//    data.pages.nodes.forEach((page) => {
//      actions.createPage({
//        // The url for the new page
//        path: `/${page.slug}`,
//        component: pageTemplate,
//        context: {
//          slug: page.slug,
//          pageId: page.originalId,
//        },
//      });
//    });
//  }
 
 
 async function turnCampaignsIntoPages({ graphql, actions }) {

   // 1. Get a template for this page
   const campaignTemplate = path.resolve('./src/templates/campaign.jsx');

   // 2. Query all videos
   const { data } = await graphql(`
     query {
        campaigns: allDatoCmsCampaign {
            nodes {
              title
              slug
              originalId
            }
          }
 }
   `);

   // 3. Loop over each video and create a page for that video
 
   data.campaigns.nodes.forEach((campaign) => {
     actions.createPage({
       // The url for the new page
       path: `/${campaign.slug}`,
       component: campaignTemplate,
       context: {
         slug: campaign.slug,
         pageId: campaign.originalId,
       },
     });
   });
 }
 
 exports.createPages = async function (params) {
   // Create pages dynamically
   //   Wait for all promises to be resolved before finishing this function
   await Promise.all([
     turnCampaignsIntoPages(params),
    //  turnPagesIntoPages(params),
 
   ]);
   
 }