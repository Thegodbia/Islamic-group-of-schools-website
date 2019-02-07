/**
 * About Page Created by Abraham Bello on 11/10/2018.
 */
import React, { Component } from 'react';
import { Container, Row, Col } from 'mdbreact';
import TeamPage from './Team';

class AboutPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
  render() {
    return(
      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">About Islamic Group of Schools</h2>
          <div className="card">
            <Row>
              <Col>
                <div className="card-body font-weight-bold text-center ">
                    <p className="lead black-text w-responsive text-center mx-auto mb-5">Islamic Group of school is a product of vision aimed to provide Muslim community with the right mix of Islamic &amp; western education to the highest international standard.
                        Founded by Sheikh Salahudeen Ade Olayiwola, the three schools operate under three different heads but all with the same management team that is carefully selected from the different part of the country.
                    </p>
                    <p className="lead black-text w-responsive text-center mx-auto mb-5">Islamic Institute was the first to be established in 1966 while the Nursery &amp; primary school and comprehensive college(ICC) were established in 1994 &amp; 1996 respectively.
                    The school admits both male &amp; female each with separate boarding facilities from all over Nigeria.<br />
                    We offer pupils who come to our school the best of two educations; quality secular education that qualifies them for admission anywhere in the world &amp; religion education which gives them a broad understanding of Islam &amp; other faiths.
                    </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
          <TeamPage/>
      </Container>
    );
  };
}

export default AboutPage;