/**
 * Contact Created by Abraham Bello on 11/10/2018.
 */
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col, Fa, Button, Input } from 'mdbreact';
import axios from 'axios';

class ContactPage extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.onChange  = this.onChange.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: ''
          });
}

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        e.target.className += ' was-validated';
        const contact = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }

        if(contact.name || contact.email || contact.message === ""){
            toast.error("Kindly provide all details, thank you!",
                        {
                            position: "top-right",
                            autoClose: 15000,
                            hideProgressBar: false
                        }
            )
        }else{
            axios.post('/api/send', contact)
        .then(res => {
                if(res.data.Success){
                    toast.success(res.data.Success,
                        {position: "top-right"
                        }
                    );
                   this.resetForm();
                }
            })
        .catch(err => console.log(err))
        }
    }

  render() {
    return(
      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
          <div className="card">
                <Row>
                  <Col lg="8">
                    <div className="card-body form needs-validation" noValidate>
                      <h3 className="mt-4">
                        <Fa icon="envelope" className="pr-2"/>Write to us:
                      </h3>
                      <Row>
                        <Col md="6">
                          <div className="md-form mb-0">
                            <Input
                                type="text"
                                id="form-contact-name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                                label="Your name"
                                required
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="md-form mb-0">
                            <Input
                                type="email"
                                id="form-contact-email"
                                name="email"
                                onChange={this.onChange}
                                value={this.state.email}
                                label="Your email"
                                required
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <div className="md-form mb-0">
                            <Input
                                type="textarea"
                                id="form-contact-message"
                                name="message"
                                onChange={this.onChange}
                                value={this.state.message}
                                label="Your message"
                                required
                            />
                            <Button tag="a" floating color="blue" size="lg" type="submit" onClick={this.onSubmit}>
                              <Fa icon="send-o"/>SEND
                            </Button>
                            <ToastContainer />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="card-body contact text-center h-100 white-text">
                      <h3 className="my-4 pb-2">Contact information</h3>
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
                          <a  href="/" className="p-2 fa-lg w-ic white-text">
                            <Fa icon="facebook"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
          </div>
        </section>
      </Container>
    );
  };
}

export default ContactPage;