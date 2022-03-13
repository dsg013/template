import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Components/Modal'
import Sidebar from '../Components/Sidebar'
import '../css/home.css'
import ReadMoreButton from '../Components/Buttons/ReadMoreButton'
import ArticleOneImg from '../images/house-gc35bd3b08_1920.jpg'
import ArticleTwoImg from '../images/network-g61353327e_1920.jpg'
import ArticleThreeImg from '../images/network-g12fa8026e_1920.jpg'

const WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1,
}

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(true)
    }, [])

    return (
        <>
            {/* <div style={WRAPPER_STYLES}>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
            </div> */}
            <div>
                <div className="home-header-container">
                    <h1 className="home-header">Lorem Ipsum Inc.</h1>
                </div>
                <div className="home">
                    <div className="home-container">
                        <div className="home-main-section">
                            <div className="home-main-section-image">
                                <Link to="/articles/blockchain-technology-is-changing-the-real-estate-industry">
                                    <img
                                        src={ArticleOneImg}
                                        alt="placeholder"
                                        className="home-main-image"
                                    ></img>
                                </Link>
                            </div>
                            <h2 className="home-main-section-title">
                                <Link to="/articles/blockchain-technology-is-changing-the-real-estate-industry">
                                    Blockchain Technology Is Changing The Real
                                    Estate Industry
                                </Link>
                            </h2>
                            <div className="home-main-section-details">
                                <Link
                                    to="domain.com"
                                    className="home-details-date"
                                >
                                    Thursday, July 21, 2022 &nbsp;
                                </Link>
                                <div className="details-divider">-</div>
                                <Link
                                    to="domain.com"
                                    className="home-details-author"
                                >
                                    &nbsp;De'nesha Diamond&nbsp;
                                </Link>
                                <div className="details-divider">-</div>
                                <Link
                                    to="domain.com"
                                    className="home-details-comments"
                                >
                                    &nbsp;0 Comments
                                </Link>
                            </div>
                            <p className="home-main-section-content">
                                On February 10, 2022, the main NFT-based
                                property was purchased through a sale on Propy,
                                a blockchain-zeroed in land organization. The
                                Florida home was sold for $653,163 worth of
                                Ether, and the home's property freedoms were
                                stamped as a NFT on the blockchain as a
                                computerized portrayal of responsibility for
                                actual land...
                            </p>
                            <div className="read-more-btn-container">
                                <ReadMoreButton href="/articles/blockchain-technology-is-changing-the-real-estate-industry" />
                            </div>
                        </div>

                        <div className="home-main-section">
                            <div className="home-main-section-image">
                                <Link to="/articles/blockchain-technology-could-revolutionize-these-spaces-in-2022">
                                    <img
                                        src={ArticleTwoImg}
                                        alt="placeholder"
                                        className="home-main-image home-main-image-2"
                                    ></img>
                                </Link>
                            </div>
                            <h2 className="home-main-section-title home-main-section-title-2">
                                <Link to="/articles/blockchain-technology-could-revolutionize-these-spaces-in-2022">
                                    Blockchain technology could revolutionize
                                    these spaces in 2022
                                </Link>
                            </h2>
                            <div className="home-main-section-details">
                                <Link
                                    to="domain.com"
                                    className="home-details-date home-details-date-2"
                                >
                                    Thursday, July 21, 2022 &nbsp;
                                </Link>
                                <div className="details-divider details-divider-3">
                                    -
                                </div>
                                <Link
                                    to="domain.com"
                                    className="home-details-author home-details-author-2"
                                >
                                    &nbsp; De'nesha Diamond &nbsp;
                                </Link>
                                <div className="details-divider details-divider-4">
                                    -
                                </div>
                                <Link
                                    to="domain.com"
                                    className="home-details-comments home-details-comments-2"
                                >
                                    &nbsp; 0 Comments
                                </Link>
                            </div>
                            <p className="home-main-section-content home-main-section-content-2">
                                A blockchain is an appropriated information base
                                where each passage should be supported by an
                                organization of friends with next to no
                                intercession from a delegate or focal power.
                                This circulated, decentralized nature of the
                                data set makes it exceptionally secure and
                                straightforward...
                            </p>
                            <div className="read-more-btn-container">
                                <ReadMoreButton href="/articles/blockchain-technology-could-revolutionize-these-spaces-in-2022" />
                            </div>
                        </div>

                        <div className="home-main-section">
                            <div className="home-main-section-image">
                                <Link to="/articles/jp-morgan-expands-crypto-footprint-with-investment-in-blockchain">
                                    <img
                                        src={ArticleThreeImg}
                                        alt="placeholder"
                                        className="home-main-image home-main-image-2"
                                    ></img>
                                </Link>
                            </div>
                            <h2 className="home-main-section-title home-main-section-title-2">
                                <Link to="/articles/jp-morgan-expands-crypto-footprint-with-investment-in-blockchain">
                                    JPMorgan expands crypto footprint with
                                    investment in blockchain
                                </Link>
                            </h2>
                            <div className="home-main-section-details">
                                <Link
                                    to="domain.com"
                                    className="home-details-date home-details-date-2"
                                >
                                    Thursday, July 21, 2022 &nbsp;
                                </Link>
                                <div className="details-divider details-divider-3">
                                    -
                                </div>
                                <Link
                                    to="domain.com"
                                    className="home-details-author home-details-author-2"
                                >
                                    &nbsp; De'nesha Diamond &nbsp;
                                </Link>
                                <div className="details-divider details-divider-4">
                                    -
                                </div>
                                <Link
                                    to="domain.com"
                                    className="home-details-comments home-details-comments-2"
                                >
                                    &nbsp; 0 Comments
                                </Link>
                            </div>
                            <p className="home-main-section-content home-main-section-content-2">
                                JPMorgan Chase (JPM) declared on Monday that it
                                would make a "essential speculation" in TRM
                                Labs, a blockchain investigation firm, turning
                                into the most recent in a developing number of
                                Wall Street firms growing their impression in
                                the digital currency area. The investigation
                                programming utilized by TRM and others has
                                turned into a go-to...
                            </p>
                            <div className="read-more-btn-container">
                                <ReadMoreButton href="/articles/jp-morgan-expands-crypto-footprint-with-investment-in-blockchain" />
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-container">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    )
}
