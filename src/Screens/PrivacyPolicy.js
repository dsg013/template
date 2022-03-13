import React from 'react'
import { Link } from 'react-router-dom'
import '../css/privacy-policy.css'

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <div className="privacy-policy-header-container">
                <h1 className="privacy-policy-header">Privacy Policy</h1>
            </div>
            <div className="privacy-policy-content-container">
                <div className="privacy-policy-title">
                    <h3>
                        Privacy Policy for{' '}
                        <span className="bold-text"> Lorem Ipsum</span>
                    </h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        At <span className="bold-text"> Lorem Ipsum</span>,
                        accessible at{' '}
                        <span className="bold-text"> Lorem Ipsum.com</span>, one
                        of our main priorities is the privacy of our visitors.
                        This Privacy Policy document contains types of
                        information that is collected and recorded by{' '}
                        <span className="bold-text"> Lorem Ipsum.com</span> and
                        how we use it.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        If you have additional questions or require more
                        information about our Privacy Policy, do not hesitate to
                        contact us through email at{' '}
                        <span className="bold-text"> Lorem@Ipsum.com</span>
                    </p>
                </div>

                <div className="privacy-policy-title">
                    <h3>Consent</h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        By using our website, you hereby consent to our Privacy
                        Policy and agree to its terms.
                    </p>
                </div>

                <div className="privacy-policy-title">
                    <h3>Information We Collect</h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        The personal information that you are asked to provide,
                        and the reasons why you are asked to provide it, will be
                        made clear to you at the point we ask you to provide
                        your personal information.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        If you contact us directly, we may receive additional
                        information about you such as your name, email address,
                        phone number, the contents of the message and/or
                        attachments you may send us, and any other information
                        you may choose to provide.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        When you register for an Account, we may ask for your
                        contact information, including items such as name,
                        company name, address, email address, and telephone
                        number.
                    </p>
                </div>

                <div className="privacy-policy-title">
                    <h3>How we use your information</h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        We use the information we collect in various ways,
                        including to:
                    </p>
                </div>

                <div className="privacy-policy-list-container">
                    <ul className="privacy-policy-list">
                        <li className="privacy-policy-list-item">
                            Provide, operate, and maintain our website
                        </li>
                        <li className="privacy-policy-list-item">
                            Improve, personalize, and expand our website
                        </li>
                        <li className="privacy-policy-list-item">
                            Understand and analyze how you use our website
                        </li>
                        <li className="privacy-policy-list-item">
                            Develop new products, services, features, and
                            functionality
                        </li>
                        <li className="privacy-policy-list-item">
                            Communicate with you, either directly or through one
                            of our partners, including for customer service, to
                            provide you with updates and other information
                            relating to the website, and for marketing and
                            promotional purposes
                        </li>
                        <li className="privacy-policy-list-item">
                            Send you emails
                        </li>
                        <li className="privacy-policy-list-item">
                            Find and prevent fraud
                        </li>
                    </ul>
                </div>

                <div className="privacy-policy-title">
                    <h3>Log Files</h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        <span className="bold-text"> Lorem Ipsum</span> follows
                        a standard procedure of using log files. These files log
                        visitors when they visit websites. All hosting companies
                        do this and a part of hosting services' analytics. The
                        information collected by log files include internet
                        protocol (IP) addresses, browser type, Internet Service
                        Provider (ISP), date and time stamp, referring/exit
                        pages, and possibly the number of clicks. These are not
                        linked to any information that is personally
                        identifiable. The purpose of the information is for
                        analyzing trends, administering the site, tracking
                        users' movement on the website, and gathering
                        demographic information.
                    </p>
                </div>

                <div className="privacy-policy-title">
                    <h3>Cookies and Web Beacons</h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        Like any other website,{' '}
                        <span className="bold-text"> Lorem Ipsum</span> uses
                        ‘cookies'. These cookies are used to store information
                        including visitors' preferences, and the pages on the
                        website that the visitor accessed or visited. The
                        information is used to optimize the users' experience by
                        customizing our web page content based on visitors'
                        browser type and/or other information.
                    </p>
                </div>

                <div className="privacy-policy-title">
                    <h3>DoubleClick DART Cookie</h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        Google is one of a third-party vendor on our site. It
                        also uses cookies, known as DART cookies, to serve ads
                        to our site visitors based upon their visit to
                        <span className="bold-text">
                            {' '}
                            www.Lorem@Ipsum.com
                        </span>{' '}
                        and other sites on the internet. However, visitors may
                        choose to decline the use of DART cookies by visiting
                        the Google ad and content network Privacy Policy at the
                        following URL –
                        <Link
                            to="https://policies.google.com/technologies/ads"
                            className="privacy-policy-link"
                        >
                            https://policies.google.com/technologies/ads
                        </Link>
                        .
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        Some of advertisers on our site may use cookies and web
                        beacons. Our advertising partners are listed below. Each
                        of our advertising partners has their own Privacy Policy
                        for their policies on user data. For easier access, we
                        hyperlinked to their Privacy Policies below.
                    </p>
                </div>

                <div className="privacy-policy-list-container">
                    <ul className="privacy-policy-list">
                        <li className="privacy-policy-list-item">Google</li>
                    </ul>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        <Link
                            to="https://policies.google.com/technologies/ads"
                            className="privacy-policy-link"
                        >
                            https://policies.google.com/technologies/ads
                        </Link>
                    </p>
                </div>

                <div className="privacy-policy-title">
                    <h3>Advertising Partners Privacy Policies</h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        You may consult this list to find the Privacy Policy for
                        each of the advertising partners of{' '}
                        <span className="bold-text"> Lorem Ipsum</span>.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        Third-party ad servers or ad networks uses technologies
                        like cookies, JavaScript, or Web Beacons that are used
                        in their respective advertisements and links that appear
                        on <span className="bold-text"> Lorem Ipsum</span>,
                        which are sent directly to users' browser. They
                        automatically receive your IP address when this occurs.
                        These technologies are used to measure the effectiveness
                        of their advertising campaigns and/or to personalize the
                        advertising content that you see on websites that you
                        visit.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        Note that{' '}
                        <span className="bold-text"> Lorem Ipsum</span> has no
                        access to or control over these cookies that are used by
                        third-party advertisers.
                    </p>
                </div>

                <div className="privacy-policy-title">
                    <h3>Third-Party Privacy Policies</h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        <span className="bold-text"> Lorem Ipsum's</span>{' '}
                        Privacy Policy does not apply to other advertisers or
                        websites. Thus, we are advising you to consult the
                        respective Privacy Policies of these third-party ad
                        servers for more detailed information. It may include
                        their practices and instructions about how to opt-out of
                        certain options. You may find a complete list of these
                        Privacy Policies and their links here: Privacy Policy
                        Links.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        You can choose to disable cookies through your
                        individual browser options. To know more detailed
                        information about cookie management with specific web
                        browsers, it can be found at the browsers' respective
                        websites. What Are Cookies?
                    </p>
                </div>

                <div className="privacy-policy-title">
                    <h3>
                        CCPA Privacy Policy (Do Not Sell My Personal
                        Information)
                    </h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        Under the CCPA, among other rights, California consumers
                        have the right to:
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        Request that a business that collects a consumer's
                        personal data disclose the categories and specific
                        pieces of personal data that a business has collected
                        about consumers.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        Request that a business delete any personal data about
                        the consumer that a business has collected.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        Request that a business that sells a consumer's personal
                        data, not sell the consumer's personal data.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        If you make a request, we have one month to respond to
                        you. If you would like to exercise any of these rights,
                        please contact us.
                    </p>
                </div>

                <div className="privacy-policy-title">
                    <h3>GDPR Privacy Policy (Data Protection Rights)</h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        We would like to make sure you are fully aware of all of
                        your data protection rights. Every user is entitled to
                        the following:
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        The right to access – You have the right to request
                        copies of your personal data. We may charge you a small
                        fee for this service.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        The right to rectification – You have the right to
                        request that we correct any information you believe is
                        inaccurate. You also have the right to request that we
                        complete the information you believe is incomplete.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        The right to erasure – You have the right to request
                        that we erase your personal data, under certain
                        conditions.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        The right to restrict processing – You have the right to
                        request that we restrict the processing of your personal
                        data, under certain conditions.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        The right to object to processing – You have the right
                        to object to our processing of your personal data, under
                        certain conditions.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        The right to data portability – You have the right to
                        request that we transfer the data that we have collected
                        to another organization, or directly to you, under
                        certain conditions.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        If you make a request, we have one month to respond to
                        you. If you would like to exercise any of these rights,
                        please contact us.
                    </p>
                </div>

                <div className="privacy-policy-title">
                    <h3>Children's Information</h3>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        Another part of our priority is adding protection for
                        children while using the internet. We encourage parents
                        and guardians to observe, participate in, and/or monitor
                        and guide their online activity.
                    </p>
                </div>

                <div className="privacy-policy-content">
                    <p>
                        <span className="bold-text"> Lorem Ipsum</span> does not
                        knowingly collect any Personal Identifiable Information
                        from children under the age of 13. If you think that
                        your child provided this kind of information on our
                        website, we strongly encourage you to contact us
                        immediately and we will do our best efforts to promptly
                        remove such information from our records.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
