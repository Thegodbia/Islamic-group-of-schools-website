/**
 * Created by Abraham Bello on 11/24/2018.
 */
import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, toast, ToastContainer } from 'mdbreact';
import Config from '../../config';

class LoginPage extends Component  {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onChange  = this.onChange.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
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
        const auth = {
                username: this.state.username,
                password: this.state.password
            }
        if(auth.username || auth.password === ""){
            toast.error("Kindly provide correct credentials, thank you!",
                        {position: "top-right"
                        }
            )
        }
        if(auth.username === Config.username && auth.password === Config.password){
            localStorage.setItem('auth', JSON.stringify(auth));
            toast.success("logged in successfully",
                {
                    position: "top-right"
                }
            )
            this.props.history.push('/news');
        }
    }

  render() {
    return(
      <Container>
          <h2 className="h1-responsive font-weight-bold text-center my-5">Admin Login</h2>
          <Row>
              <Col md="2"></Col>
              <Col lg="7" xl="8">
                  <form>
                      <div className="grey-text">
                        <Input
                            label="Type your email"
                            icon="envelope"
                            group type="text"
                            name="username"
                            onChange={this.onChange}
                            value={this.state.username}
                        />
                        <Input
                            label="Type your password"
                            icon="lock"
                            group type="password"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                      </div>
                      <div className="text-center">
                        <Button className="indigo" type="submit" onClick={this.onSubmit}>Login</Button>
                      </div>
                      <ToastContainer
                          hideProgressBar={true}
                          newestOnTop={true}
                          autoClose={15000}
                      />
                  </form>
              </Col>
          </Row>
      </Container>
    );
  }
};

export default LoginPage;