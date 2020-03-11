import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Link } from "gatsby"

import "./frame.scss"

const Frame = ({ thumbnails, state }) => (
    <div className="frame">
        {thumbnails.map(thumbnail => (
            <Fragment key={thumbnail.node.id}>
                <div className="frame__thumbnail">
                    {thumbnail.node.image && 
                        <img className="frame__image" src={thumbnail.node.image}/>
                    }
                    <span className="frame__link">
                        <Link to={`/${state}/${thumbnail.node.id}`}>
                            {thumbnail.node.title}
                        </Link>
                    </span>
                </div>
            </Fragment>
        ))}
    </div>
)

Frame.propTypes = {
  thumbnails: PropTypes.array,
}

export default Frame
