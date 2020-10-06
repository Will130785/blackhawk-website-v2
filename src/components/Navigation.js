import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/logo/logo-small.jpg";
import Covid from "../img/covid/covid.jpg";

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="/"><img className="logo" src={Logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="oven">Oven Cleaning</NavDropdown.Item>
                        <NavDropdown.Item href="/general">General Cleaning</NavDropdown.Item>
                        <NavDropdown.Item href="/commercial">Commercial Cleaning</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                    <Nav.Link href="/areas">Areas Covered</Nav.Link>
                    <Nav.Link href="/family">Family</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/covid"><img class="covid" src={Covid} alt="Covid Logo" /></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;