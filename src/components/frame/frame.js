import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Link } from "gatsby"

import "./frame.scss"

const Frame = ({ thumbnails, state }) => (
    <div className="frame">
        {thumbnails.map((thumbnail) => (
            <Fragment key={thumbnail.id}>
                <div>
                    <span>{thumbnail.title}</span>
                    {thumbnail.image && 
                        <img src={thumbnail.image}/>
                    }
                    <Link to={`/${state}/${thumbnail.node.id}`}>
                        Link Test
                    </Link>
                </div>
            </Fragment>
        ))}
    </div>
)

Frame.propTypes = {
  thumbnails: PropTypes.array,
}

export default Frame
