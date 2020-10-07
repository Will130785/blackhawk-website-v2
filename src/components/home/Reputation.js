import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Reputation extends Component {

    render() {

        const styles = {
            containerDiv: {
                overall: {
                    padding: "10rem 0 10rem 0"
                }
            },
            listItems: {
                fontSize: "2rem"
            },
            heading: {
                fontSize: "5rem"
            },
            cols: {
                title: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }
        }
        return (
            <div style={styles.containerDiv.overall}>
                <Container>
                    <Row>
                        <Col lg={{span: 6, order: 1}} xs={{span: 12, order: 2}}>
                            <ul style={styles.listItems}>
                                <li>Hollyoaks star Richard Blackwood</li>
                                <li>Love Island 2017 contestant Tyla Carr - "Amazing job. I will definitely recommend to my family and friends"</li>
                                <li>UK Garage artist Dennis G (sambuca) - "Excellent service. Highly recommended"</li>
                                <li>Author of the book The Lost Boyz Justin Rollins - "Oven is literally brand new! Great service"</li>
                                <li>Former Britain's got talent contestant DJ Talent - "Very impressed with my new oven"</li>
                            </ul>
                        </Col>
                        <Col className="repTitle" style={styles.cols.title} lg={{span: 6, order: 2}} xs={{span: 12, order: 1}}>
                            <h2 style={styles.heading}>REPUTATION MATTERS</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Reputation;