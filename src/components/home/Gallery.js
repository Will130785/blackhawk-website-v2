import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SlideShow from "../home/SlideShow";

class Gallery extends Component {
    

    render() {
        
        return (
            <div>
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