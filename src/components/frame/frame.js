import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import "./frame.scss"

const Frame = ({ thumbnails, state }) => (
    <div className="frame">
        {thumbnails.map(thumbnail => (
            <React.Fragment key={thumbnail.id}>
                <div>
                    <span>{thumbnail.title}</span>
                    {thumbnail.image && 
                        <img src={thumbnail.image}/>
                    }
                    <Link to={`/${state}/${thumbnail.node.id}`}>
                        Link Test
                    </Link>
                </div>
            </React.Fragment>
        ))}
    </div>
)

Frame.propTypes = {
  thumbnails: PropTypes.object,
}

export default Frame
