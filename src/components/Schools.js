/**
 * Created by Abraham Bello on 11/10/2018.
 */

import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'mdbreact';
import { Link } from 'react-router-dom';

class Schools extends Component {
  render() {
    return(
      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">OUR SCHOOLS</h2>
          <Row>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Nursery & Primary</h4>
                  <p className="grey-text">The Nursery & Primary school has a curriculum designed & enriched to achieve the primary objective of developing the child’s potential multi-dimensionally, spiritually, morally, psychologically, intellectually, physically & socially.</p>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Comprehensive College</h4>
                  <p className="grey-text">Islamic Comprehensive College have recorded landmark of achievements with several merit awards both locally and internationally. The school have also produced doctors, lawyers, engineers, journalists, teachers, and professionals from all works of life.</p>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Islamic Institute</h4>
                  <p className="grey-text">Islamic Institute was established, from the Madrasatul-Atfaal, in 1966, at the former Igbo Osaara and it has recorded tremendous achievements. It has several affiliation to Local and International Universities.</p>
                </Col>
              </Row>
            </Col>
            <Col lg="12" md="9" size="12" className="text-center">
                  <h4 className="font-weight-bold"> </h4>
                  <p className="grey-text"></p>
                  <Button color="purple" size="lg"><Link className="text-white" to="/enrol"><h4>ENROLL TO OUR SCHOOLs</h4></Link></Button>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default Schools;