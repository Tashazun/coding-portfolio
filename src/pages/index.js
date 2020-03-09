import React, { useState, useRef, useEffect } from "react"
import { graphql } from "gatsby"

import '../components/layout.scss'
import Header from "../components/header/header"
import Frame from "../components/frame/frame"

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
    <main>
      <Header state={isActive} onClick={toggleActive}/>
      <Frame thumbnails={renderFrame()} state={isActive}/>
    </main>
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
