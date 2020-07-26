import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./frame.scss"

const Frame = ({ thumbnails, state, location }) => (
    <div className={`frame ${state === 'traditional' ? 'frame__right' : ''}`}>
        <div className="frame__title">
            <h2 className="frame__heading">{state}</h2>
        </div>
        <div className="frame__content">
            {thumbnails.map(thumbnail => (
                <Fragment key={thumbnail.node.id}>
                    <Link 
                        to={`/${state}/${thumbnail.node.id}`}
                    >
                            <div className="frame__thumbnail">
                                <span className="frame__filter" />
                                {thumbnail.node.localImage && 
                                    <Img
                                        className="frame__image"
                                        fluid={thumbnail.node.localImage.childImageSharp.fluid}
                                        alt={thumbnail.node.title}
                                    />
                                }
                            </div>
                        </Link>
                </Fragment>
            ))}
        </div>
    </div>
)

Frame.propTypes = {
  thumbnails: PropTypes.array,
}

export default Frame
