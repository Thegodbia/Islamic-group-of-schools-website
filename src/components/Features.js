/**
 * Created by Abraham Bello on 11/10/2018.
 */

import React, { Component } from 'react';
import { Container, Row, Col, Fa } from 'mdbreact';

class Features extends Component {
  render() {
    return(
      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">WHY PARENTS CHOOSE US?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Parents choose Islamic group of schools because we offer educational excellence with exceptional facilities.</p>
          <Row>
            <Col md="4">
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="laptop" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">ICT CENTER</h5>
                  <p className="grey-text">The ICT department has been instrumental in supporting the teaching and learning process in the school thereby making the heartbeat of ICT function in the school beat with efficiency and strength.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="futbol-o" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">SPORT FACILITIES</h5>
                  <p className="grey-text">Standard football field; volleyball courts Table tennis courts; Handball court.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="bus" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">TRANSPORTATION</h5>
                  <p className="grey-text">Three school buses and a staff bus.</p>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="text-name">
              <img className="img-fluid" src="https://cdn.pixabay.com/photo/2016/04/14/10/07/book-1328584__340.png" alt="Sample" />
            </Col>
            <Col md="4">
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="flask" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">STANDARD LABORATORIES</h5>
                  <p className="grey-text">3 standard science laboratories (chemistry, Physics, Biology & Home Economics).</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="book" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">LIBRARY</h5>
                  <p className="grey-text">Our well-stocked library offers a wide range of books, daily newspapers, periodicals, current journals, and educational reports.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="home" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">ACCOMMODATION</h5>
                  <p className="grey-text">Standard accommodation facilities for intending students with staff quarters.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default Features;