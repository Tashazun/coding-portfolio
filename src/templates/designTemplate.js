import React from 'react';
import { graphql } from 'gatsby'
import Img from "gatsby-image"

const designTemplate = (props) => {
  return (
      <section>
        <h2>
          {props.data.design.title}
        </h2>
        <Img fixed={props.data.design.localImage.childImageSharp.fixed} />
        <p>
          {props.data.design.summary}
        </p>
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
          fixed(width: 400){
            ...GatsbyImageSharpFixed
          }
        }
      }
      summary
      title
    }
  }
`;

export default designTemplate;