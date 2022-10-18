import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";

export default function Header() {
  const { site: { siteMetadata: { title, description, siteUrl } } } = useStaticQuery(graphql`
  query {
    site {
      id
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
  `)

  return (
    <div>
      <h1 style={style}>{title}</h1>
      <h6>{description}</h6>
      <Link to={siteUrl} >Site</Link>
    </div>
  )
}

const style = {
  color: "red"
}