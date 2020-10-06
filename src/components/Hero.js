import React, {Component} from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoBig from "../img/logo/logo3d.jpeg";

class Hero extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <img className="logo-big" src={LogoBig} alt="Logo"/>
                        </Col>
                        <Col>
                            <h1>{this.props.title}</h1>
                            <p>{this.props.blurb}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            
        )
    }
}

export default Hero;