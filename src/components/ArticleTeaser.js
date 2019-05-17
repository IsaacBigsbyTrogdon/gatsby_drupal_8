import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

const ArticleTeaser = ({slug, title, summary, image} ) => (
  <div className="blog--teaser">
    <Link to={slug}>
      <h2>{title}</h2>
    </Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, width: `100%` }}>
      <Link to={slug}><Img fluid={ image } /></Link>
    </div>
    <p dangerouslySetInnerHTML={{__html: summary}} />
  </div>
)

export default ArticleTeaser

