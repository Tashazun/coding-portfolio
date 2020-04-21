import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./frame.scss"

const Frame = ({ thumbnails, state }) => (
    <div className="frame">
        {thumbnails.map(thumbnail => (
            <Fragment key={thumbnail.node.id}>
                <Link to={`/${state}/${thumbnail.node.id}`}>
                        <div className="frame__thumbnail">
                            <span className="frame__filter" />
                            {thumbnail.node.localImage && 
                                <Img className="frame__image" fluid={thumbnail.node.localImage.childImageSharp.fluid}/>
                            }
                        </div>
                    </Link>
            </Fragment>
        ))}
    </div>
)

Frame.propTypes = {
  thumbnails: PropTypes.array,
}

export default Frame
