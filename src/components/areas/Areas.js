import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Areas extends Component {


    render() {

        return(
            <div className="areas">
                <Container>
                    <Row>
                        <Col lg={true}>
                            <div className="areas__col1">
                                <h2>Surrey</h2>
                                <ul>
                                    <li>Sutton</li>
                                    <li>Epsom</li>
                                    <li>Morden</li>
                                    <li>Tadworth</li>
                                    <li>Reigate</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={true}>
                            <div className="areas__col2">
                                <h2>South West London</h2>
                                <ul>
                                    <li>Croydon</li>
                                    <li>Clapham</li>
                                    <li>Balham</li>
                                    <li>Mitcham</li>
                                    <li>Streatham</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Areas;