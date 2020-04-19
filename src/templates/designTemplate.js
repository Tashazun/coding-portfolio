import React from 'react';
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import "./design.scss"

const designTemplate = (props) => {
  return (
      <section className="design">
        <div className="design__container">
        <h2 className="design__title">
          {props.data.design.title}
        </h2>
        <Img className="design__image" fluid={props.data.design.localImage.childImageSharp.fluid} />
        <p className="design__summary">
          {props.data.design.summary}
        </p>
        </div>
      </section>
  );
}

export const query = graphql`
  query DesignQuery($designId: String!) {
    design(id: {eq: $designId}){
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

export default designTemplate;