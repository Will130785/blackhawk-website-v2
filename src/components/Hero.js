import React, {Component} from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoBig from "../img/logo/logo3d.jpeg";

class Hero extends Component {
    
    render() {

        const style = {
            heading: {
                fontSize: "5rem"
            },
            paragraph: {
                fontSize: "1.8rem"
            }
        }
        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col lg={true}>
                            <img className="logo-big" src={LogoBig} alt="Logo"/>
                        </Col>
                        <Col lg={true}>
                            <h1 style={style.heading}>{this.props.title}</h1>
                            <p style={style.paragraph}>{this.props.blurb}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            
        )
    }
}

export default Hero;