import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Reputation extends Component {

    render() {

        const styles = {
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
            <div>
                <Container>
                    <Row>
                        <Col lg={true}>
                            <ul style={styles.listItems}>
                                <li>Hollyoaks star Richard Blackwood</li>
                                <li>Love Island 2017 contestant Tyla Carr - "Amazing job. I will definitely recommend to my family and friends"</li>
                                <li>UK Garage artist Dennis G (sambuca) - "Excellent service. Highly recommended"</li>
                                <li>Author of the book The Lost Boyz Justin Rollins - "Oven is literally brand new! Great service"</li>
                                <li>Former Britain's got talent contestant DJ Talent - "Very impressed with my new oven"</li>
                            </ul>
                        </Col>
                        <Col style={styles.cols.title} lg={true}>
                            <h2 style={styles.heading}>REPUTATION MATTERS</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Reputation;