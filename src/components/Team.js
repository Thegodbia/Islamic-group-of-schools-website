/**
 * Management team page Created by Abraham Bello on 11/10/2018.
 */
import React, { Component } from 'react';
import { Container, Row, Col } from 'mdbreact';

class TeamPage extends Component {
    render() {
        return (
            <Container>
                <section>
                    <h2 className="h1-responsive font-weight-bold my-5 text-center">MANAGEMENT TEAM</h2>
                    <p className="w-responsive mx-auto mb-5">
                        Our Management Team offers the perfect combination of knowledge, skills and experience in all aspects of education.
                    </p>
                    <Row>
                        <Col lg="3" md="6"  className="mb-lg-0 mb-5">
                            <img src="https://via.placeholder.com/150" className="avatar rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
                            <h5 className="font-weight-bold mt-4 mb-3">PRINCIPAL</h5>
                            <p className="text-uppercase blue-text">PRINCIPAL</p>
                            <ul className="list-unstyled mb-0">
                            </ul>
                        </Col>
                        <Col lg="3" md="6"  className="mb-lg-0 mb-5">
                            <img src="https://via.placeholder.com/150" className="avatar rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
                            <h5 className="font-weight-bold mt-4 mb-3">PRINCIPAL</h5>
                            <p className="text-uppercase blue-text">PRINCIPAL</p>
                            <ul className="list-unstyled mb-0">
                            </ul>
                        </Col>
                        <Col lg="3" md="6"  className="mb-lg-0 mb-5">
                            <img src="https://via.placeholder.com/150" className="avatar rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
                            <h5 className="font-weight-bold mt-4 mb-3">PRINCIPAL</h5>
                            <p className="text-uppercase blue-text">PRINCIPAL</p>
                            <ul className="list-unstyled mb-0">
                            </ul>
                        </Col>
                        <Col lg="3" md="6"  className="mb-lg-0 mb-5">
                            <img src="https://via.placeholder.com/150" className="rounded-circle z-depth-1 img-fluid" alt="Sample avatar"/>
                            <h5 className="font-weight-bold mt-4 mb-3">PRINCIPAL</h5>
                            <p className="text-uppercase blue-text">PRINCIPAL</p>
                            <ul className="list-unstyled mb-0">
                            </ul>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    }
}

export default TeamPage;