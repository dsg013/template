import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import ReadMoreButton from '../Components/Buttons/ReadMoreButton'
import '../css/environment.css'

const Environment = () => {
    return (
        <div>
            <div className="environment-header-container">
                <h1 className="environment-header">Environment</h1>
            </div>
            <div className="environment">
                <div className="environment-container">
                    <div className="environment-main-section">
                        <div className="environment-main-section-image">
                            <Link to="domain.com">
                                <img
                                    src="https://via.placeholder.com/839x450/000000.png"
                                    alt="placeholder"
                                    className="environment-main-image environment-main-image-1"
                                ></img>
                            </Link>
                        </div>
                        <h2 className="environment-main-section-title environment-main-section-title-1">
                            <Link to="domain.com">
                                Vestibulum rhoncus est pellentesque elit
                            </Link>
                        </h2>
                        <div className="environment-main-section-details environment-main-section-details-1">
                            <Link
                                to="domain.com"
                                className="environment-details-date environment-details-date-1"
                            >
                                July 21, 2022 &nbsp;
                            </Link>
                            <div className="details-divider details-divider-1">
                                -
                            </div>
                            <Link
                                to="domain.com"
                                className="environment-details-author environment-details-author-1"
                            >
                                &nbsp;De'nesha Diamond&nbsp;
                            </Link>
                            <div className="details-divider details-divider-2">
                                -
                            </div>
                            <Link
                                to="domain.com"
                                className="environment-details-comments environment-details-comments-1"
                            >
                                &nbsp;0 Comments
                            </Link>
                        </div>
                        <p className="environment-main-section-content environment-main-section-content-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum...
                        </p>
                        <div className="read-more-btn-container">
                            <ReadMoreButton href="/" />
                        </div>
                    </div>

                    <div className="environment-main-section">
                        <div className="environment-main-section-image">
                            <Link to="domain.com">
                                <img
                                    src="https://via.placeholder.com/839x450/000000.png"
                                    alt="placeholder"
                                    className="environment-main-image environment-main-image-2"
                                ></img>
                            </Link>
                        </div>
                        <h2 className="environment-main-section-title environment-main-section-title-2">
                            <Link to="domain.com">
                                Vestibulum rhoncus est pellentesque elit
                            </Link>
                        </h2>
                        <div className="environment-main-section-details">
                            <Link
                                to="domain.com"
                                className="environment-details-date environment-details-date-2"
                            >
                                July 21, 2022
                            </Link>
                            <div className="details-divider details-divider-3">
                                -
                            </div>
                            <Link
                                to="domain.com"
                                className="environment-details-author environment-details-author-2"
                            >
                                De'nesha Diamond
                            </Link>
                            <div className="details-divider details-divider-4">
                                -
                            </div>
                            <Link
                                to="domain.com"
                                className="environment-details-comments environment-details-comments-2"
                            >
                                0 Comments
                            </Link>
                        </div>
                        <p className="environment-main-section-content environment-main-section-content-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum...
                        </p>
                        <div className="read-more-btn-container">
                            <ReadMoreButton href="/" />
                        </div>
                    </div>

                    <div className="environment-main-section">
                        <div className="environment-main-section-image">
                            <Link to="domain.com">
                                <img
                                    src="https://via.placeholder.com/839x450/000000.png"
                                    alt="placeholder"
                                    className="environment-main-image environment-main-image-3"
                                ></img>
                            </Link>
                        </div>
                        <h2 className="environment-main-section-title environment-main-section-title-3">
                            <Link to="domain.com">
                                Vestibulum rhoncus est pellentesque elit
                            </Link>
                        </h2>
                        <div className="environment-main-section-details">
                            <Link
                                to="domain.com"
                                className="environment-details-date environment-details-date-3"
                            >
                                July 21, 2022
                            </Link>
                            <div className="details-divider details-divider-5">
                                -
                            </div>
                            <Link
                                to="domain.com"
                                className="environment-details-author environment-details-author-3"
                            >
                                De'nesha Diamond
                            </Link>
                            <div className="details-divider details-divider-6">
                                -
                            </div>
                            <Link
                                to="domain.com"
                                className="environment-details-comments environment-details-comments-3"
                            >
                                0 Comments
                            </Link>
                        </div>
                        <p className="environment-main-section-content-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum...
                        </p>
                        <div className="read-more-btn-container">
                            <ReadMoreButton href="/" />
                        </div>
                    </div>

                    <div className="environment-main-section">
                        <div className="environment-main-section-image environment-main-image-4">
                            <Link to="domain.com">
                                <img
                                    src="https://via.placeholder.com/839x450/000000.png"
                                    alt="placeholder"
                                    className="environment-main-image"
                                ></img>
                            </Link>
                        </div>
                        <h2 className="environment-main-section-title environment-main-section-title-4">
                            <Link to="domain.com">
                                Vestibulum rhoncus est pellentesque elit
                            </Link>
                        </h2>
                        <div className="environment-main-section-details">
                            <Link
                                to="domain.com"
                                className="environment-details-date environment-details-date-4"
                            >
                                July 21, 2022
                            </Link>
                            <div className="details-divider details-divider-7">
                                -
                            </div>
                            <Link
                                to="domain.com"
                                className="environment-details-author environment-details-author-4"
                            >
                                De'nesha Diamond
                            </Link>
                            <div className="details-divider details-divider-8">
                                -
                            </div>
                            <Link
                                to="domain.com"
                                className="environment-details-comments environment-details-comments-4"
                            >
                                0 Comments
                            </Link>
                        </div>
                        <p className="environment-main-section-content environment-main-section-content-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum...
                        </p>
                        <div className="read-more-btn-container">
                            <ReadMoreButton href="/" />
                        </div>
                    </div>
                </div>

                <div className="sidebar-container">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Environment
