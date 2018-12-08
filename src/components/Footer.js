/**
 * Footer section Created by Abraham Bello on 11/10/2018.
 */
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Fa, Row, Footer } from "mdbreact";
import Testimonials from './Testimonials'

class FooterPage extends Component {
render() {
return (
    <div>
        <Testimonials/>
        <Footer color="blue" className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
            <Row>
              <Col md="6">
              <h5 className="title"><strong>ISLAMIC GROUP OF SCHOOLS</strong></h5>
              <ul className="text-lg-left list-unstyled ml-4">
                    <li>
                        <p><Fa icon="map-marker" className="pr-2"/>No.3 Islamic Street</p>
                        <p><Fa icon="map-marker" className="pr-2"/>P. O. Box 3</p>
                        <p><Fa icon="map-marker" className="pr-2"/>Ede, Osun state</p>
                    </li>
                    <li>
                      <p><Fa icon="phone" className="pr-2"/>(234) 07036263592</p>
                    </li>
                    <li>
                      <p><Fa icon="envelope" className="pr-2"/>info@islamicgroupofschool.com</p>
                    </li>
                  </ul>
                  <hr className="hr-light my-4"/>
                  <ul className="list-inline text-center list-unstyled">
                      <li className="list-inline-item">
                          <a href="https://www.facebook.com/islamicgroupofschool" size="lg" className="p-2 fa-lg w-ic">
                              <Fa icon="facebook"/> FACEBOOK
                          </a>
                      </li>
                  </ul>
              </Col>
              <Col md="3">
              <ul>
                <li className="list-unstyled">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/news">News</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/enrol">Admissions</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="http://www.islamicgroupofschool.com">Islamic Group of Schools</a>
              <p>Designed by{" "}<a href="http://www.simplyhight.com">simplyhight</a></p>
            </Container>
          </div>
        </Footer>
    </div>

);
}
}

export default FooterPage;