import React, {Component} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SiteButton from "../components/SiteButton";


class Hero extends Component {
    
    render() {

       
        return (
            
            <Jumbotron className="hero">
                <Container>
                    <Row>
                        <Col lg={true}>
                            <div className="hero__header">
                                <h2>Welcome to</h2>
                                <h1><span className="black">BLACK</span><span className="hawk">HAWK</span></h1>
                                <h2>OVEN CLEANING & PROPERTY SERVICES</h2>
                                <p>The future of oven cleaning and property care services! Get in contact now for a free quote</p>
                                <SiteButton location="/contact" content="Free Quote" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            
        )
    }
}

export default Hero;