import React, {Component} from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoBig from "../img/logo/logo-big.jpg";

class Hero extends Component {
    
    render() {

       
        return (
            <Jumbotron className="hero">
                <Container>
                    <Row>
                        <Col className="headLogo" lg={true}>
                            <img className="logo-big" src={LogoBig} alt="Logo"/>
                        </Col>
                        <Col lg={true}>
                            <div className="hero__header">
                                <h1>Welcome to Blackhawk Oven Cleaning & Property Services</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            
        )
    }
}

export default Hero;