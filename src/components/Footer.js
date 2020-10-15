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
            footer: {
                overall: {
                    padding: "5rem 0",
                    backgroundColor: "#fff"
                }
            },
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
                    justifyContent: "space-between",
                    width: "100%"
                },
                imageContainer: {
                    width: "15%"
                },
                Logo: {
                    width: "100%",
                }
            }

        }

        return (
                <footer style={styles.footer.overall}>
                    <Container>
                        <Row>
                            <Col lg={true}>
                                <p style={styles.contact.company}>Blackhawk Oven Cleaning & Property Services</p>
                                <p style={styles.contact.phone}>0345 257 8322</p>
                                <div style={styles.social.iconContainer}>
                                    <img style={styles.social.socialIcon} src={Facebook} alt="Facebook Logo" />
                                    <img style={styles.social.socialIcon} src={Instagram} alt="Instagram Logo" />
                                </div>
                            </Col>
                            <Col lg={true}>
                                    <div style={styles.companyLogos.logoContainer}>
                                        <figure style={styles.companyLogos.imageContainer}>
                                            <img style={styles.companyLogos.Logo} src={Google} alt="Google Logo" /> 
                                        </figure>
                                        <figure style={styles.companyLogos.imageContainer}>
                                            <img style={styles.companyLogos.Logo} src={Thompson} alt="Google Logo" /> 
                                        </figure>
                                        <figure style={styles.companyLogos.imageContainer}>
                                            <img style={styles.companyLogos.Logo} src={Yell} alt="Google Logo" /> 
                                        </figure>
                                        <figure style={styles.companyLogos.imageContainer}>
                                            <img style={styles.companyLogos.Logo} src={Three} alt="Google Logo" /> 
                                        </figure>
                                    </div>
                                    {/* <Col>
                                        <img style={styles.companyLogos.Logo} src={Google} alt="Google Logo" />
                                    </Col>
                                    <Col>
                                        <img style={styles.companyLogos.Logo} src={Thompson} alt="Thompson Logo" />
                                    </Col>
                                    <Col>
                                        <img style={styles.companyLogos.Logo} src={Yell} alt="Yell Logo" />
                                    </Col>
                                    <Col>
                                        <img style={styles.companyLogos.Logo} src={Three} alt="Three Logo" />
                                    </Col> */}
                            </Col>
                        </Row>
                    </Container>
                </footer>
        )
    }
}

export default Footer;