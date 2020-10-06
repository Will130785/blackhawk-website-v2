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
        const styles = {
            contact: {
                company: {
                    fontSize: "1.8rem"
                },
                phone: {
                    fontSize: "1.6rem"
                }
            },
            social: {
                iconContainer: {
                    display: "flex"
                },
                
                socialIcon: {
                    height: "5rem",
                    width: "5rem"
                }
            },
            companyLogos: {
                logoContainer: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flexEnd"
                },
                Logo: {
                    width: "100%"
                }
            }

        }

        return (
            <div>
                <footer>
                    <Container>
                        <Row>
                            <Col lg={true}>
                                <p style={styles.contact.company}>Blackhawk Oven Cleaning & Property Services</p>
                                <p style={styles.contact.phone}>0345 257 8322</p>
                                <div style={styles.social.iconContainer}>
                                    <img style={styles.social.socialIcon} src={Facebook} />
                                    <img style={styles.social.socialIcon} src={Instagram} />
                                </div>
                            </Col>
                            <Col lg={true}>
                                <Row>
                                    <Col>
                                        <img style={styles.companyLogos.Logo} src={Google} />
                                    </Col>
                                    <Col>
                                        <img style={styles.companyLogos.Logo} src={Thompson} />
                                    </Col>
                                    <Col>
                                        <img style={styles.companyLogos.Logo} src={Yell} />
                                    </Col>
                                    <Col>
                                        <img style={styles.companyLogos.Logo} src={Three} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        )
    }
}

export default Footer;