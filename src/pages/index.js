import * as React from "react";
import { Link, graphql } from "gatsby";

import Header from "../components/Header";
const IndexPage = ({
  data: {
    allMdx: { edges: posts },
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
            <Link to={node.frontmatter.slug}>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
