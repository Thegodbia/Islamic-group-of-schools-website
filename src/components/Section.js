/**
 * Created by Abraham Bello on 11/10/2018.
 */
import React, { Component } from 'react';
import { Mask, Row, Col, View, Container } from 'mdbreact';
import Schools from './Schools';
import Features from './Features';

export default class Jumbo extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
  render(){
      return (
          <div id="apppage">
              <View>
                <Mask className="d-flex justify-content-center align-items-center gradient">
                <Container>
                  <Row>
                    <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                      <h1 className="h1-responsive font-weight-bold mt-sm-5">ISLAMIC GROUP OF SCHOOLS, EDE </h1>
                      <hr className="hr-light"/>
                      <h4 className="mb-4">...Read in the name of thy Lord!</h4>
                    </div>
                    <Col md="6" xl="5" className="mt-xl-5 text-center">
                      <img src={require('../igs.png')} className="img-fluid" alt="school logo" />
                    </Col>
                    </Row>
                  </Container>
                </Mask>
              </View>
              <Schools/>
              <Features/>
              </div>
    );
  }
};
