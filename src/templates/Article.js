import {graphql, Link} from "gatsby"
import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"

const Article = ({ data }) => (
  <Layout>
    <article>
      <Link to='/articles'>BACK TO ARTICLES</Link>
      <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}>
        <Img fluid={ data.nodeArticle.relationships.field_image.localFile.childImageSharp.fluid } />
      </div>
      <h1>{data.nodeArticle.title}</h1>
      <i><small className="publication-date">{Date(data.nodeArticle.created)}</small></i>
      <span dangerouslySetInnerHTML={{__html: data.nodeArticle.body.processed}}></span>
    </article>
  </Layout>
)
export default Article

export const query = graphql`
  query($slug: String!) {
    nodeArticle (fields: { slug: { eq: $slug } }) {
      title
      created
      changed
      body {
        processed
        summary
      }
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

