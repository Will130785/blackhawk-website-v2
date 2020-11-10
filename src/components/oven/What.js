import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import whatPic from "../../img/oven-cleaning/oven2.jpeg";

class What extends Component {
    

    render() {
        
        return (
            <div className="what">
                <Container>
                    <Row>
                        <Col lg={true}>
                            <div className="what__content">
                                <h2>What we do</h2>
                                <p>All our employees receive 3-4 weeks training with DBS (Disclosure Barring service) checked.</p>
                                <p>They are fully insured to work on the appliances such as, dirty oven racks, shelves, trays and many more. These are removed and placed to soak in our specially fitted cleaning tank. After a few hours they are removed from the cleaning solution and rinsed off with fresh water and dried with spectacular results.</p>
                                <p>Inside your home our professionally trained technician will work on your appliance using eco- friendly biodegradable cleaning products. This will leave your gleaming clean oven ready for immediate use.</p>
                                <p>No only ovens, but we also clean commercial cookers, extractors and other commercial kitchen appliances.</p>
                                <p>Prices and time involved depends on the size and number of appliances. Therefore, all jobs are priced accordingly and may require a site visit.</p>
                            </div>
                        </Col>
                        <Col lg={true}>
                            <div className="what__img">
                                <img className="what__img--pic" src={whatPic} alt="Oven" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default What;