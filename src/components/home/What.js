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
                                <p>All our employees receive 3 to 4 weeks training and are DBS (Police) checked. They are fully insured to work on the appliances they are </p>
                                <p>All the dirty removable parts like the oven racks, shelves, trays etc. are removed and placed to soak in our specially fitted cleaning tank.After a few hours they are removed from the cleaning solution and rinsed off with fresh water and dried with amazing results.</p>
                                <p>Inside your home, our professionally trained technician will work on your appliance using biodegradable cleaning products with no fumes or strong odours, your sparkling clean oven is ready for immediate use</p>
                                <p>We clean commercial cookers and extractors, as well as other commercial kitchen appliances. Prices and time involved depend on the size and number of appliances. All jobs are therefore priced accordingly and a site visit may be required</p>
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