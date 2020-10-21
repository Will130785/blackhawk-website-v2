import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import repPic from "../../img/oven-cleaning/oven1.jpeg";
import { AiFillStar } from 'react-icons/ai';

class Reputation extends Component {

    render() {

        return (
            <div className="reputation">
                <Container>
                    <Row>
                        <Col lg={true}>
                            <div className="reputation__heading">
                                <h2>REPUTATION MATTERS</h2>
                            </div>
                            <div className="reputation__img">
                                <img className="reputation__img--pic" src={repPic} alt="3D Logo" />
                            </div>
                        </Col>
                        <Col lg={true}>
                            <div className="reputation__content">
                                <h2>Recommended by</h2>
                                <ul>
                                    <li><AiFillStar /> Hollyoaks star Richard Blackwood</li>
                                    <li><AiFillStar /> Love Island 2017 contestant Tyla Carr</li>
                                    <li><AiFillStar /> UK Garage artist Dennis G (sambuca)</li>
                                    <li><AiFillStar /> Author of the book The Lost Boyz Justin Rollins</li>
                                    <li><AiFillStar /> Former Britain's got talent contestant DJ Talent</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Reputation;