import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SlideShow from "../home/SlideShow";

class Gallery extends Component {
    

    render() {
        const styles = {
            containerDiv: {
                overall: {
                    padding: "10rem 0 10rem 0"
                }
            },
        }
        
        return (
            <div style={styles.containerDiv.overall}>
                <Container>
                    <Row>
                        <Col lg={true}>
                            <div>
                                <h1>Gallery</h1>
                                <p>Take a look at some of our pictures</p>
                            </div>
                        </Col>
                        <Col lg={true}>
                            <SlideShow />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Gallery;