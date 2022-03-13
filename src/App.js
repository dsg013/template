import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Screens/Home'
import PrivacyPolicy from './Screens/PrivacyPolicy'
import TermsAndConditions from './Screens/TermsAndConditions'
import CookiePolicy from './Screens/CookiePolicy'
import Environment from './Screens/Environment'
import Money from './Screens/Money'
import Politics from './Screens/Politics'
import Travel from './Screens/Travel'
import PDF from './Screens/PDF'
import ArticleOne from './Screens/ArticleOne'
import ArticleTwo from './Screens/ArticleTwo'
import ArticleThree from './Screens/ArticleThree'

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                        <Route
                            path="/terms-and-conditions"
                            element={<TermsAndConditions />}
                        />
                        <Route
                            path="/cookie-policy"
                            element={<CookiePolicy />}
                        />
                        <Route path="/environment" element={<Environment />} />
                        <Route path="/money" element={<Money />} />
                        <Route path="/politics" element={<Politics />} />
                        <Route path="/travel" element={<Travel />} />
                        <Route path="/pdf" element={<PDF />} />
                        <Route
                            path="/articles/blockchain-technology-is-changing-the-real-estate-industry"
                            element={<ArticleOne />}
                        />
                        <Route
                            path="/articles/blockchain-technology-could-revolutionize-these-spaces-in-2022"
                            element={<ArticleTwo />}
                        />
                        <Route
                            path="/articles/jp-morgan-expands-crypto-footprint-with-investment-in-blockchain"
                            element={<ArticleThree />}
                        />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    )
}

export default App
