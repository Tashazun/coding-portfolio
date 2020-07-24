import React from "react"
import { graphql } from "gatsby"

import Frame from "../components/frame/frame"
import Layout from "../components/layout"

const IndexPage = props => {

  return (
    <Layout location={props.location}>
      <Frame thumbnails={props.data.digital.edges} state="digital"/>
      <Frame thumbnails={props.data.traditional.edges} state="traditional"/>
    </Layout>
  )
};

export const query = graphql`
  {
    digital: allDigital {
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
    traditional: allTraditional {
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
