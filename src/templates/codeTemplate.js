import React from 'react';
import { graphql } from 'gatsby'

const codeTemplate = (props) => {
  return (
      <section>
        <h2>
          {props.data.code.title}
        </h2>
        <p>
          {props.data.code.summary}
        </p>
      </section>
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