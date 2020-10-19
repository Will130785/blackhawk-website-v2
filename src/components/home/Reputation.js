import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Reputation extends Component {

    render() {

        return (
            <div className="reputation">
                <Container>
                    <Row>
                        <Col lg={true}>
                            <div className="reputation__heading">
                                <h2>REPUTATION MATTERS</h2>
                            </div>
                        </Col>
                        <Col lg={true}>
                            <div className="reputation__content">
                                <h2>Recommended by</h2>
                                <ul>
                                    <li>Hollyoaks star Richard Blackwood</li>
                                    <li>Love Island 2017 contestant Tyla Carr</li>
                                    <li>UK Garage artist Dennis G (sambuca)</li>
                                    <li>Author of the book The Lost Boyz Justin Rollins</li>
                                    <li>Former Britain's got talent contestant DJ Talent</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Reputation;