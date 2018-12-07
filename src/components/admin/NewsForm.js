/**
 * News form Created by Abraham Bello on 11/21/2018.
 */
import React, { Component } from 'react';
import { ToastContainer, Container, Row, Col, Fa, Button, Input, toast } from 'mdbreact';
//import emailjs from 'emailjs-com';

class NewsForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.onChange  = this.onChange.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    resetForm = () => {
        this.setState({
            title: '',
            body: ''
          });
}


    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const news = {
            'id' : Math.floor(Math.random() * 1000099990),
            'title': this.state.title,
            'body': this.state.body
        }
        const newsArray = localStorage.getItem('news') ? JSON.parse(localStorage.getItem('news')) : []

        if(news.title && news.body !== "") {
            newsArray.push(news);
            localStorage.setItem('news', JSON.stringify(newsArray));
            toast.success("News added successfully",
                {
                    position: "top-right"
                }
            )
            this.props.history.push('/news');
        }else{
            toast.error("Kindly provide all details, thank you!",
                {
                    position: "top-right"
                }
            )
        }
    }
    componentDidMount(){
        window.scrollTo(0,0);
        const auth = JSON.parse(localStorage.getItem('auth'));
        if(auth === null){
            toast.error("Unauthorized access",
                {
                    position: "top-right"
                }
            )
            this.props.history.push('/auth/login')
        }
    }
        render() {
            return (
                <Container>
                    <section className="my-5">
                        <h2 className="h1-responsive font-weight-bold text-center my-5">Create News</h2>
                        <div className="card">
                            <Row>
                                <Col lg="8">
                                    <div className="card-body form">
                                        <Row>
                                            <Col md="6">
                                                <div className="md-form mb-0">
                                                    <Input
                                                        type="text"
                                                        id="form-contact-name"
                                                        name="title"
                                                        onChange={this.onChange}
                                                        value={this.state.title}
                                                        label="news title"
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
                                                        id="form-contact-body"
                                                        name="body"
                                                        onChange={this.onChange}
                                                        value={this.state.body}
                                                        label="Your message"
                                                        required
                                                    />
                                                    <Button tag="a" floating color="blue" size="lg" type="submit" onClick={this.onSubmit}>
                                                        <Fa icon="send-o"/>
                                                        CREATE
                                                    </Button>
                                                </div>
                                                <ToastContainer
                                                    hideProgressBar={true}
                                                    newestOnTop={true}
                                                    autoClose={15000}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div className="card-body contact text-center h-100 white-text">

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </Container>
            );
        }
        ;
    }

export default NewsForm;