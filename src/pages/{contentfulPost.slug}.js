import React from 'react'
import { graphql } from "gatsby";

export default function Post({ data: { contentfulPost: { createdAt, title, slug, content } } }) {

  return (
    <div>
      <h5>{title}</h5>
      <h6>{createdAt}</h6>

      {/* {content.content} */}
      
    </div>
  )
}

export const query = graphql`
  query($id: String) {
    contentfulPost(id: { eq: $id }) {
      id
      createdAt(formatString: "MMM D, YYYY h:mm", locale: "FR-fr")
      title
      slug
      content {
        id
        content
      }
    }
}
`
