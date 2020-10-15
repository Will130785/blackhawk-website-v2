import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo1 from "../../img/family/companylogo1.png";
import Logo2 from "../../img/family/companylogo2.png";
import Logo3 from "../../img/family/companylogo3.png";
import Logo4 from "../../img/family/companylogo4.png";
import Logo5 from "../../img/family/companylogo5.png";
import Logo6 from "../../img/family/companylogo6.png";
import Logo7 from "../../img/family/companylogo7.png";

class Companies extends Component {

    render() {

        const styles = {
            containerDiv: {
                overall: {
                    padding: "10rem 0 10rem 0",
                    backgroundColor: "#fff"
                }
            },
            images: {
                picture: {
                    width: "100%"
                }
            }
        }

        return (
            <div style={styles.containerDiv.overall}>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <img style={styles.images.picture} src={Logo1} alt="Logo" />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img style={styles.images.picture} src={Logo7} alt="Logo" />
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