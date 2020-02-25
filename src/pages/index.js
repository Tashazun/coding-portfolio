import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"

const IndexPage = (props) => {
  return (
  <Layout>
    {props.data.allCode.edges.map(edge => (
      <div key={edge.node.id}>
        <h2>{edge.node.title}</h2>
      </div>
    ))}
  </Layout>
  )
};

export const query = graphql`
  {
    allCode {
      edges {
        node {
          id
          image
          link
          summary
          title
        }
      }
    }
  }
`;

export default IndexPage
