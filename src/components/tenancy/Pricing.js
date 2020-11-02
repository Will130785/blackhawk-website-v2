import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import PriceCard from "./PriceCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import flatsPic from "../../img/tenancy/flats.jpg";
import housePic from "../../img/tenancy/houses.jpg";

class Pricing extends Component {


    render() {

        return (
            <div className="pricing">
                <Container>
                    <h2>Our Prices</h2>
                    <div className="pricing__cards">
                        <Row>
                            <Col lg={true}>
                                <PriceCard picture={flatsPic} description="1 Bedroom Flat - End of Tenancy" price="2hr | £150"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="2 Bedroom Flat - End of Tenancy" price="2hr 30 mins | £230"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="3 Bedroom Flat - End of Tenancy" price="2hr 45 mins | £320"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="4 Bedroom Flat - End of Tenancy" price="3hr 15 mins | £360"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="5 Bedroom Flat - End of Tenancy" price="3hr 55mins | £440"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={housePic} description="1 Bedroom House - End of Tenancy" price="2hr 30mins | £160"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true}>
                            <PriceCard picture={housePic} description="2 Bedroom House - End of Tenancy" price="3hr | £250"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={housePic} description="3 Bedroom House - End of Tenancy" price="3hr 35mins | £350"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={housePic} description="4 Bedroom House - End of Tenancy" price="4hr | £410"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true}>
                            <PriceCard picture={housePic} description="5 Bedroom House - End of Tenancy" price="4hr 35mins | £500"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="1 Bedroom Flat - Standard Cleaning" price="2hr | £30"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="2 Bedroom Flat - Standard Cleaning" price="3hr | £45"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="3 Bedroom Flat - Standard Cleaning" price="4hr | £60"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="4 Bedroom Flat - Standard Cleaning" price="5hr | £75"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={housePic} description="1 Bedroom House - Standard Cleaning" price="3hr | £45"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true}>
                            <PriceCard picture={housePic} description="2 Bedroom House - Standard Cleaning" price="4hr | £60"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={housePic} description="3 Bedroom House - Standard Cleaning" price="5hr | £75"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={housePic} description="4 Bedroom House - Standard Cleaning" price="6hr | £90"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="Offices Request Quote" price="5min | Free Quote"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="1 Bedroom Flat - Spring Clean" price="2hr | £150"/>
                            </Col>
                            <Col lg={true}>
                            <PriceCard picture={flatsPic} description="1 Bedroom House - Builders Clean Domestic" price="2hr | £150"/>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Pricing;