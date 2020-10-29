import React, {Component} from "react";
import PriceCard from "../components/pricing/PriceCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class PricePage extends Component {

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
                        <Row className="priceCard-row">
                            <Col lg={true}>
                                <div className="priceCard-div">
                                    <PriceCard
                                        title="Oven Cleaning"
                                        intro="Here is a list of our oven cleaning prices" 
                                        listItems={["Standard Single Oven 60cm - £45",
                                                     "Double Oven (Small door top, Large door bottom) - £55",
                                                      "90cm Wide Oven - £50",
                                                      "2 Range oven - £65",
                                                      "3 Range oven - £85",
                                                      "Oven Trays - £4 per tray",
                                                      "4 Ring Hob - £15",
                                                      "6 Ring Hob -  £18",
                                                      "8 Ring Hob - £20",
                                                      "Halogen Hobs £10",
                                                      "Small Extractor ( including replacement filter) - £15",
                                                      "Large Extractor (including replacement filter) - £20",
                                                      "Microwaves standard £15-£20"
                                                    ]} 
                    
                                    />
                                </div>
                            </Col>
                            <Col lg={true}>
                                <div className="priceCard-div">
                                    <PriceCard
                                        title="End of Tenancy Cleaning"
                                        intro="Here is a list of our end of tenancy cleaning prices" 
                                        listItems={["Studio flat - £60",
                                                    "1-Bedroom 1 Bathroom  - £120",
                                                    "2-Bedroom 1 Bathroom - £140",
                                                    "2-Bedroom 2 Bathroom - £160",
                                                    "3-Bedroom 1 Bathroom - £180",
                                                    "3-Bedroom 2 Bathroom - £220",
                                                    "4-Bedroom 1 Bathroom - £260",
                                                    "4-Bedroom 2 Bathroom - £300",
                                                    "4-Bedroom 3 Bathroom - £330",
                                                    "5-Bedroom 2 Bathroom - £370",
                                                    "5-Bedroom 3 Bathroom - £400"
                                                    
                                                ]} 
                    
                                    />
                                </div>
                            </Col>
                            <Col lg={true}>
                                <div className="priceCard-div">
                                    <PriceCard
                                        title="General Cleaning"
                                        intro="Here is a list of our general cleaning prices" 
                                        listItems={["Flat - 2 Hours - £30",
                                                    "Flat - 3 Hours - £45", 
                                                    "Flat - 4 Hours - £60",
                                                    "Flat - 5 Hours - £75",
                                                    "House - 3 Hours - £45",
                                                    "House - 4 Hours - £60",
                                                    "House - 5 Hours - £75",
                                                    "House - 6 Hours - £90"
                                                ]} 
                    
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row className="priceCard-row">
                            <Col lg={true}>
                                <div className="priceCard-div">
                                    <PriceCard
                                        title="Commercial Cleaning"
                                        intro="Please email us and we will get back to you within 24 hours" 
                                        
                    
                                    />
                                </div>
                            </Col>
                            <Col lg={true}>
                                <div className="priceCard-div">
                                    <PriceCard
                                        title="Yasmin17"
                                        intro="Save £10 by taking advantage of this package" 
                                        listItems={["Double Oven, Hob ( 4 ring gas ) and small extractor - £75", 
                                                    "Additional Rings - £1.50 each", 
                                                    "Large Extractor - £5 extra"
                                                ]} 
                    
                                    />
                                </div>
                            </Col>
                            <Col lg={true}>
                                <div className="priceCard-div">
                                    <PriceCard
                                        title="Aaliyah14"
                                        intro="Save £10 by taking advantage of this package" 
                                        listItems={["Single Oven, Hob ( 4 ring gas ) and Small extractor - £65", 
                                                    "Additional rings - £1.50 each", 
                                                    "Large Extractor - £5"
                                                ]} 
                    
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default PricePage;