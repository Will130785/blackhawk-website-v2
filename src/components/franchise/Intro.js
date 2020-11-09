import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo3d from "../../img/logo/logo-trans2.png";

class Intro extends Component {

    render() {

        return (
            <div className="franchise-intro">
                <Container>
                    <Row>
                        <Col lg={true}>
                            <div>
                                <img className="franchise-intro__pic" src={Logo3d} alt="3d Logo" />
                            </div>
                            <div>
                                <h2>Oven cleaning Franchise Opportunities</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Intro;