import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidPic from "../../img/covid/covid.jpg";

class Intro extends Component {

    render() {

        return (
            <div className="covid-intro">
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
                                <h2>We are COVID safe</h2>
                                <p>Goverment guidlines state that we can clean ovens in peoples homes. Please rest assured we will only do this by adhering strictly to the guidelines ensure we keep our customers and ourselves safe. All small businesses are being affected at this time and we hope that you will continue to support local businesess, including ours.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Intro;