import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FamPic from "../../img/home/family.jpeg";


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
                }
            }
        }

        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={true}>
                            <img style={styles.image.pic} src={FamPic} alt="Family" />
                        </Col>
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
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Family;