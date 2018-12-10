/**
 * Testimonials Created by Abraham Bello on 11/10/2018.
 */

import React, { Component } from 'react';
import { Container, Row, Col } from 'mdbreact';

class Testimonials extends Component {
  render() {
    return(
        <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">TESTIMONIAL</h2>
          <p className="dark-grey-text w-responsive mx-auto mb-5">Parents are impressed with our quality and they have the following to say about us.</p>
          <Row>
              <Col lg="4" md="12" className="mb-lg-0 mb-4">
                  <div className="card testimonial-card">
                        <div className="card-up blue-gradient">
                        </div>
                        <div className="avatar mx-auto white">
                            <img src="https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/unnamed_2_p4errr/blackout-eid-black-muslims-reflections.jpg" className="rounded-circle img-fluid" alt="great school" />
                        </div>

                        <div className="card-body">
                            <h4 className="mt-1">
                                <strong>Alhaja O. Fatima</strong>
                            </h4>
                            <hr/>
                            <p className="dark-grey-text">I feel so blessed every day that my kids attend the Islamic Group of Schools. You have managed to do what I assumed could not be done in a school</p>
                        </div>
                    </div>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                  <div className="card testimonial-card">
                        <div className="card-up blue-gradient">
                        </div>
                        <div className="avatar mx-auto white">
                            <img src="https://media.istockphoto.com/photos/portrait-of-man-on-white-background-picture-id509732318?k=6&m=509732318&s=612x612&w=0&h=jsZZ58OR0CEuAz-nd6J-hM5cvAq4Tq4Qxl4_i9Ke7IE=" className="rounded-circle img-fluid" alt="audu" />
                        </div>

                        <div className="card-body">
                            <h4 className="mt-1">
                                <strong>Alhaji O. Habib</strong>
                            </h4>
                            <hr/>
                            <p className="dark-grey-text">I feel so blessed every day that my kids attend the Islamic Group of Schools. You have managed to do what I assumed could not be done in a school</p>
                        </div>
                    </div>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
                  <div className="card testimonial-card">
                        <div className="card-up blue-gradient">
                        </div>
                        <div className="avatar mx-auto white">
                            <img src="https://s2.r29static.com//bin/entry/fb1/720x864,80/1945147/image.jpg" className="rounded-circle img-fluid" alt="impressive"/>
                        </div>

                        <div className="card-body">
                            <h4 className="mt-1">
                                <strong>Kansola Abdulrabat</strong>
                            </h4>
                            <hr/>
                            <p className="dark-grey-text">I feel so blessed every day that my kids attend the Islamic Group of Schools. You have managed to do what I assumed could not be done in a school</p>
                        </div>
                    </div>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default Testimonials;