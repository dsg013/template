import React from 'react'
import { Link } from 'react-router-dom'
import '../css/sidebar.css'
import ContactForm from './ContactForm'
import ReadMoreButtonSidebar from './Buttons/ReadMoreButtonSidebar'
import SidebarImageOne from '../images/automobile-g4ce4905bd_1920.jpg'
import SidebarImageTwo from '../images/tesla-g48312fcda_1920.jpg'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ContactForm />
            <div className="sidebar-content-container">
                <div className="sidebar-content-top">
                    <Link to="domain.com" className="sidebar-link">
                        <h2 className="sidebar-header">
                            Ut enim ad minim veniam
                        </h2>
                    </Link>
                </div>
                <div className="sidebar-content-bottom">
                    <p className="sidebar-content">
                        Aliquet nec ullamcorper sit amet risus nullam eget
                        felis. Congue nisi vitae suscipit tellus mauris a
                        diam...
                    </p>
                    <div className="read-more-container">
                        <ReadMoreButtonSidebar href="domain.com" />
                    </div>
                    <p className="sidebar-copyright">Lorem Ipsum &copy; </p>
                </div>
            </div>

            <div className="sidebar-content-container">
                <div className="sidebar-content-top">
                    <Link to="domain.com" className="sidebar-link">
                        <h2 className="sidebar-header">
                            Odio euismod lacinia at quis risus
                        </h2>
                    </Link>
                </div>
                <div className="sidebar-content-bottom">
                    <p className="sidebar-content">
                        Tempus quam pellentesque nec nam aliquam sem et tortor
                        consequat. Velit sed ullamcorper morbi...
                    </p>
                    <div className="read-more-container">
                        <ReadMoreButtonSidebar href="/" />
                    </div>
                    <p className="sidebar-copyright">Lorem Ipsum &copy; </p>
                </div>
            </div>

            <div className="sidebar-image-container">
                <Link to="domain.com">
                    <img
                        src={SidebarImageOne}
                        alt="placeholder"
                        className="sidebar-image"
                    ></img>
                </Link>
            </div>
            <div className="sidebar-image-container">
                <Link to="domain.com">
                    <img
                        src={SidebarImageTwo}
                        alt="placeholder"
                        className="sidebar-image"
                    ></img>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
