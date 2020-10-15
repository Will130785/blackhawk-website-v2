import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class PriceCard extends Component {

    render() {

        return (
            <Card style={{ width: '100%' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.intro}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {this.props.listItems ? this.props.listItems.map(item => {
                        return <ListGroupItem>{item}</ListGroupItem>
                    }) : ``}
                    {/* <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>
            
        )
    }
}

export default PriceCard;