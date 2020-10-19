import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutPic from "../../img/oven-cleaning/oven1.jpeg";

class About extends Component {
    

    render() {
        return (
            <div className="about">
                <Container>
                    <Row>
                        <Col lg={true}>
                            <div className="about__content">
                                <h2>About Us</h2>
                                <p>Our Success and reputation is based on our professionalism and quality of Oven and Cooker cleaning results. Over 10 years of experience, We place a lot of importance on customer service and Satisfaction and with this we ensure all our processes are simple and hassle free, so you have a peace of mind.</p>
                                <p>We provide the highest standard of domestic oven cleaning services at competitive prices. Our experienced and trained team of professional oven cleaners have the talent required for everything oven related including hobs, grills and extractors. On top of ovens we clean microwaves and barbeques too.</p>
                            </div>
                        </Col>
                        <Col lg={true}>
                            <div className="about__img">
                                <img className="about__img--pic" src={aboutPic} alt="3D Logo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;