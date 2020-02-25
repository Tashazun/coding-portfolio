import React from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"

const codeTemplate = (props) => {
  return (
    <Layout location={props.location}>
      <section>
        <h2>
          {props.data.code.title}
        </h2>
        <p>
          {props.data.code.summary}
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query CodeQuery($codeId: String!) {
    code(id: {eq: $codeId}){
      image
      link
      id
      summary
      title
    }
  }
`;

export default codeTemplate;