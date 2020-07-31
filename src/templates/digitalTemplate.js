import React from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/layout"

const digitalTemplate = (props) => {
  return (
    <Layout>
      <section>
        <h2>
          {props.data.digital.title}
        </h2>
        <p>
          {props.data.digital.summary}
        </p>
      </section>
    </Layout>
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