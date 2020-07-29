import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
            alt
          }
        }
      }
    }
  `)

  return (
    <div className="site-wrapper">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Righteous&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header menuLinks={data.site.siteMetadata.menuLinks}/>
      <main id="maincontent" className="site-wrapper__content">
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout