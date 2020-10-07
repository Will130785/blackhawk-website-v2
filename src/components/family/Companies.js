import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo1 from "../../img/family/family2-v2.png";
import Logo2 from "../../img/family/family6-v2.png";
import Logo3 from "../../img/family/familyimage1.jpeg";
import Logo4 from "../../img/family/familyimage3.jpeg";
import Logo5 from "../../img/family/familyimage5.jpeg";
import Logo6 from "../../img/family/familyimage7.jpeg";

class Companies extends Component {

    render() {

        const styles = {
            images: {
                picture: {
                    width: "100%"
                }
            }
        }

        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <img style={styles.images.picture} src={Logo1} alt="Logo" />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img style={styles.images.picture} src={Logo2} alt="Logo" />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img style={styles.images.picture} src={Logo3} alt="Logo" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div>
                                <img style={styles.images.picture} src={Logo4} alt="Logo" />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img style={styles.images.picture} src={Logo5} alt="Logo" />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img style={styles.images.picture} src={Logo6} alt="Logo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Companies;