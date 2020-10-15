import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Service extends Component {

    render() {

        const styles = {
            containerDiv: {
                overall: {
                    padding: "10rem 0 10rem 0"
                }
            },
            title: {
                heading: {
                    fontSize: "4rem"
                }
            },
            description: {
                paragraph: {
                    fontSize: "2rem"
                }
            }
        }

        return (
            <div style={styles.containerDiv.overall}>
                <Container>
                    <Row>
                        <Col lg={true}>
                            <div>
                                {this.props.left}
                            </div>
                        </Col>
                        <Col lg={true}>
                            <div>
                                {this.props.right}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Service;