import React from "react"
import { graphql } from "gatsby"

import Frame from "../components/frame/frame"
import Layout from "../components/layout/layout"

const IndexPage = props => {

  return (
    <Layout location={props.location}>
      <Frame thumbnails={props.data.code.edges} state="code"/>
      <Frame thumbnails={props.data.design.edges} state="design"/>
    </Layout>
  )
};

export const query = graphql`
  {
    code: allCode {
      edges {
        node {
          id
          localImage{
            childImageSharp{
              fluid(maxWidth: 400){
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
          summary
          title
        }
      }
    }
    design: allDesign {
      edges {
        node {
          date
          id
          localImage{
            childImageSharp{
              fluid(maxWidth: 400){
                ...GatsbyImageSharpFluid
              }
            }
          }
          summary
          title
        }
      }
    }
  }
`;

export default IndexPage
