import * as React from "react";
import { Link, graphql } from "gatsby";

import Header from "../components/Header";
const IndexPage = ({
  data: {
    allContentfulPost: { edges: posts },
  },
}) => {
  return (
    <main>
      Main page
      <Header />
      <Link to="/about">About</Link>
      <ul>
        {posts.map(({ node }) => (
          <li>
            <Link to={node.slug}>
              {node.title} - {node.createdAt}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const query = graphql`
  query {
    allContentfulPost(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
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
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
