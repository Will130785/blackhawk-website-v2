import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Family extends Component {
    
    render() {
        const styles = {
            image: {
                pic: {
                    width: "100%",
                    height: "100%"
                }
            },
            whyChoose: {
                title: {
                    fontSize: "4rem"
                },
                listItems: {
                    fontSize: "2rem"
                },
                subHeading: {
                    fontSize: "3rem"
                },
                paragraph: {
                    fontSize: "2rem"
                }
            }
        }

        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={true}>
                        <h2 style={styles.whyChoose.title}>Why Choose us?</h2>
                            <ul style={styles.whyChoose.listItems}>
                                <li>Family run business</li>
                                <li>Fully insured</li>
                                <li>Totaly mess free</li>
                                <li>Competitive prices</li>
                                <li>Highest level oven clenaing</li>
                                <li>Fully trained & friendly staff</li>
                                <li>Flexible hours to suit you</li>
                                <li>Most importantly our technicians will not leave until you are totally happy with their work. ` Customer satisfaction is a must for us !</li>
                            </ul>
                        </Col>
                        <Col lg={true}>
                            <h2 style={styles.whyChoose.title}>We cover the following areas</h2>  
                            <ul style={styles.whyChoose.listItems}>
                                <h3 style={styles.whyChoose.subHeading}>Surrey</h3>
                                <li>Sutton</li>
                                <li>Epsom</li>
                                <li>Morden</li>
                                <li>Tadworth</li>
                                <li>Reigate</li>
                                <h3 style={styles.whyChoose.subHeading}>South West London</h3>
                                <li>Clapham</li>
                                <li>Balham</li>
                                <li>Mitcham</li>
                                <li>Streatham</li>
                            </ul>
                            <p style={styles.whyChoose.paragraph}>If your area is not listed, please do give us a call and we will try our best to accomodate you.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Family;