import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Link } from "gatsby"

import "./frame.scss"

const Frame = ({ thumbnails, state }) => (
    <div className="frame">
        {thumbnails.map(thumbnail => (
            <Fragment key={thumbnail.node.id}>
                <Link to={`/${state}/${thumbnail.node.id}`}>
                    <div className="frame__thumbnail">
                        {thumbnail.node.image && 
                            <img className="frame__image" src={thumbnail.node.image}/>
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
