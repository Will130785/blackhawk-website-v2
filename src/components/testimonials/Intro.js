import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SiteButton from "../SiteButton";

class Intro extends Component {

    render() {

        return (
            <div className="testimonial-intro">
                <Container>
                    <Row>
                    {/* <Col lg={true}>
                            <div>
                                <img className="area-intro__pic" src={Logo3d} alt="3d Logo" />
                            </div>
                        </Col> */}
                        <Col lg={true}>
                            {/* <div>
                                <img className="covid-intro__pic" src={CovidPic} alt="3d Logo" />
                            </div> */}
                            <div>
                                <h2>Testimonials</h2>
                                <p>See what some of our customers have to say about our services</p>
                                <SiteButton location="/contact" content="Get in contact" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Intro;