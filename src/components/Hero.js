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
                fontSize: "6rem"
            },
            paragraph: {
                fontSize: "1.8rem"
            },
            background: {
                backgroundColor: "#000"
            },
            content: {
                display: "flex",
                flexDirection: "column",
                textAlign: "center"
            }
        }
        return (
            <Jumbotron style={style.background}>
                <Container>
                    <Row>
                        <Col className="headLogo" lg={true}>
                            <img className="logo-big" src={LogoBig} alt="Logo"/>
                        </Col>
                        <Col style={style.content} lg={true}>
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