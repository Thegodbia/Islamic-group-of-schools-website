/**
 * News component Created by Abraham Bello on 11/13/2018.
 */
import React, { Component } from 'react';
import { Container, Row, Col, Mask, View} from 'mdbreact';

class NewsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const news = JSON.parse(localStorage.getItem('news'));
        if (news === null) {
            return (
                <Container>
                    <h2 className="h1-responsive font-weight-bold text-center my-5">Islamic Group of Schools News</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Stay updated with the latest happenings in our schoool.</p>
                    <Row>
                        <Col lg="5" xl="4">
                            <View hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                    <Mask overlay="white-slight"/>
                            </View>
                        </Col>
                        <Col lg="7" xl="8">
                            <div>
                                <p className="dark-grey-text">
                                    no news yet, check back later.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <hr className="my-5"/>
                </Container>
            );
        } else {
            return (
                <Container>
                    <h2 className="h1-responsive font-weight-bold text-center my-5">Islamic Group of Schools News</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Stay updated with the latest happenings in our schoool.</p>
                    <Row>
                        <Col lg="5" xl="4">
                            <View hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                    <Mask overlay="white-slight"/>
                            </View>
                        </Col>
                        <Col lg="7" xl="8">
                        { news.map((item => {
                            return (
                                <div key={item.id}>
                                    <h3 className="font-weight-bold mb-3 p-0">
                                        <strong>{item.title}</strong>
                                    </h3>
                                    <p className="dark-grey-text">
                                {item.body}
                                    </p>
                                </div>
                            )
                        }))
                            }
                        </Col>
                    </Row>
                    <hr className="my-5"/>
                </Container>
            );
        }
    };
}
export default NewsPage;