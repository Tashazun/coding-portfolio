import React, { useState, useRef, useEffect } from "react"
import { graphql } from "gatsby"

import '../components/layout.scss'
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
          image
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
          image
          summary
          title
        }
      }
    }
  }
`;

export default IndexPage
