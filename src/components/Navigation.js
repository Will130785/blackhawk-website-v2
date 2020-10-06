import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/logo/logo-small.jpg";
import Covid from "../img/covid/covid.jpg";
import {A} from "hookrouter";

class Navigation extends Component {
    

    render() {
        return (
            <Navbar variant="dark" expand="lg">
                <Navbar><A class="a-link" href="/"><img className="logo" src={Logo} alt="Logo" /></A></Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav><A class="a-link" href="/">Home</A></Nav>
                    <Nav><A class="a-link" href="/about">About</A></Nav>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item><A class="a-link" href="oven">Oven Cleaning</A></NavDropdown.Item>
                        <NavDropdown.Item><A class="a-link" href="/general">General Cleaning</A></NavDropdown.Item>
                        <NavDropdown.Item><A class="a-link" href="/commercial">Commercial Cleaning</A></NavDropdown.Item>
                    </NavDropdown>
                    <Nav><A class="a-link" href="/gallery">Gallery</A></Nav>
                    <Nav><A class="a-link" href="/areas">Areas Covered</A></Nav>
                    <Nav><A class="a-link" href="/family">Family</A></Nav>
                    <Nav><A class="a-link" href="/pricing">Pricing</A></Nav>
                    <Nav><A class="a-link" href="/contact">Contact</A></Nav>
                    <Nav><A class="a-link" href="/covid"><img class="covid" src={Covid} alt="Covid Logo" /></A></Nav>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;