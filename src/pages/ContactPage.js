import React, {Component} from "react";
import ContactForm from "../components/contact/ContactForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactCard from "../components/contact/ContactCard";

class ContactPage extends Component {

    render() {
        const styles = {
            containerDiv: {
                overall: {
                    padding: "10rem 0 10rem 0"
                }
            }
        }

        return (
            <div>
                <div style={styles.containerDiv.overall}>
                <Container>
                    <Row>
                        <Col lg={true}>
                            <div className="contactCard">
                                <ContactCard />
                            </div>
                        </Col>
                        <Col lg={true}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        )
    }
}

export default ContactPage;