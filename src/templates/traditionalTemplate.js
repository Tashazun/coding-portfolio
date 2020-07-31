import React from 'react';
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"

import "./design.scss"

const traditionalTemplate = (props) => {
  return (
    <Layout>
      <section className="traditional">
        <div className="traditional__container">
        <h2 className="traditional__title">
          {props.data.traditional.title}
        </h2>
        <Img className="traditional__image" fluid={props.data.traditional.localImage.childImageSharp.fluid} />
        <p className="traditional__summary">
          {props.data.traditional.summary}
        </p>
        </div>
        <Link to="/">Go Back</Link>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query TraditionalQuery($traditionalId: String!) {
    traditional(id: {eq: $traditionalId}){
      date
      id
      localImage{
        childImageSharp{
          fluid(maxWidth: 700){
            ...GatsbyImageSharpFluid
          }
        }
      }
      summary
      title
    }
  }
`;

export default traditionalTemplate;