import React from 'react'
import { Link } from 'react-router-dom'

const ReadMoreButtonSidebar = (props) => {
    return (
        <div>
            <Link to={props.href}>
                <button className="read-more-btn">Read More</button>
            </Link>
        </div>
    )
}

export default ReadMoreButtonSidebar
