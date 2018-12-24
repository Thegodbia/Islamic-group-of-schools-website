/**
 * Created by Abraham Bello on 11/24/2018.
 */
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col, Input, Button} from 'mdbreact';
//import Config from '../../config';
import axios from 'axios';
import { AsyncStorage } from 'AsyncStorage';

class LoginPage extends Component  {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            user: {}
        }
        this.onChange  = this.onChange.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);

    }

    onSubmit(e){
        e.preventDefault();
        const user = {
                identifier: this.state.username,
                password: this.state.password
            }
        if(user.identifier === "" || user.password === ""){
            toast.error("Kindly provide correct credentials, thank you!",
                        {position: "top-right"
                        }
            )
        }

        if(user.identifier && user.password !== ""){
 /*       if(auth.username === Config.username && auth.password === Config.password){
            localStorage.setItem('auth', JSON.stringify(auth));
            toast.success("logged in successfully",
                {
                    position: "top-right"
                }
            )
            this.props.history.push('/news');
        }*/
        axios
            .post('http://localhost:1337/auth/local', user)
            .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
                AsyncStorage.setItem('auth', response.data);
                if(response){
                     toast.success("logged in successfully",
                {
                    position: "top-right"
                }
                )
                }
                this.props.history.push('/news');
            })
            .catch(error => {
            // Handle error.
            console.log('An error occurred:', error);
            });
    }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
                            label="Type your username"
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
                            autoComplete="off"
                        />
                      </div>
                      <div className="text-center">
                        <Button className="indigo" type="submit" onClick={this.onSubmit}>Login</Button>
                      </div>
                      <ToastContainer
                          hideProgressBar={false}
                          newestOnTop={true}
                          autoClose={5000}
                      />
                  </form>
              </Col>
          </Row>
      </Container>
    );
  }
};

export default LoginPage;