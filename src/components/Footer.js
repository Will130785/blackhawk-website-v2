import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Facebook from "../img/footer/facebook-round-line-color.svg";
import Instagram from "../img/footer/instagram-color.svg";
import Google from "../img/footer/google-logo.png";
import Thompson from "../img/footer/thompson.jpg";
import Yell from "../img/footer/Yell_RGB.png";
import Three from "../img/footer/TBRBadgetransbackground.png";

class Footer extends Component {

    render() {

        return (
                <footer className="footer">
                    <Container>
                        <Row>
                            <Col lg={true}>
                                <div className="footer__contact">
                                    <p className="footer__contact--company">Blackhawk Oven Cleaning & Property Services</p>
                                    <p className="footer__contact--phone">0345 257 8322</p>
                                    <div className="footer__social-container">
                                        <img className="footer__social-container--icon" src={Facebook} alt="Facebook Logo" />
                                        <img className="footer__social-container--icon" src={Instagram} alt="Instagram Logo" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={true}>
                                    <div className="footer__company">
                                        <figure className="footer__company--image">
                                            <img className="footer__company--pic" src={Google} alt="Google Logo" /> 
                                        </figure>
                                        <figure className="footer__company--image">
                                            <img className="footer__company--pic" src={Thompson} alt="Google Logo" /> 
                                        </figure>
                                        <figure className="footer__company--image">
                                            <img className="footer__company--pic" src={Yell} alt="Google Logo" /> 
                                        </figure>
                                        <figure className="footer__company--image">
                                            <img className="footer__company--pic" src={Three} alt="Google Logo" /> 
                                        </figure>
                                    </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
        )
    }
}

export default Footer;