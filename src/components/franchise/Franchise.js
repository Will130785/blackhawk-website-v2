import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Franchise extends Component {

    render() {
        return (
            <div className="franchise">
                <Container>
                    <Row>
                        <Col>
                            <div className="franchise__content">
                                <p>We are one of the best if not the best Oven cleaning company around. We have been recommended by many celebrities, won many awards and have 100% positive feedback. This is why from 2021 we will be taking enquiries regarding franchise opportunities.</p>
                                <p>Please note we have a strict procedure and we will not be offering this to just anyone. We pride ourselves in our customer service and have high expectations. </p>
                                <p> In return we will support you through your whole journey, provide you with 1-1 training .We are highly skilled and proven in lead generation and have the abillity to help any potential franchisee’s earn over £750 -£1000 a week ofcourse you will need to have strong work ethos and great dedication to reach the success and the height we know that can be achieved.</p>
                                <p>For further information please email Ameerah at enquiries@blackhawkovencleaning.co.uk</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Franchise;