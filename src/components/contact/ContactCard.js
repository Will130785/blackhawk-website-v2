import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class ContactCard extends Component {

    render() {

        return (
            <Card style={{ width: '100%' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                    <Card.Title>Contact Details</Card.Title>
                    <Card.Text>Get in contact with us using the form or any of the details below</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <p>Meadows Walk</p>
                        <p>Walton on the Hill</p>
                        <p>Surrey</p>
                        <p>KT20 7UG</p>
                    </ListGroupItem>
                    <ListGroupItem>
                        <p>Fairmead</p>
                        <p>Epsom Road</p>
                        <p>Leatherhead</p>
                        <p>KT22 8ST</p>
                    </ListGroupItem>
                    <ListGroupItem>
                        <p>0345 257 8322</p>
                    </ListGroupItem>
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>
            
        )
    }
}

export default ContactCard;