import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ArticleTeaser from '../components/ArticleTeaser.js'

const ArticleOverviewPage = ( { data } ) => (
  <Layout>
    <h1>Articles</h1>
    {data.allNodeArticle.edges.map((post) => (
      <ArticleTeaser
        slug={post.node.fields.slug}
        key={post.node.id}
        title={post.node.title}
        created={post.node.created}
        summary={post.node.body.summary.length > 0 ? post.node.body.summary : post.node.body.processed.substring(0, 300)}
        image={post.node.relationships.field_image.localFile.childImageSharp.fluid}
      />
    ) )}
  </Layout>
)

export const query = graphql`
  query ArticleOverviewPageQuery 
{
  allNodeArticle(sort: {fields: created, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        id
        title
        body {
          processed
          summary
        }
        created
        relationships {
          field_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export default ArticleOverviewPage



