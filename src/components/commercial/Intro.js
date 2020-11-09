import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SiteButton from "../SiteButton";
import PriceLogo from "../PriceLogo";

class Intro extends Component {

    render() {

        return (
            <div className="commercial-intro">
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
                                <h2>Commercial Cleaning</h2>
                                <p>Please email us at enquiries@blackhawkovencleaning.co.uk or call us to discuss further. </p>
                                <SiteButton location="/contact" content="Contact us now" />
                                <PriceLogo />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Intro;