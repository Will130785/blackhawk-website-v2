import React, {Component} from "react";
import Hero from "../components/Hero";
import PriceCard from "../components/pricing/PriceCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class PricePage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="Pricing"
                    blurb="Check out our prices and packages to suit everybodies needs" 
                />
                <main>
                <Container>
                        <Row>
                            <Col lg={true}>
                                <div>
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
                                <div>
                                    <PriceCard
                                        title="End of Tenancy Cleaning"
                                        intro="Here is a list of our end of tenancy cleaning prices" 
                                        listItems={["1-Bedroom flat - £150",
                                                    "2-Bedroom flat - £230",
                                                    "3-Bedroom flat - £320",
                                                    "4-Bedroom flat - £360",
                                                    "5-Bedroom flat - £440",
                                                    "1-Bedroom house - £160",
                                                    "2-Bedroom house - £250",
                                                    "3-Bedroom house - £350",
                                                    "4-Bedroom house - £410",
                                                    "5-Bedroom house - £500"
                                                    
                                                ]} 
                    
                                    />
                                </div>
                            </Col>
                            <Col lg={true}>
                                <div>
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
                        <Row>
                            <Col lg={true}>
                                <div>
                                    <PriceCard
                                        title="Commercial Cleaning"
                                        intro="Here is a list of our commercial cleaning prices" 
                                        listItems={["List item 1", "List item 2", "List item 3"]} 
                    
                                    />
                                </div>
                            </Col>
                            <Col lg={true}>
                                <div>
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
                                <div>
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
                </main>
            </div>
        )
    }
}

export default PricePage;