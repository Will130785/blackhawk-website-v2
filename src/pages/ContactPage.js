import React, {Component} from "react";
import Hero from "../components/Hero";
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
                <Hero 
                    title="Contact us"
                    blurb="Get in contact with us today for a quote" 
                />
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