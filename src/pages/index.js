import React, { useState, useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header/header"

const IndexPage = props => {
  const [isActive, setIsActive] = useState("code");

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = isActive;
  });
  const prevCount = prevCountRef.current;

  const toggleActive = event => {
    setIsActive(event.target.value);
  }

  const renderFrame = () => {
    if(isActive === 'code') {
      return props.data.code.edges
    } else if(isActive === 'design') {
      return props.data.design.edges
    }
  }

  return (
    <div>
      <Header state={isActive} onClick={toggleActive}/>
      {renderFrame().map(edge => (
        <div key={edge.node.id}>
          <h2>{edge.node.title}</h2>
          <Link to={`/${isActive}/${edge.node.id}`}>
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
