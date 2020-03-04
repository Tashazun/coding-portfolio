import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header/header"

const IndexPage = props => {
  const [isActive, setIsActive] = useState("code");

  const toggleActive = event => {
    setIsActive(event.target.value);
  }

  return (
    <div>
      <Header state={isActive} onClick={toggleActive}/>
      {props.data.code.edges.map(edge => (
        <div key={edge.node.id}>
          <h2>{edge.node.title}</h2>
          <Link to={`/code/${edge.node.id}`}>
            Link Test
          </Link>
        </div>
      ))}
    </div>
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
