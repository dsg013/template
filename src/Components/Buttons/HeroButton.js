import React from 'react'
import { Link } from 'react-router-dom'

const HeroButton = (props) => {
    return (
        <div>
            <Link to={props.href}>
                <button className="hero-btn home-lead-item">Read More</button>
            </Link>
        </div>
    )
}

export default HeroButton
