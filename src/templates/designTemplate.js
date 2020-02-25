import React from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"

const designTemplate = (props) => {
  return (
    <Layout location={props.location}>
      <section>
        <h2>
          {props.data.design.title}
        </h2>
        <p>
          {props.data.design.summary}
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query DesignQuery($designId: String!) {
    design(id: {eq: $designId}){
      date
      id
      summary
      title
    }
  }
`;

export default designTemplate;