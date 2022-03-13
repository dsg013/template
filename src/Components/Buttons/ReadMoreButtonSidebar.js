import React from 'react'
import { Link } from 'react-router-dom'

const ReadMoreButtonSidebar = (props) => {
    return (
        <div>
            <Link to={props.href} className="read-more-btn-container">
                <button className="read-more-btn-sidebar sidebar-content-item">
                    Read More
                </button>
            </Link>
        </div>
    )
}

export default ReadMoreButtonSidebar
