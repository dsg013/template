import React from 'react'
import { Link } from 'react-router-dom'

const ListButton = (props) => {
    return (
        <div>
            <Link to={props.href}>
                <button className="list-btn">Try 1 Month Free</button>
            </Link>
        </div>
    )
}

export default ListButton
