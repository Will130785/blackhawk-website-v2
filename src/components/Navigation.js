import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../img/logo/logo-small.jpg";
import {A} from "hookrouter";
// import NavModal from "../components/Modal";

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
                    {/* <A className="a-link" href=""><NavModal /></A> */}
                </ul>
            </nav>
        )
    }
}

export default Navigation;