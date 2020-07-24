import React from 'react';
import { graphql } from 'gatsby'

const digitalTemplate = (props) => {
  return (
      <section>
        <h2>
          {props.data.digital.title}
        </h2>
        <p>
          {props.data.digital.summary}
        </p>
      </section>
  );
}

export const query = graphql`
  query DigitalQuery($digitalId: String!) {
    digital(id: {eq: $digitalId}){
      image
      id
      summary
      title
    }
  }
`;

export default digitalTemplate;