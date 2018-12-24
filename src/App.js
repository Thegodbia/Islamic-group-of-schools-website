import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
 * import components
 */

import NavbarFeatures from './components/Navbar';
import Jumbo from './components/Section';
import FooterPage from './components/Footer';
import ContactPage from './components/Contact';
import AboutPage from './components/About';
import NewsPage from './components/News';
import EnrolPage from './components/Enrolment';
import NewsForm from './components/admin/NewsForm';
import LoginPage from './components/admin/Login';
import LightBox from './components/Gallery';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <NavbarFeatures />
                <Route exact path="/" component={Jumbo} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/news" component={NewsPage} />
                <Route exact path="/enrol" component={EnrolPage} />
                <Route exact path="/gallery" component={LightBox} />
                <Route exact path="/admin/news-form" component={NewsForm} />
                <Route exact path="/auth/login" component={LoginPage} />
                <FooterPage/>
            </div>
        </Router>
    );
  }
}

export default App;