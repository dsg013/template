import React from 'react'
import { Link } from 'react-router-dom'
import FooterButton from './Buttons/FooterButton'
import '../css/footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-content-container">
                    <div className="footer-links">
                        <Link
                            to="/terms-and-conditions"
                            className="footer-link"
                        >
                            Terms &amp; Conditions
                        </Link>

                        <Link to="/cookie-policy" className="footer-link">
                            Cookie Policy
                        </Link>

                        <Link to="/privacy-policy" className="footer-link">
                            Privacy Policy
                        </Link>
                    </div>

                    <div className="footer-email-container">
                        <div className="footer-email">
                            <input
                                className="footer-email-input"
                                type="email"
                                id="email"
                                name="email"
                                pattern="[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
                                placeholder="Email"
                            ></input>
                            <div className="footer-btn-container">
                                <FooterButton />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer-copyright">
                    Lorem Ipsum Dolor Sit - Copyright &copy; 2022 - All Rights
                    Reserved
                </p>
            </footer>
        </div>
    )
}

export default Footer
