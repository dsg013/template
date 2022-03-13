import React from 'react'
import { Link } from 'react-router-dom'
import '../css/contact-form.css'
import ContactFormButton from './Buttons/ContactFormButton'

const ContactForm = () => {
    return (
        <div className="contact-form">
            <h1 className="contact-form-header contact-form-item">
                Get Started Now
            </h1>
            <h3 className="contact-form-header contact-form-item">
                Lorem Ipsum
            </h3>
            <form className="contact-form-content">
                <div className="contact-form-container">
                    <div className="contact-form-email contact-form-item">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            pattern="[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
                            placeholder="Enter your email"
                            required
                        ></input>
                    </div>

                    <div className="contact-form-legal-container contact-form-item">
                        <p className="contact-form-legal">
                            * By submitting you confirm that you&#39;ve read and
                            accepted the{' '}
                            <Link
                                to="/privacy-policy"
                                className="contact-form-legal-link"
                            >
                                privacy policy
                            </Link>{' '}
                            and{' '}
                            <Link
                                to="/terms-and-conditions"
                                className="contact-form-legal-link"
                            >
                                terms of conditions
                            </Link>
                            .
                        </p>
                        <p className="contact-form-legal">
                            ** By submitting this form, I agree to receive all
                            marketing material by email.
                        </p>
                    </div>
                    <ContactFormButton />
                </div>
            </form>
        </div>
    )
}

export default ContactForm
