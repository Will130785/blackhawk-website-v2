import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Why extends Component {

    render() {
        return (
            <div className="why">
                <Container>
                    <Row>
                        <Col>
                            <div className="why__content">
                                <h2>Why use a company to clean your oven?</h2>
                                <p>Do you enjoy cleaning your oven? Do you know anybody who finds it a fun chore? Getting an oven clean is one of the hardest, messiest and most unpleasant kitchen tasks. In addition to the elbow grease needed to get the job done, it’s a really time consuming task. Who wants to spend their free or weekend time tackling a grimy oven?</p>
                                <p>Furthermore, a number of cleaning products that are available commercially are not effective and generate dreadful, noxious fumes. They can also be abrasive and often leave a chemical residue on surfaces. This residue poses a health risk when it comes into contact with food. Some oven cleaning products, combined with the wrong cleaning technique, can leave surfaces scratched and permanently damaged.</p>
                                <p>That’s where a professional cleaning company steps in. We handle this unpleasant but important job so that you don’t have to. We also offer you peace of mind because you know that your oven is clean, hygienic and free of toxic chemicals and fumes.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Why;