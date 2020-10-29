import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

class Contact extends Component {

    render() {

        return (
            <div class="contact-page">
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
        )
    }
}

export default Contact;