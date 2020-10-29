// import React, {Component} from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Logo from "../img/logo/logo-small.jpg";
// import Covid from "../img/covid/covid.jpg";
// import {A} from "hookrouter";

// class Navigation extends Component {
    

//     render() {

//         return (
//             <Navbar collapseOnSelect variant="dark" expand="lg" fixed="top">
//                 <Navbar><A href="/"><img className="logo" src={Logo} alt="Logo" /></A></Navbar>
//                 <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav" collapseOnSelect>
//                 <Nav className="navItems">
//                     <Nav><A className="a-link" href="/">Home</A></Nav>
//                     <Nav><A className="a-link" href="/oven">Oven Cleaning</A></Nav>
//                     {/* <NavDropdown className="navbar-nav" title="Oven Cleaning" id="basic-nav-dropdown">
//                         <NavDropdown.Item><A className="a-link" href="/oven">Packages</A></NavDropdown.Item>
//                         <NavDropdown.Item><A className="a-link" href="/general">General Cleaning</A></NavDropdown.Item>
//                         <NavDropdown.Item><A className="a-link" href="/commercial">Commercial Cleaning</A></NavDropdown.Item>
//                     </NavDropdown> */}
//                     <NavDropdown className="navbar-nav" title="End of Tenancy" id="basic-nav-dropdown">
//                         <NavDropdown.Item><A className="a-link" href="/general">General</A></NavDropdown.Item>
//                         <NavDropdown.Item><A className="a-link" href="/commercial">Commercial</A></NavDropdown.Item>
//                         {/* <NavDropdown.Item><A className="a-link" href="/commercial">Commercial Cleaning</A></NavDropdown.Item> */}
//                     </NavDropdown>
//                     <Nav><A className="a-link" href="/family">Blackhawk Family</A></Nav>
//                     <Nav><A className="a-link" href="/areas">Areas Covered</A></Nav>
//                     <Nav><A className="a-link" href="/areas">Franchise</A></Nav>
//                     <Nav><A className="a-link" href="/contact">Contact</A></Nav>
//                     <Nav><A className="a-link" href="/covid"><img class="covid" src={Covid} alt="Covid Logo" /></A></Nav>
//                 </Nav>
//                 </Navbar.Collapse>
//             </Navbar>

//         )
//     }
// }

// export default Navigation;

import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../img/logo/logo-small.jpg";
import Covid from "../img/covid/covid.jpg";
import {A} from "hookrouter";

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
    }

    handleClick = () => {

        if(window.innerWidth < 960) {
            this.setState({
                clicked: !this.state.clicked
            })
        }
    }


    render() {

        return (
            <nav className="navbar-items">
                <h1 className="navbar-logo">
                    <img className="logo" src={Logo} alt="Logo" />
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {this.state.clicked ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                        <li key={index}>
                            <A onClick={this.handleClick} className={item.cName} href={item.url}>{item.title}</A>
                        </li>
                        )
                    })}
                    <A onClick={this.handleClick} className="a-link" href="/covid"><img class="covid" src={Covid} alt="Covid Logo" /></A>
                </ul>
            </nav>
        )
    }
}

export default Navigation;